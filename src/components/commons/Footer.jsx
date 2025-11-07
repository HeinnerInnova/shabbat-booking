import React from 'react'

const Footer = () => {
    return (
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
    )
}

export default Footer
