
import { useNavigate } from "react-router-dom";

const SideBar = ({ isOpen, setIsOpen }) => {

    const navigate = useNavigate();

    const navToLogin = () => {
        navigate("/login");
    };

    const navToViewRequests = () => {
        navigate("/view-requests");
    };

    const navToManageRequest = () => {
        navigate("/manage-request");
    };

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
                            <div className="size-8 text-primary">
                                <svg
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                    />
                                </svg>
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
                            <a
                                className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                                href="#"
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
                                <p className="text-sm font-medium">Reservas Pendientes</p>
                            </a>

                            <a
                                className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                                href="#"
                                onClick={() => {
                                    setIsOpen(false);
                                    navToViewRequests();
                                }}
                            >
                                <span className="material-symbols-outlined">home</span>
                                <p className="text-sm font-medium">Reservas Activas</p>
                            </a>
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
    )
}

export default SideBar
