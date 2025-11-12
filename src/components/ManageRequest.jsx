import HeadConfig from "./commons/HeadConfig";
import HeaderManage from "./commons/HeaderManage.jsx";
import SideBar from "./commons/SideBar.jsx";
import ReservationDetailsModal from "./commons/ReservationDetailsModal.jsx";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ManageRequest = () => {

  const navigate = useNavigate();

  // dentro del componente principal:
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [reservations, setReservations] = useState([]); // 🔹 Aquí guardaremos los datos de la API
  const [loading, setLoading] = useState(true); // para controlar el loader

  const getReservationsFromAPI = async () => {
    try {

      // 🌀 Mostrar pantalla de carga
      Swal.fire({
        title: "Consultando reservas...",
        html: "Por favor espera unos segundos.",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const API_BASE = import.meta.env.DEV
        ? "/api"
        : "https://corsproxy.io/?" + encodeURIComponent("https://shabbat-booking.onrender.com/shabbat-booking/api");

      // 🌐 Llamar a la API
      const response = await fetch(`${API_BASE}/reservas`);

      if (!response.ok) throw new Error("Error al obtener reservas");
      const data = await response.json();
      Swal.close();
      setReservations(data); // ✅ Guardamos los datos en el estado
    } catch (error) {
      console.error(error);

      // ❌ Mostrar error y cerrar loader
      Swal.fire({
        icon: "error",
        title: "Error al cargar disponibilidad",
        text: "Ocurrió un problema al conectar con el servidor. Intenta nuevamente.",
        confirmButtonColor: "#EF4444",
      });
      navigate("/login");
    } finally {
      setLoading(false); // ✅ Terminamos el estado de carga
    }
  };
  // 🔹 Llamamos la API al montar el componente
  useEffect(() => {
    getReservationsFromAPI();
  }, []);


  const handleViewDetails = (reserva) => {
    // Extraemos los niveles de datos
    const bloque = reserva.bloques?.[0];
    const habitacion = bloque?.habitaciones?.[0];
    const camarotes = habitacion?.camarotes || [];

    // Construimos la lista de camas
    const camasReservadas = camarotes
      .map(
        (camarote) =>
          `Camarote ${camarote.posicion} - Cama(s): ${camarote.camas
            .map((c) => c.posicion)
            .join(", ")}`
      )
      .join("; ");

    // Formateamos las fechas
    const fechaIngreso = new Date(`${reserva.fechaInicio}T00:00:00`).toLocaleDateString();
    const fechaSalida = new Date(`${reserva.fechaFin}T00:00:00`).toLocaleDateString();
    // Creamos el objeto que se enviará al modal
    const formattedReservation = {
      nombreCompleto: reserva.nombreCompleto,
      tipoDocumento: reserva.tipoDocumento || "No registrado",
      documentNumber: reserva.documento || "No registrado",
      correo: reserva.email || "No registrado",
      telefono: reserva.telefono || "No registrado",
      genero: reserva.genero || "No especificado",
      distrito: reserva.distrito || "No registrado",
      fechaIngreso,
      fechaSalida,
      hogar: bloque ? `Hogar de ${bloque.nombre}` : "No asignado",
      numeroHabitación: habitacion ? habitacion.posicion : "-",
      cantidadCamas: camarotes.reduce((acc, c) => acc + (c.camas?.length || 0), 0),
      estado: reserva.estado || "Pendiente",
      camasReservadas: camasReservadas || "Sin asignar",
    };

    // Actualizamos el estado
    setSelectedReservation(formattedReservation);
    setShowDetailsModal(true);
  };



  const handleCloseDetails = () => {
    setSelectedReservation(null);
    setShowDetailsModal(false);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 🧩 Filtros añadidos
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHome, setSelectedHome] = useState(""); // "V" o "S"
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  // Nuevo estado
  const [selectedEstado, setSelectedEstado] = useState("");

  // Función manejadora
  const handleEstadoChange = (estado) => {
    setSelectedEstado(estado);
  };


  // 🧩 Aplicar filtros sobre el array original
  const filteredReservations = reservations.filter((reserva) => {
    const nombre = reserva.nombreCompleto?.toLowerCase() || "";
    const tipoHogar = reserva.bloques?.[0]?.codigo?.toUpperCase() || "";
    const search = searchTerm.toLowerCase();

    // Coincidencia por nombre o tipo de hogar
    const matchesNameOrHome =
      nombre.includes(search) ||
      (tipoHogar === "V" && "varones".includes(search)) ||
      (tipoHogar === "M" && "mujeres".includes(search));

    const matchesEstado =
      !selectedEstado || reserva.estado === selectedEstado;

    // Filtro por hogar
    const matchesHome = !selectedHome || tipoHogar === selectedHome;

    // Filtro por rango de fechas
    const fechaInicio = new Date(reserva.fechaInicio);
    const fechaFin = new Date(reserva.fechaFin);

    const matchesDate =
      (!dateRange.start || fechaInicio >= new Date(dateRange.start)) &&
      (!dateRange.end || fechaFin <= new Date(dateRange.end));

    return matchesNameOrHome && matchesHome && matchesDate && matchesEstado;
  });

  // ✅ Función para aprobar una reserva
  const handleApprove = (reserva) => {
    Swal.fire({
      title: "¿Aprobar reservación?",
      text: `Estás a punto de aprobar la reserva de ${reserva.formData?.name || "este solicitante"}.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, aprobar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#22C55E", // verde tailwind
      cancelButtonColor: "#6B7280", // gris tailwind
      background: document.documentElement.classList.contains("dark")
        ? "#1E293B"
        : "#FFFFFF",
      color: document.documentElement.classList.contains("dark")
        ? "#F1F5F9"
        : "#0F172A",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // 🌀 Mostrar loader mientras se envía
          Swal.fire({
            title: "Actualizando reserva...",
            text: "Por favor espera unos segundos",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading(),
            background: document.documentElement.classList.contains("dark")
              ? "#1E293B"
              : "#FFFFFF",
            color: document.documentElement.classList.contains("dark")
              ? "#F1F5F9"
              : "#0F172A",
          });

          const API_BASE = import.meta.env.DEV
            ? "/api"
            : "https://corsproxy.io/?" + encodeURIComponent("https://shabbat-booking.onrender.com/shabbat-booking/api");

          // 🌐 Enviar PATCH al backend
          const response = await fetch(`${API_BASE}/reservas/${reserva.id}/estado`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ estado: "Activa" }),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || "No se pudo crear la reserva");
          }

          Swal.close(); // Cerrar loader

          // ✅ Actualizar la reserva en el estado
          setReservations((prevReservations) =>
            prevReservations.map((r) => (r.id === data.id ? data : r))
          );

          // ✅ Mostrar mensaje de éxito
          await Swal.fire({
            icon: "success",
            title: "Reserva aprobada",
            text: "La reserva fue aprobada exitosamente.",
            confirmButtonColor: "#22C55E",
            background: document.documentElement.classList.contains("dark")
              ? "#1E293B"
              : "#FFFFFF",
            color: document.documentElement.classList.contains("dark")
              ? "#F1F5F9"
              : "#0F172A",
          });

        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error al actualizar la reserva",
            text: error.message || "Ocurrió un problema al procesar tu reserva.",
            confirmButtonText: "Intentar nuevamente",
            confirmButtonColor: "#EF4444",
            background: document.documentElement.classList.contains("dark")
              ? "#1E293B"
              : "#FFFFFF",
            color: document.documentElement.classList.contains("dark")
              ? "#F1F5F9"
              : "#0F172A",
          });
        }
      }
    });
  };

  // ❌ Función para rechazar una reserva
  const handleReject = (reserva) => {
    Swal.fire({
      title: "¿Rechazar reservación?",
      text: `Estás a punto de rechazar la reserva de ${reserva.formData?.name || "este solicitante"}.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, rechazar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#EF4444", // rojo tailwind
      cancelButtonColor: "#6B7280", // gris
      background: document.documentElement.classList.contains("dark")
        ? "#1E293B"
        : "#FFFFFF",
      color: document.documentElement.classList.contains("dark")
        ? "#F1F5F9"
        : "#0F172A",
    }).then(async (result) => {
      if (result.isConfirmed) {

        try {
          // 🌀 Mostrar loader mientras se envía
          Swal.fire({
            title: "Actualizando reserva...",
            text: "Por favor espera unos segundos",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading(),
            background: document.documentElement.classList.contains("dark")
              ? "#1E293B"
              : "#FFFFFF",
            color: document.documentElement.classList.contains("dark")
              ? "#F1F5F9"
              : "#0F172A",
          });

          const API_BASE = import.meta.env.DEV
            ? "/api"
            : "https://corsproxy.io/?" + encodeURIComponent("https://shabbat-booking.onrender.com/shabbat-booking/api");

          // 🌐 Enviar PATCH al backend
          const response = await fetch(`${API_BASE}/reservas/${reserva.id}/estado`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ estado: "Cerrada" }),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || "No se pudo crear la reserva");
          }

          Swal.close(); // Cerrar loader

          // ✅ Actualizar la reserva en el estado
          setReservations((prevReservations) =>
            prevReservations.map((r) => (r.id === data.id ? data : r))
          );

          // ✅ Mostrar mensaje de éxito
          await Swal.fire({
            icon: "success",
            title: "Reserva rechazada",
            text: "La reserva fue rechazada correctamente.",
            confirmButtonColor: "#EF4444",
            background: document.documentElement.classList.contains("dark")
              ? "#1E293B"
              : "#FFFFFF",
            color: document.documentElement.classList.contains("dark")
              ? "#F1F5F9"
              : "#0F172A",
          });

        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error al actualizar la reserva",
            text: error.message || "Ocurrió un problema al procesar tu reserva.",
            confirmButtonText: "Intentar nuevamente",
            confirmButtonColor: "#EF4444",
            background: document.documentElement.classList.contains("dark")
              ? "#1E293B"
              : "#FFFFFF",
            color: document.documentElement.classList.contains("dark")
              ? "#F1F5F9"
              : "#0F172A",
          });
        }

        // 👉 Aquí puedes agregar la lógica real de rechazo (API o cambio de estado)

      }
    });
  };

  // 🌀 Mientras carga mostramos un loader simple o un texto
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-600 dark:text-gray-200">
        Cargando reservas...
      </div>
    );
  }

  return (
    <>
      <HeadConfig />
      <div className="flex h-screen">
        <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <main className="flex-1 flex flex-col overflow-y-auto">
          <HeaderManage setIsSidebarOpen={setIsSidebarOpen} />

          <div className="p-6 lg:p-8 flex-1">
            {/* Encabezado */}
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div>
                <p className="text-gray-900 dark:text-white text-3xl font-bold">
                  Reservas
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-base">
                  {filteredReservations.length} reservas encontradas
                </p>
              </div>
            </div>

            {/* Filtros */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  className="form-input h-12 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark px-4 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  placeholder="Buscar por nombre o tipo de hogar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <select
                className="h-12 min-w-[190px] rounded-lg bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 px-4 pr-10 text-sm text-gray-900 dark:text-white appearance-none bg-no-repeat bg-[right_0.75rem_center] bg-[length:1rem_auto]"
                value={selectedHome}
                onChange={(e) => setSelectedHome(e.target.value)}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
                }}
              >
                <option value="">Todos los hogares</option>
                <option value="V">Hogar de Varones</option>
                <option value="M">Hogar de Mujeres</option>
              </select>


              <select
                className="h-12 min-w-[190px] rounded-lg bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 px-4 pr-10 text-sm text-gray-900 dark:text-white appearance-none bg-no-repeat bg-[right_0.75rem_center] bg-[length:1rem_auto]"
                value={selectedEstado}
                onChange={(e) => handleEstadoChange(e.target.value)}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
                }}
              >
                <option value="">Todos los estados</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Activa">Activa</option>
                <option value="Cerrada">Cerrada</option>
              </select>


              <input
                type="date"
                className="h-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-gray-900 dark:text-white px-3 text-sm"
                value={dateRange.start}
                onChange={(e) =>
                  setDateRange((prev) => ({ ...prev, start: e.target.value }))
                }
              />
              <input
                type="date"
                className="h-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-gray-900 dark:text-white px-3 text-sm"
                value={dateRange.end}
                onChange={(e) =>
                  setDateRange((prev) => ({ ...prev, end: e.target.value }))
                }
              />
            </div>

            {/* Tabla de reservas */}
            <div className="mt-6 bg-white dark:bg-[#18232e] rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                      Solicitante
                    </th>
                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                      Hogar / Bloque
                    </th>
                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                      Habitación / Camas
                    </th>
                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                      Fechas
                    </th>
                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300 text-center">
                      Estado
                    </th>
                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300 text-right">
                      Acciones
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredReservations.map((reserva, index) => {
                    const bloque = reserva.bloques?.[0];
                    const habitacion = bloque?.habitaciones?.[0];
                    const camarotes = habitacion?.camarotes || [];

                    const camasReservadas = camarotes
                      .map(
                        (camarote) =>
                          `Camarote ${camarote.posicion} - Cama(s): ${camarote.camas
                            .map((c) => c.posicion)
                            .join(", ")}`
                      )
                      .join("; ");

                    const fechaInicioFmt = new Date(
                      `${reserva.fechaInicio}T00:00:00`
                    ).toLocaleDateString();
                    const fechaFinFmt = new Date(
                      `${reserva.fechaFin}T00:00:00`
                    ).toLocaleDateString();

                    return (
                      <tr
                        key={index}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      >
                        {/* Solicitante */}
                        <td className="p-4 text-sm text-gray-900 dark:text-white">
                          {reserva.nombreCompleto}
                        </td>

                        {/* Hogar */}
                        <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                          {bloque
                            ? `Hogar de ${bloque.nombre}`
                            : "No asignado"}
                        </td>

                        {/* Habitación y camas */}
                        <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                          {habitacion
                            ? `Habitación ${habitacion.posicion}`
                            : "-"}
                          <br />
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {camasReservadas || "Sin asignar"}
                          </span>
                        </td>

                        {/* Fechas */}
                        <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                          {fechaInicioFmt} - {fechaFinFmt}
                        </td>

                        {/* Estado */}
                        {/* Estado */}
                        <td className="p-4 text-center">
                          {(() => {
                            const estado = reserva.estado || "Pendiente";

                            // Definimos los estilos según el estado
                            const estadoClasses = {
                              Pendiente:
                                "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
                              Activa:
                                "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
                              Cerrada:
                                "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
                            };

                            const clase = estadoClasses[estado] || estadoClasses["Pendiente"];

                            return (
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${clase}`}
                              >
                                {estado}
                              </span>
                            );
                          })()}
                        </td>


                        {/* Acciones */}
                        {/* Acciones */}
                        <td className="p-4 text-right">
                          <div className="flex justify-end items-center gap-2">
                            {/* Estado: Pendiente → mostrar Aprobar, Rechazar y Ver detalle */}
                            {reserva.estado === "Pendiente" && (
                              <>
                                <button
                                  onClick={() => handleApprove(reserva)}
                                  title="Aprobar"
                                  className="size-8 rounded-lg bg-success/10 text-success hover:bg-success/20 transition-colors flex items-center justify-center"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    check
                                  </span>
                                </button>

                                <button
                                  onClick={() => handleReject(reserva)}
                                  title="Rechazar"
                                  className="size-8 rounded-lg bg-danger/10 text-danger hover:bg-danger/20 transition-colors flex items-center justify-center"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    close
                                  </span>
                                </button>
                              </>
                            )}

                            {/* Estado: Activa → mostrar Cerrar y Ver detalle */}
                            {reserva.estado === "Activa" && (
                              <>
                                <button
                                  onClick={() => handleReject(reserva)} // mejor nombrar así el handler
                                  title="Cerrar reserva"
                                  className="size-8 rounded-lg bg-danger/10 text-danger hover:bg-danger/20 transition-colors flex items-center justify-center"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    done_all
                                  </span>
                                </button>
                              </>
                            )}

                            {/* Estado: Cerrada → solo Ver detalle */}
                            {/* El botón de ver detalle se muestra siempre */}
                            <button
                              onClick={() => handleViewDetails(reserva)}
                              title="Ver detalles"
                              className="size-8 rounded-lg bg-gray-200/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                visibility
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      <ReservationDetailsModal
        isOpen={showDetailsModal}
        onClose={handleCloseDetails}
        reservation={selectedReservation}
      />
    </>
  );

};

export default ManageRequest;
