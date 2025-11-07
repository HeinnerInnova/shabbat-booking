import React from 'react'

const HeaderManage = ({ setIsSidebarOpen }) => {
    return (
        <header className="flex-shrink-0 bg-white dark:bg-[#18232e] border-b border-gray-200 dark:border-gray-700 flex items-center justify-between whitespace-nowrap px-6 py-3">
            <div className="flex items-center gap-4">
                {/* Botón menú visible solo en móvil */}
                <button
                    className="md:hidden bg-primary text-white p-2 rounded-lg shadow-md"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>

                <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                    Gestión de Reservas
                </h2>
            </div>
            <div className="flex flex-1 justify-end items-center gap-4">
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    data-alt="Avatar de administrador"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjn_N__tgrfP_WDn7622EUV6G1A2-UEkTNWueaho0HEaTnS8OPPsBcue1YG-Cgfswn6HspdqPRM_RMtIiJh3A8fc3obKlMhaS8cigUSSe1MVHHPKW2QDP5NPIWfKeU4kMya03Q6reDeW3YXPwNDsq3h57DKIDMK8I4p9T9JoTD7pXpM-20jHUXoC5RUZT5O_nvWFVsG_PEx2ThtCQWFM6v4h_QHzTTlG2HcsKuWS6RRN4du_My-bDmBmgiMb8GHJKb1aWtLvq4H7Y")'
                    }}
                />
            </div>
        </header>
    )
}

export default HeaderManage
