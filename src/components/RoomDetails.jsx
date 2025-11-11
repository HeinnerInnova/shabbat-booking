import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./commons/Header";
import Footer from "./commons/Footer";
import HeadConfig from "./commons/HeadConfig";
import Swal from "sweetalert2";

const RoomDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { detalleHabitacion, fechas } = location.state || {};

    // 🧩 Estado del formulario
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        district: "",
        gender: "",
        age: "",
        documentType: "",
        documentNumber: ""
    });

    // 🧩 Estado de camas seleccionadas
    const [selectedBeds, setSelectedBeds] = useState([]);

    const [otroDistrito, setOtroDistrito] = useState("");
    const [isOtro, setIsOtro] = useState(false);

    // 🧭 Redirigir si no hay datos de habitación
    useEffect(() => {
        if (!detalleHabitacion) {
            navigate("/disponibility", { replace: true });
        }
    }, [detalleHabitacion, navigate]);

    if (!detalleHabitacion) return null;

    // 📝 Manejar cambios del formulario
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    // 🛏️ Seleccionar/deseleccionar camas
    const toggleBed = (cama, camarote) => {
        const key = `${camarote.posicion}-${cama.posicion}`;
        setSelectedBeds((prev) =>
            prev.some((b) => b.key === key)
                ? prev.filter((b) => b.key !== key)
                : [...prev, { key, cama, camarote }]
        );
    };

    // 🚀 Enviar datos al success
    const navToSuccess = async () => {
        // Campos requeridos
        const requiredFields = {
            name: "Nombre completo",
            email: "Correo electrónico",
            phone: "Teléfono",
            district: "Distrito o barrio",
            gender: "Género",
            age: "Edad",
            documentType: "Tipo de documento",
            documentNumber: "Número de documento",
        };

        const emptyFields = Object.entries(requiredFields)
            .filter(([key]) => !formData[key]?.trim())
            .map(([, label]) => label);

        const fechasIncompletas = !fechas?.desde || !fechas?.hasta;
        const sinCamasSeleccionadas = !selectedBeds || selectedBeds.length === 0;

        if (emptyFields.length > 0 || fechasIncompletas || sinCamasSeleccionadas) {
            let htmlMensaje = `<ul class="text-left mt-2">`;

            if (emptyFields.length > 0) {
                htmlMensaje += `<li>• Completa los campos obligatorios: <b>${emptyFields.join(", ")}</b></li>`;
            }

            if (fechasIncompletas) {
                htmlMensaje += `<li>• Selecciona el rango de fechas</li>`;
            }

            if (sinCamasSeleccionadas) {
                htmlMensaje += `<li>• Selecciona al menos una cama disponible</li>`;
            }

            htmlMensaje += `</ul>`;

            Swal.fire({
                icon: "warning",
                title: "Datos incompletos",
                html: htmlMensaje,
                confirmButtonText: "Entendido",
                confirmButtonColor: "#3B82F6",
                background: document.documentElement.classList.contains("dark")
                    ? "#1E293B"
                    : "#FFFFFF",
                color: document.documentElement.classList.contains("dark")
                    ? "#F1F5F9"
                    : "#0F172A",
            });

            return;
        }

        // 🧩 Agrupar las camas seleccionadas por camarote
        const camarotesMap = {};

        selectedBeds.forEach(({ cama, camarote }) => {
            const camaroteId = camarote.id;
            if (!camarotesMap[camaroteId]) {
                camarotesMap[camaroteId] = {
                    id: camarote.id,
                    habitacionId: camarote.habitacionId,
                    posicion: camarote.posicion,
                    camas: [],
                };
            }
            camarotesMap[camaroteId].camas.push({
                id: cama.id ?? null,
                idCamarote: cama.idCamarote,
                posicion: cama.posicion,
                disponible: cama.disponible,
            });
        });

        // 🧠 Convertir el objeto en array
        const camarotesSeleccionados = Object.values(camarotesMap);

        // 🏠 Crear la estructura de habitación
        const habitacion = {
            id: detalleHabitacion.id,
            posicion: detalleHabitacion.posicion,
            descripcion: detalleHabitacion.descripcion,
            bloqueId: detalleHabitacion.bloqueId,
            disponible:
                detalleHabitacion.disponible !== undefined
                    ? detalleHabitacion.disponible
                    : true,
            camarotes: camarotesSeleccionados,
        };

        // 🚀 Construir el payload final para backend
        const payload = {
            nombreCompleto: formData.name,
            email: formData.email,
            telefono: formData.phone,
            distrito: formData.district,
            genero: formData.gender,
            edad: formData.age,
            tipoDocumento: formData.documentType,
            numeroDocumento: formData.documentNumber,
            fechaInicio: fechas.desde,
            fechaFin: fechas.hasta,
            bloques: [
                {
                    id: detalleHabitacion.bloqueId,
                    codigo: detalleHabitacion.codigo || "V",
                    nombre: detalleHabitacion.nombreBloque || "Varones",
                    habitaciones: [habitacion],
                },
            ],
        };

        console.log("📦 Payload final a enviar:", payload);

        try {
            // 🌀 Mostrar loader mientras se envía
            Swal.fire({
                title: "Creando tu reserva...",
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

            // 🌐 Enviar POST al backend
            const response = await fetch("/api/reservas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "No se pudo crear la reserva");
            }

            Swal.close(); // Cerrar loader

            // ✅ Mostrar mensaje de éxito
            await Swal.fire({
                icon: "success",
                title: "Reserva creada exitosamente 🎉",
                text: "Tu reserva ha sido registrada correctamente.",
                confirmButtonText: "Continuar",
                confirmButtonColor: "#3B82F6",
                background: document.documentElement.classList.contains("dark")
                    ? "#1E293B"
                    : "#FFFFFF",
                color: document.documentElement.classList.contains("dark")
                    ? "#F1F5F9"
                    : "#0F172A",
            });

            // 🧭 Navegar al success con los detalles
            navigate("/success", { state: { reservationDetails: data } });

        } catch (error) {
            console.error("❌ Error al crear reserva:", error);

            Swal.fire({
                icon: "error",
                title: "Error al crear la reserva",
                text: error.message || "Ocurrió un problema al enviar tu reserva.",
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
    };


    const zonas = {
        "ZONA 1 VILLAVICENCIO": [
            "Villavicencio Central",
            "Villavicencio Oriental",
            "Villavicencio Occidental",
            "Villavicencio Norte",
            "Acacías",
            "Puerto López",
            "Villanueva",
            "Guainía",
        ],
        "ZONA 2 ARIARI": [
            "Granada Central",
            "Granada Emanuel",
            "Puerto Rico",
            "Vista Hermosa",
            "Lejanías",
        ],
        "ZONA 3 GUAVIARE": ["Guaviare Central", "Guaviare Jerusalén"],
        "ZONA 4 CASANARE": [
            "Yopal Central",
            "Yopal Efeso",
            "Aguazul",
            "Paz de Ariporo",
        ],
    };

    const handleDistrictChange = (e) => {
        const value = e.target.value;
        if (value === "Otro") {
            setIsOtro(true);
            handleChange({ target: { id: "district", value: "" } });
        } else {
            setIsOtro(false);
            handleChange({ target: { id: "district", value } });
        }
    };


    return (
        <>
            <HeadConfig />
            <div className="relative flex min-h-screen w-full flex-col">
                <Header />

                <main className="flex-1 py-10 md:py-16 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-4xl flex-col gap-8">
                        {/* Título */}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex min-w-72 flex-col gap-2">
                                <p className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                                    Detalles de la Habitación {detalleHabitacion.numeroHabitación}
                                </p>
                                <p className="text-slate-500 dark:text-slate-400 text-base">
                                    Seleccione las camas disponibles y complete sus datos para
                                    enviar la solicitud de reserva.
                                </p>
                            </div>
                        </div>

                        {/* Imagen */}
                        <div className="relative w-full aspect-[16/9] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm">
                            <img
                                alt="Vista de la habitación"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkA6gw6fp-U1dC205H5CPh_UOM6DTXJuOLvhPE43xeVHdCOE4L--PbVGVkNdwQDjgaTMXcIl3449qZid-mk8AMUy_WpUNj2A2YOLS9dh8jMk-vD8MOSEriHIAWX-lA-a6_F-mobpXoXMmnRs2ABNFdlZTYI3xIA_eZ22hW4uWUwn2VJbSGdKEi3ENCkKcWl7wnQoie8VKCNvbt0yR80iCE68q-EIN1ffhJsdfnI__uajNrF1V7NPdXGKD0uGwN1Xfnzzwk_VzNuqg"
                            />
                        </div>

                        {/* 🛏️ Disponibilidad de Camas */}
                        <div className="bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                            <div className="p-6 md:p-8">
                                <h2 className="text-slate-900 dark:text-white text-xl font-bold pb-4">
                                    Disponibilidad de Camas
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {detalleHabitacion.camarotes.map((camarote, iCamarote) => (
                                        <div
                                            key={iCamarote}
                                            className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-col gap-4 bg-slate-50 dark:bg-slate-800/30"
                                        >
                                            <p className="font-semibold text-slate-800 dark:text-slate-200">
                                                Camarote {camarote.posicion}
                                            </p>

                                            <div className="flex flex-col gap-2">
                                                {camarote.camas.map((cama, iCama) => {
                                                    const esDisponible = cama.disponible;
                                                    const ubicacion =
                                                        cama.posicion === 2
                                                            ? "SUPERIOR"
                                                            : "INFERIOR";
                                                    const key = `${camarote.posicion}-${cama.posicion}`;
                                                    const checked = selectedBeds.some(
                                                        (b) => b.key === key
                                                    );

                                                    return (
                                                        <label
                                                            key={iCama}
                                                            className={`flex items-center justify-between gap-3 rounded-md p-3 ${esDisponible
                                                                ? "cursor-pointer hover:bg-slate-200/50 dark:hover:bg-slate-700/50"
                                                                : "cursor-not-allowed opacity-60"
                                                                }`}
                                                        >
                                                            <span className="flex items-center gap-3">
                                                                <span
                                                                    className={`material-symbols-outlined ${esDisponible
                                                                        ? "text-green-500"
                                                                        : "text-slate-400 dark:text-slate-500"
                                                                        }`}
                                                                >
                                                                    {esDisponible
                                                                        ? "check_circle"
                                                                        : "cancel"}
                                                                </span>
                                                                <span
                                                                    className={`text-base ${esDisponible
                                                                        ? "text-slate-700 dark:text-slate-300"
                                                                        : "text-slate-500 dark:text-slate-400"
                                                                        }`}
                                                                >
                                                                    Cama {cama.posicion} -{" "}
                                                                    {ubicacion}
                                                                </span>
                                                            </span>

                                                            <input
                                                                type="checkbox"
                                                                checked={checked}
                                                                onChange={() =>
                                                                    toggleBed(cama, camarote)
                                                                }
                                                                disabled={!esDisponible}
                                                                className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/50"
                                                            />
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="border-t border-slate-200 dark:border-slate-800" />

                            {/* 🧾 Formulario del Solicitante */}
                            <div className="p-6 md:p-8">
                                <h2 className="text-slate-900 dark:text-white text-xl font-bold pb-4">
                                    Datos del Solicitante
                                </h2>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                                    <div className="md:col-span-2">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                                        >
                                            Nombre Completo
                                        </label>
                                        <input
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Ej: Alcira Mayorga"
                                            type="text"
                                            className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        />
                                    </div>

                                    {/* 🪪 Tipo de documento */}
                                    <div>
                                        <label
                                            htmlFor="documentType"
                                            className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                                        >
                                            Tipo de documento
                                        </label>
                                        <select
                                            id="documentType"
                                            value={formData.documentType}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        >
                                            <option value="">Seleccionar</option>
                                            <option>Cédula de Ciudadanía</option>
                                            <option>Tarjeta de Identidad</option>
                                            <option>Cédula de Extranjería</option>
                                            <option>Pasaporte</option>
                                            <option>Registro Civil</option>
                                        </select>
                                    </div>

                                    {/* 🔢 Número de documento */}
                                    <div>
                                        <label
                                            htmlFor="documentNumber"
                                            className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                                        >
                                            Número de documento
                                        </label>
                                        <input
                                            id="documentNumber"
                                            value={formData.documentNumber}
                                            onChange={handleChange}
                                            placeholder="Ej: 1.234.567.890"
                                            type="text"
                                            className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Ej: ejemplo@gmail.com"
                                            type="email"
                                            className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium">
                                            Teléfono
                                        </label>
                                        <input
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onInput={(e) => {
                                                e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Solo números
                                            }}
                                            placeholder="Ej: 3161234567"
                                            type="text"
                                            inputMode="numeric"
                                            className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        />
                                    </div>


                                    <div>
                                        <label htmlFor="district" className="block text-sm font-medium mb-1">
                                            Distrito al que pertenece
                                        </label>

                                        <select
                                            id="district"
                                            value={isOtro ? "Otro" : formData.district}
                                            onChange={handleDistrictChange}
                                            className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        >
                                            <option value="">Seleccione un distrito...</option>
                                            {Object.entries(zonas).map(([zona, distritos]) => (
                                                <optgroup key={zona} label={zona}>
                                                    {distritos.map((distrito) => (
                                                        <option key={distrito} value={distrito}>
                                                            {distrito}
                                                        </option>
                                                    ))}
                                                </optgroup>
                                            ))}
                                            <option value="Otro">Otro...</option>
                                        </select>

                                        {isOtro && (
                                            <input
                                                type="text"
                                                id="district"
                                                placeholder="Escriba su distrito"
                                                value={otroDistrito}
                                                onChange={(e) => {
                                                    setOtroDistrito(e.target.value);
                                                    handleChange({ target: { id: "district", value: e.target.value } });
                                                }}
                                                className="mt-2 block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                            />
                                        )}
                                    </div>

                                    {/* 📅 Fechas de reservación */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Fechas de reservación
                                        </label>

                                        {fechas?.desde && fechas?.hasta ? (
                                            <p className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">
                                                Del{" "}
                                                <span className="text-primary">
                                                    {new Date(`${fechas.desde}T00:00:00Z`).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
                                                </span>{" "}
                                                al{" "}
                                                <span className="text-primary">
                                                    {new Date(`${fechas.hasta}T00:00:00Z`).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
                                                </span>
                                            </p>
                                        ) : (
                                            <p className="mt-1 text-slate-500 text-sm">
                                                No se ha seleccionado un rango de fechas.
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="gender" className="block text-sm font-medium">
                                            Género
                                        </label>
                                        <select
                                            id="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        >
                                            <option value="">Seleccionar</option>
                                            <option>Masculino</option>
                                            <option>Femenino</option>
                                            <option>Otro</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="age" className="block text-sm font-medium">
                                            Edad
                                        </label>
                                        <input
                                            id="age"
                                            value={formData.age}
                                            onChange={handleChange}
                                            onInput={(e) => {
                                                e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Solo números
                                            }}
                                            placeholder="Ej: 75"
                                            type="text"
                                            inputMode="numeric"
                                            className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        />
                                    </div>

                                </form>
                            </div>


                            <div className="border-t border-slate-200 dark:border-slate-800" />

                            {/* Botón enviar */}
                            <div className="flex justify-end p-6">
                                <button
                                    onClick={navToSuccess}
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                >
                                    Enviar Solicitud
                                </button>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default RoomDetails;
