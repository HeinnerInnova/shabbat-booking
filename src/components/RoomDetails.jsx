import { useNavigate } from "react-router-dom";
import Header from "./Header";
const RoomDetails = () => {
    const navigate = useNavigate();

    const navToSuccess = () => {
        navigate("/success");
    };

    return (<>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Detalles de Habitación y Reserva</title>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
            href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
            rel="stylesheet"
        />
        <style
            dangerouslySetInnerHTML={{
                __html:
                    "\n    :root {\n      --checkbox-tick-svg: url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e');\n    }\n  "
            }}
        />
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                <main className="flex-1 py-10 md:py-16 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-4xl flex-col gap-8">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex min-w-72 flex-col gap-2">
                                <p className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                                    Detalles de la Habitación 08
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
                                    <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-col gap-4 bg-slate-50 dark:bg-slate-800/30">
                                        <p className="font-semibold text-slate-800 dark:text-slate-200">
                                            Camarote 1
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            <label className="flex cursor-pointer items-center justify-between gap-3 rounded-md p-3 transition-colors hover:bg-slate-200/50 dark:hover:bg-slate-700/50">
                                                <span className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-green-500">
                                                        check_circle
                                                    </span>
                                                    <span className="text-slate-700 dark:text-slate-300 text-base font-normal leading-normal">
                                                        Cama 1 - SUPERIOR
                                                    </span>
                                                </span>
                                                <input
                                                    className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 dark:bg-slate-700 text-primary checked:bg-primary checked:border-primary focus:ring-primary/50 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
                                                    type="checkbox"
                                                />
                                            </label>
                                            <label className="flex cursor-not-allowed items-center justify-between gap-3 rounded-md p-3 opacity-60">
                                                <span className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500">
                                                        cancel
                                                    </span>
                                                    <span className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                                                        Cama 2 - INFERIOR
                                                    </span>
                                                </span>
                                                <input
                                                    className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 bg-slate-200 dark:bg-slate-700 text-primary checked:bg-primary checked:border-primary"
                                                    disabled=""
                                                    type="checkbox"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-col gap-4 bg-slate-50 dark:bg-slate-800/30">
                                        <p className="font-semibold text-slate-800 dark:text-slate-200">
                                            Camarote 2
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            <label className="flex cursor-pointer items-center justify-between gap-3 rounded-md p-3 transition-colors hover:bg-slate-200/50 dark:hover:bg-slate-700/50">
                                                <span className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-green-500">
                                                        check_circle
                                                    </span>
                                                    <span className="text-slate-700 dark:text-slate-300 text-base font-normal leading-normal">
                                                        Cama 3 - SUPERIOR
                                                    </span>
                                                </span>
                                                <input
                                                    className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 dark:bg-slate-700 text-primary checked:bg-primary checked:border-primary focus:ring-primary/50 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
                                                    type="checkbox"
                                                />
                                            </label>
                                            <label className="flex cursor-pointer items-center justify-between gap-3 rounded-md p-3 transition-colors hover:bg-slate-200/50 dark:hover:bg-slate-700/50">
                                                <span className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-green-500">
                                                        check_circle
                                                    </span>
                                                    <span className="text-slate-700 dark:text-slate-300 text-base font-normal leading-normal">
                                                        Cama 4 - INFERIOR
                                                    </span>
                                                </span>
                                                <input
                                                    className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 dark:bg-slate-700 text-primary checked:bg-primary checked:border-primary focus:ring-primary/50 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
                                                    type="checkbox"
                                                />
                                            </label>
                                        </div>
                                    </div>
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
                <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark/50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
                                <a
                                    className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl">
                                        {" "}
                                        real_estate_agent{" "}
                                    </span>
                                    <span>Hogar Anacaona</span>
                                </a>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Brindando cuidado y confort a nuestros mayores con dedicación y
                                    amor.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                                    Navegación
                                </p>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                                            href="#"
                                        >
                                            Inicio
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                                            href="#"
                                        >
                                            Habitaciones
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                                            href="#"
                                        >
                                            Sobre Nosotros
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                                            href="#"
                                        >
                                            Contacto
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                                    Legal
                                </p>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                                            href="#"
                                        >
                                            Términos y Condiciones
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                                            href="#"
                                        >
                                            Política de Privacidad
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                                    Síguenos
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                                        href="#"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.72-1.88-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.7-.02-1.36-.21-1.94-.53v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.35 0-.69-.02-1.03-.06A12.02 12.02 0 0 0 8.29 20c7.55 0 11.68-6.25 11.68-11.68l-.01-.53c.8-.58 1.49-1.3 2.04-2.13z" />
                                        </svg>
                                    </a>
                                    <a
                                        className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                                        href="#"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M18.2 2H5.8C3.7 2 2 3.7 2 5.8v12.4C2 20.3 3.7 22 5.8 22h12.4c2.1 0 3.8-1.7 3.8-3.8V5.8C22 3.7 20.3 2 18.2 2zM12 18.2c-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2 6.2 2.8 6.2 6.2-2.8 6.2-6.2 6.2zM18.2 7.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                                        </svg>
                                    </a>
                                    <a
                                        className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                                        href="#"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8.5 18.5h-3v-9h3v9zm-1.5-10.2c-.9 0-1.7-.7-1.7-1.7s.7-1.7 1.7-1.7 1.7.7 1.7 1.7-.8 1.7-1.7 1.7zm12 10.2h-3v-4.4c0-1.1-.4-1.8-1.3-1.8-.7 0-1.2.5-1.4.9-.1.2-.1.4-.1.6v4.7h-3v-9h3v1.3c.4-.6 1-1.4 2.5-1.4 1.8 0 3.2 1.2 3.2 3.8v5.3z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                © 2024 Hogar Anacaona. Todos los derechos reservados.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </>
    );
}

export default RoomDetails;