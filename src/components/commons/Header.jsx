import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();

    const navToLogin = () => {
        navigate("/login");
    };

    const navToHome = () => {
        navigate("/");
    };

    return (
        <header className="sticky top-0 z-10 w-full border-b border-gray-200/80 dark:border-gray-700/80 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-primary text-3xl">
                            home_health
                        </span>
                        <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                            Hogar Alegría
                        </h1>
                    </div>
                    <nav className="hidden items-center gap-8 md:flex">
                        <a
                            onClick={navToHome}
                            className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                            href="#"
                        >
                            Inicio
                        </a>
                        <a
                            className="text-sm font-bold text-primary dark:text-primary"
                            href="#"
                        >
                            Habitaciones
                        </a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button onClick={navToLogin} className="flex min-w-[84px] h-10 px-4 items-center justify-center rounded-lg bg-primary text-slate-50 text-sm font-bold hover:bg-primary/90 transition-colors">
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;