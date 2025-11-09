import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./commons/Header.jsx";
import Footer from "./commons/Footer.jsx";
import HeadConfig from "./commons/HeadConfig.jsx";

export default function Disponibility() {
  const location = useLocation();
  const { habitacionesHogar, hogar, fechas } = location.state || [];
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState("Todas");

  useEffect(() => {
    if (!habitacionesHogar) {
      navigate("/", { replace: true });
    }
  }, [habitacionesHogar, navigate]);

  if (!habitacionesHogar) return null;

  const habitaciones = habitacionesHogar.map(el => ({ ...el, hogar }))

  /**
   * Determina el estado general de la habitación.
   */
  const getEstadoHabitacion = (habitacion) => {
    const camas = habitacion.camarotes.flatMap((c) => c.camas);
    const disponibles = camas.filter((c) => c.estado === "D").length;

    if (disponibles === camas.length)
      return { label: "Disponible", color: "green-status" };
    if (disponibles === 0) return { label: "Ocupada", color: "red-status" };
    return { label: "Parcial", color: "orange-status" };
  };

  /**
   * Obtiene el texto del resumen de disponibilidad.
   */
  const getDisponibilidadTexto = (habitacion) => {
    const camas = habitacion.camarotes.flatMap((c) => c.camas);
    const disponibles = camas.filter((c) => c.estado === "D").length;

    if (disponibles === 0) return "Completa";
    return `${disponibles} de ${camas.length} camas disponibles`;
  };

  /**
   * Determina la clase de color para una cama según su estado.
   */
  const getCamaColor = (estado) => {
    if (estado === "D") return "text-green-status";
    return "text-gray-400 dark:text-gray-600";
  };

  /**
   * Determina el color y texto del botón final según disponibilidad.
   */
  const getBotonProps = (habitacion) => {
    const { label } = getEstadoHabitacion(habitacion);

    if (label === "Ocupada") {
      return {
        estado: "O",
        texto: "Ocupada",
        clase:
          "bg-gray-200/60 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 cursor-not-allowed opacity-70",
      };
    }
    return {
      estado: "D",
      texto: "Solicitar Reserva",
      clase: "bg-primary/10 text-primary hover:bg-primary/20",
    };
  };

  /**
   * Navegación a los detalles de la habitación
   */
  const navToRoomDetails = (habitacionSeleccionada) => {
    navigate("/room-details", { state: { detalleHabitacion: habitacionSeleccionada, fechas } });
  };

  /**
   * Aplica el filtro según la selección actual
   */
  const habitacionesFiltradas = habitaciones.filter((habitacion) => {
    const { label } = getEstadoHabitacion(habitacion);

    if (filtro === "Disponibles") return label === "Disponible";
    if (filtro === "Ocupadas") return label === "Ocupada";
    return true; // "Todas"
  });

  return (
    <>
      <HeadConfig />
      <div className="relative flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col gap-6">
            {/* Título */}
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-72 flex-col gap-1">
                <p className="text-gray-900 dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
                  Disponibilidad de Habitaciones {new Date(`${fechas.desde}T00:00:00`).toLocaleDateString("es-CO", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })} - {new Date(`${fechas.hasta}T00:00:00`).toLocaleDateString("es-CO", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                  Hogar de {hogar === 'V' ? 'Varones' : 'Señoritas'} - {habitaciones.length} Habitaciones
                </p>
              </div>
            </div>

            {/* FILTROS */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-10 w-full sm:w-auto items-center justify-center rounded-lg bg-gray-200/60 dark:bg-gray-800/60 p-1">
                {["Todas", "Disponibles", "Ocupadas"].map((opcion) => (
                  <label
                    key={opcion}
                    className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 transition-all
                      text-sm font-medium leading-normal
                      ${filtro === opcion
                        ? "bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400"
                      }`}
                  >
                    <span className="truncate">{opcion}</span>
                    <input
                      type="radio"
                      name="availability-filter"
                      className="hidden"
                      value={opcion}
                      checked={filtro === opcion}
                      onChange={() => setFiltro(opcion)}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* HABITACIONES */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {habitacionesFiltradas.map((habitacion) => {
                const estado = getEstadoHabitacion(habitacion);
                const resumen = getDisponibilidadTexto(habitacion);
                const boton = getBotonProps(habitacion);

                return (
                  <div
                    key={habitacion.numeroHabitación}
                    className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Habitación {habitacion.numeroHabitación}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium text-${estado.color}`}>
                          {estado.label}
                        </span>
                        <div className={`size-3 rounded-full bg-${estado.color}`} />
                      </div>
                    </div>

                    {/* Cuerpo */}
                    <div className="flex flex-col gap-3">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{resumen}</p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {habitacion.camarotes.map((camarote) =>
                          camarote.camas.map((cama, i) => (
                            <div
                              key={`${habitacion.numeroHabitación}-${camarote.numeroCamarote}-${cama.ubicación}-${i}`}
                              className={`flex items-center gap-2 ${getCamaColor(cama.estado)}`}
                            >
                              <span className="material-symbols-outlined bed-icon">bed</span>
                              <span className="text-xs font-medium">
                                CAMAROTE {camarote.numeroCamarote}{" "}
                                {cama.ubicación === "S" ? "SUPERIOR" : "INFERIOR"}
                              </span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Botón */}
                    <button
                      disabled={boton.estado === "O"}
                      onClick={() => navToRoomDetails(habitacion)}
                      className={`mt-auto w-full flex min-w-[84px] items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] transition-colors ${boton.clase}`}
                    >
                      <span className="truncate">{boton.texto}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
