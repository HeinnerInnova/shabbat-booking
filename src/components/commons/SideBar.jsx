import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const SideBar = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const navToLogin = () => navigate("/login");
    const navToViewRequests = () => navigate("/view-requests");
    const navToManageRequest = () => navigate("/manage-request");

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Fondo oscuro (overlay) cuando el menú está abierto en móvil */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed md:static top-0 left-0 h-full z-50 bg-white dark:bg-[#18232e] border-r border-gray-200 dark:border-gray-700 flex flex-col transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 w-64 flex-shrink-0`}
            >
                <div className="flex h-full flex-col justify-between p-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 px-3 py-2">
                            <div className="flex items-center justify-center size-8 text-primary">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="h-8 w-8 object-contain"
                                />
                            </div>

                            <h1 className="text-gray-900 dark:text-white text-lg font-bold">
                                Panel Administrativo
                            </h1>

                            {/* Botón de cerrar en móvil */}
                            <button
                                className="ml-auto md:hidden text-gray-600 dark:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                            {/* Reservas Pendientes */}
                            <a
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                  ${isActive("/manage-request")
                                        ? "bg-primary text-white"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`}
                                onClick={() => {
                                    setIsOpen(false);
                                    navToManageRequest();
                                }}
                            >
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    bed
                                </span>
                                <p className="text-sm font-medium">Lista de reservas</p>
                            </a>

                            {/* Reservas Activas */}
                            {/* <a
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                  ${isActive("/view-requests")
                                        ? "bg-primary text-white"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`}
                                onClick={() => {
                                    setIsOpen(false);
                                    navToViewRequests();
                                }}
                            >
                                <span className="material-symbols-outlined">home</span>
                                <p className="text-sm font-medium">Reservas Activas</p>
                            </a> */}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <a
                            className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
                            onClick={() => {
                                setIsOpen(false);
                                navToLogin();
                            }}
                        >
                            <span className="material-symbols-outlined">exit_to_app</span>
                            <p className="text-sm font-medium">Cerrar Sesión</p>
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default SideBar;
