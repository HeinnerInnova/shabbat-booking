import Footer from "./commons/Footer.jsx";
import HeadConfig from "./commons/HeadConfig.jsx";
import Header from "./commons/Header.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Success = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { reservationDetails } = location.state || {};
    // 🧭 Redirigir si no hay datos de habitación
    useEffect(() => {
        if (!reservationDetails) {
            navigate("/room-details", { replace: true });
        }
    }, [reservationDetails, navigate]);

    if (!reservationDetails) return null;
    const generarDescripcionCamas = (selectedBeds) => {
        if (!selectedBeds || selectedBeds.length === 0) {
            return "No hay camas seleccionadas.";
        }

        // Agrupar por número de camarote
        const agrupado = selectedBeds.reduce((acc, item) => {
            const numCamarote = item.camarote.numeroCamarote;
            if (!acc[numCamarote]) acc[numCamarote] = [];
            acc[numCamarote].push(item.cama);
            return acc;
        }, {});

        // Construir el texto final
        const descripcion = Object.entries(agrupado)
            .map(([numCamarote, camas]) => {
                const camasTexto = camas
                    .map(
                        (c) =>
                            `Cama ${c.numeroCama} (${c.ubicación === "S" ? "Superior" : "Inferior"})`
                    )
                    .join(", ");
                return `Camarote ${numCamarote} — ${camasTexto}`;
            })
            .join(" / ");

        return `Camas seleccionadas: ${descripcion}`;
    };

    const navToHome = () => {
        navigate("/");
    };
    return (
        <>
            <HeadConfig />
            <div className="relative flex min-h-screen w-full flex-col">
                <Header />
                <main className="flex-grow w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <div className="w-full max-w-xl">
                        <div className="flex flex-col items-center overflow-hidden rounded-xl bg-white dark:bg-slate-900/70 shadow-lg ring-1 ring-slate-200 dark:ring-slate-800">
                            <div className="flex flex-col items-center justify-center gap-4 p-8 sm:p-10 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-500/20 text-green-500 dark:text-green-400">
                                    <span className="material-symbols-outlined text-4xl">
                                        check_circle
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                                        ¡Solicitud Recibida!
                                    </h1>
                                    <p className="text-sm sm:text-base font-normal leading-normal text-slate-600 dark:text-slate-400">
                                        Tu solicitud ha sido procesada con éxito. Revisa los detalles a
                                        continuación y completa el pago para asegurar tu plaza.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 sm:p-8">
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">
                                        Resumen de la Reserva
                                    </h3>
                                    <div className="flex flex-col divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
                                        <div className="flex justify-between items-center gap-x-4 py-3">
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                ID de Reserva
                                            </p>
                                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 text-right">
                                                #R8B-34X-9Y2
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center gap-x-4 py-3">
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                Nombre del solicitante
                                            </p>
                                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 text-right">
                                                {reservationDetails.formData.name}
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center gap-x-4 py-3">
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                Fechas
                                            </p>
                                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 text-right">
                                                {reservationDetails.dates.startDate} - {reservationDetails.dates.endDate}
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center gap-x-4 py-3">
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                Hogar Seleccionado
                                            </p>
                                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 text-right">
                                                {reservationDetails.habitacion.hogar === 'S' ? 'Hogar de Señoritas' : 'Hogar de Varones'}
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center gap-x-4 py-3">
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                Habitación Seleccionada
                                            </p>
                                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 text-right">
                                                {reservationDetails.habitacion.numeroHabitación}
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center gap-x-4 py-3">
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                Camas
                                            </p>
                                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 text-right">
                                                {generarDescripcionCamas(reservationDetails.selectedBeds)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-lg bg-amber-100 dark:bg-amber-500/10 p-4">
                                        <div className="flex items-start gap-3">
                                            <div className="flex-shrink-0">
                                                <span className="material-symbols-outlined text-xl text-amber-600 dark:text-amber-400">
                                                    warning
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-300">
                                                    Aviso Importante
                                                </h4>
                                                <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                                                    El pago debe realizarse en las próximas 48 horas. De lo
                                                    contrario, la reserva será cancelada automáticamente.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-4 p-6 sm:p-8 pt-4 sm:pt-6">
                                <button onClick={navToHome} className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors">
                                    <span>Volver al Inicio</span>
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
export default Success;