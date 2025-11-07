import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./commons/Header";
import Footer from "./commons/Footer";
import HeadConfig from "./commons/HeadConfig";
const RoomDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { detalleHabitacion } = location.state || {};

    useEffect(() => {
        if (!detalleHabitacion) {
            navigate("/disponibility", { replace: true });
        }
    }, [detalleHabitacion, navigate]);

    if (!detalleHabitacion) return null;

    const navToSuccess = () => {
        navigate("/success");
    };


    return (<>
        <HeadConfig />
        <div className="relative flex min-h-screen w-full flex-col">
            <Header />
            <main className="flex-1 py-10 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-4xl flex-col gap-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex min-w-72 flex-col gap-2">
                            <p className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                                Detalles de la Habitación {detalleHabitacion.numeroHabitación}
                            </p>
                            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                                Seleccione las camas disponibles y complete sus datos para
                                enviar la solicitud de reserva.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full aspect-[16/9] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm">
                        <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out">
                            <img
                                alt="Vista de la habitación 1"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkA6gw6fp-U1dC205H5CPh_UOM6DTXJuOLvhPE43xeVHdCOE4L--PbVGVkNdwQDjgaTMXcIl3449qZid-mk8AMUy_WpUNj2A2YOLS9dh8jMk-vD8MOSEriHIAWX-lA-a6_F-mobpXoXMmnRs2ABNFdlZTYI3xIA_eZ22hW4uWUwn2VJbSGdKEi3ENCkKcWl7wnQoie8VKCNvbt0yR80iCE68q-EIN1ffhJsdfnI__uajNrF1V7NPdXGKD0uGwN1Xfnzzwk_VzNuqg"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-between p-4">
                            <button className="bg-white/50 dark:bg-black/50 backdrop-blur-sm text-slate-800 dark:text-white rounded-full p-2 hover:bg-white/70 dark:hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="bg-white/50 dark:bg-black/50 backdrop-blur-sm text-slate-800 dark:text-white rounded-full p-2 hover:bg-white/70 dark:hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            <button className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-white/50" />
                            <button className="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white" />
                            <button className="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white" />
                        </div>
                    </div>
                    <div className="bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <div className="p-6 md:p-8">
                            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight pb-4">
                                Disponibilidad de Camas
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {detalleHabitacion.camarotes.map((camarote, iCamarote) => (
                                    <div
                                        key={iCamarote}
                                        className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-col gap-4 bg-slate-50 dark:bg-slate-800/30"
                                    >
                                        <p className="font-semibold text-slate-800 dark:text-slate-200">
                                            Camarote {camarote.numeroCamarote}
                                        </p>

                                        <div className="flex flex-col gap-2">
                                            {camarote.camas.map((cama, iCama) => {
                                                const esDisponible = cama.estado === "D";
                                                const ubicacion =
                                                    cama.ubicación === "S" ? "SUPERIOR" : "INFERIOR";

                                                return (
                                                    <label
                                                        key={iCama}
                                                        className={`flex items-center justify-between gap-3 rounded-md p-3 ${esDisponible
                                                            ? "cursor-pointer transition-colors hover:bg-slate-200/50 dark:hover:bg-slate-700/50"
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
                                                                {esDisponible ? "check_circle" : "cancel"}
                                                            </span>
                                                            <span
                                                                className={`text-base font-normal leading-normal ${esDisponible
                                                                    ? "text-slate-700 dark:text-slate-300"
                                                                    : "text-slate-500 dark:text-slate-400"
                                                                    }`}
                                                            >
                                                                Cama {cama.numeroCama} - {ubicacion}
                                                            </span>
                                                        </span>

                                                        <input
                                                            type="checkbox"
                                                            disabled={!esDisponible}
                                                            className={`h-5 w-5 rounded border-slate-300 dark:border-slate-600 ${esDisponible
                                                                ? "dark:bg-slate-700 text-primary checked:bg-primary checked:border-primary focus:ring-primary/50 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
                                                                : "bg-slate-200 dark:bg-slate-700"
                                                                }`}
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
                        <div className="p-6 md:p-8">
                            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight pb-4">
                                Datos del Solicitante
                            </h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                                <div className="md:col-span-2">
                                    <label
                                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                                        htmlFor="applicant-name"
                                    >
                                        Nombre Completo
                                    </label>
                                    <input
                                        className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        id="applicant-name"
                                        placeholder="Ej: Ana María González"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        id="email"
                                        placeholder="ejemplo@email.com"
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                                        htmlFor="phone"
                                    >
                                        Teléfono
                                    </label>
                                    <input
                                        className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        id="phone"
                                        placeholder="+51 987 654 321"
                                        type="tel"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                                        htmlFor="district"
                                    >
                                        Distrito al que pertenece
                                    </label>
                                    <input
                                        className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        id="district"
                                        placeholder="Ej: Miraflores"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                                        htmlFor="reservation-dates"
                                    >
                                        Fechas de reservación
                                    </label>
                                    <input
                                        className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        id="reservation-dates"
                                        type="date"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                                        htmlFor="gender"
                                    >
                                        Género
                                    </label>
                                    <select
                                        className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        id="gender"
                                    >
                                        <option>Seleccionar</option>
                                        <option>Masculino</option>
                                        <option>Femenino</option>
                                        <option>Otro</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                                        htmlFor="age"
                                    >
                                        Edad
                                    </label>
                                    <input
                                        className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        id="age"
                                        placeholder="Ej: 75"
                                        type="number"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="border-t border-slate-200 dark:border-slate-800" />
                        <div className="flex justify-end p-6">
                            <button onClick={navToSuccess}
                                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold leading-6 text-white shadow-sm transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark"
                                type="button"
                            >
                                {" "}
                                Enviar Solicitud{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    </>
    );
}

export default RoomDetails;