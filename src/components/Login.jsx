import { useNavigate } from "react-router-dom";
import HeadConfig from "./commons/HeadConfig.jsx";

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        // Aquí podrías validar el login antes
        navigate("/manage-request");
    };

    const navToHome = () => {
        navigate("/");
    };

    return (
        <>
            <HeadConfig />
            <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light p-4">
                <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white shadow-lg">
                    <div className="flex flex-col p-8 md:p-10">
                        <div className="flex flex-col items-center pb-8">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined !text-4xl">
                                    shield_person
                                </span>
                            </div>
                            <h1 className="text-zinc-900 text-2xl font-bold leading-tight tracking-tight">
                                Acceso para Administradores
                            </h1>
                            <p className="text-zinc-600 mt-1 text-sm">
                                Bienvenido al Panel de Gestión
                            </p>
                        </div>
                        <form className="flex flex-col gap-5">
                            <label className="flex flex-col">
                                <p className="text-zinc-900 text-sm font-medium leading-normal pb-2">
                                    Nombre de Usuario o Email
                                </p>
                                <div className="group flex w-full flex-1 items-stretch rounded-lg border border-zinc-300 bg-zinc-50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                                    <span className="material-symbols-outlined flex items-center justify-center pl-4 text-zinc-500 group-focus-within:text-primary">
                                        person
                                    </span>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden border-0 bg-transparent text-zinc-900 focus:outline-0 focus:ring-0 h-12 placeholder:text-zinc-400 p-3 pr-4 text-base font-normal leading-normal"
                                        placeholder="Ingrese su usuario o email"
                                        type="text"
                                    />
                                </div>
                            </label>
                            <label className="flex flex-col">
                                <p className="text-zinc-900 text-sm font-medium leading-normal pb-2">
                                    Contraseña
                                </p>
                                <div className="group flex w-full flex-1 items-stretch rounded-lg border border-zinc-300 bg-zinc-50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                                    <span className="material-symbols-outlined flex items-center justify-center pl-4 text-zinc-500 group-focus-within:text-primary">
                                        lock
                                    </span>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden border-0 bg-transparent text-zinc-900 focus:outline-0 focus:ring-0 h-12 placeholder:text-zinc-400 p-3 pr-4 text-base font-normal leading-normal"
                                        placeholder="Ingrese su contraseña"
                                        type="password"
                                    />
                                </div>
                            </label>
                            <button onClick={handleLogin} className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 mt-3 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-colors">
                                <span className="truncate">Iniciar Sesión</span>
                            </button>
                            <button onClick={navToHome} className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors">
                                <span>Volver al Inicio</span>
                            </button>
                        </form>
                        <div className="mt-6 text-center">
                            <a
                                className="text-primary hover:underline text-sm font-medium leading-normal"
                                href="#"
                            >
                                ¿Olvidó su contraseña?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;