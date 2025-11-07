import Header from "./Header.jsx";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();
    const navToHome = () => {
        navigate("/");
    };
    return (
        <>
            <meta charSet="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <title>Confirmación de Reserva</title>
            <link href="https://fonts.googleapis.com" rel="preconnect" />
            <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
            <link
                href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                rel="stylesheet"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n    "
                }}
            />
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
                                                Fechas
                                            </p>
                                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 text-right">
                                                01 Ago, 2024 - 31 Ago, 2024
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center gap-x-4 py-3">
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                Hogar de Reposo
                                            </p>
                                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 text-right">
                                                Casa del Sol
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center gap-x-4 py-3">
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                Camas
                                            </p>
                                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 text-right">
                                                Hab. Doble #204, Cama 1
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
                                <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors">
                                    <span>Proceder al Pago</span>
                                </button>
                                <button onClick={navToHome} className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors">
                                    <span>Volver al Inicio</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
                            <div className="flex flex-col items-center gap-2 md:items-start">
                                <a
                                    className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white"
                                    href="#"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                                        <span className="material-symbols-outlined text-xl">home</span>
                                    </span>
                                    <span>HogarGest</span>
                                </a>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    © 2024 HogarGest. Todos los derechos reservados.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                                <a
                                    className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary"
                                    href="#"
                                >
                                    Términos
                                </a>
                                <a
                                    className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary"
                                    href="#"
                                >
                                    Privacidad
                                </a>
                                <a
                                    className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary"
                                    href="#"
                                >
                                    Contacto
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>

    );
}
export default Success;