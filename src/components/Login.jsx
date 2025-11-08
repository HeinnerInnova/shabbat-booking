import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeadConfig from "./commons/HeadConfig.jsx";
import logo from "../assets/logo-llanos.png"; // Ajusta esta ruta según tu proyecto

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "admin") {
            setError("");
            navigate("/manage-request");
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    const navToHome = (e) => {
        e.preventDefault();
        navigate("/");
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <HeadConfig />
            <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light p-4">
                <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white shadow-lg">
                    <div className="flex flex-col p-8 md:p-10">
                        {/* Logo */}
                        <div className="flex flex-col items-center pb-8">
                            <img
                                src={logo}
                                alt="Logo"
                                className="mb-4 h-16 w-16 object-contain"
                            />
                            <h1 className="text-zinc-900 text-2xl font-bold leading-tight tracking-tight text-center">
                                Acceso para Administradores
                            </h1>
                            <p className="text-zinc-600 mt-1 text-sm text-center">
                                Bienvenido al Panel de Gestión
                            </p>
                        </div>

                        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
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
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
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
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </label>

                            {error && (
                                <div className="text-red-500 text-sm text-center font-medium">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 mt-3 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-colors"
                            >
                                <span className="truncate">Iniciar Sesión</span>
                            </button>

                            <button
                                onClick={navToHome}
                                className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-5 text-sm font-medium text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:ring-offset-2 transition-colors"
                            >
                                <span>Volver al Inicio</span>
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <a
                                href="#"
                                onClick={handleForgotPassword}
                                className="text-primary hover:underline text-sm font-medium leading-normal cursor-pointer"
                            >
                                ¿Olvidó su contraseña?
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-80 text-center">
                        <span className="material-symbols-outlined text-primary text-4xl mb-2">
                            support_agent
                        </span>
                        <h2 className="text-lg font-semibold text-zinc-800 mb-2">
                            Restablecer Contraseña
                        </h2>
                        <p className="text-zinc-600 text-sm mb-4">
                            Contacte con el equipo de soporte para reestablecer su contraseña.
                        </p>
                        <button
                            onClick={closePopup}
                            className="mt-2 w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
                        >
                            Entendido
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
