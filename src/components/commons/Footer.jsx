import logo from "../../assets/logo-llanos.png";

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* LOGO Y DESCRIPCIÓN */}
                    <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
                        <a
                            className="flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-white"
                            href="#"
                        >
                            <img
                                src={logo}
                                alt="Logo Shabbat Booking"
                                className="w-10 h-10 rounded-md object-cover shadow-sm dark:bg-white"
                            />
                            <span>Sede Campestre Shabbat</span>
                        </a>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Disfruta tu estadía en la Sede Campestre Shabbat: un lugar para descansar, renovar y conectar con Dios.
                        </p>
                    </div>

                    {/* NAVEGACIÓN */}
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

                    {/* LEGAL */}
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

                    {/* 🌐 REDES SOCIALES */}
                    <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                            Síguenos
                        </p>

                        <div className="flex gap-4">
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/iasdasollanos/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.505v-9.294H9.691v-3.622h3.138V8.413c0-3.1 1.893-4.788 4.657-4.788 1.324 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/adventistasllanosorientales"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
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
                        </div>
                    </div>

                </div>

                {/* COPYRIGHT */}
                <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        © 2025 Sede Campestre Shabbat. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
