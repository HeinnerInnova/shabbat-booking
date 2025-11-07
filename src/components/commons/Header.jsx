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
                            Shabbat Booking
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={navToHome} className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors">
                            Inicio
                        </button>
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