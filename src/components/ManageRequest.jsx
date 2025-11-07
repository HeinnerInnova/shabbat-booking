import HeadConfig from "./commons/HeadConfig";
import HeaderManage from "./commons/HeaderManage.jsx";
import SideBar from "./commons/SideBar.jsx";
import { useState } from "react";

const ManageRequest = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <HeadConfig />
      <div className="flex h-screen">
        {/* SideNavBar */}
        <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          {/* TopNavBar */}
          <HeaderManage setIsSidebarOpen={setIsSidebarOpen} />
          {/* Page Content */}
          <div className="p-6 lg:p-8 flex-1">
            {/* PageHeading */}
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.03em]">
                  Solicitudes de Reserva Pendientes
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                  12 solicitudes pendientes
                </p>
              </div>
            </div>
            {/* Filters */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              {/* SearchBar */}
              <div className="flex-1">
                <label className="flex flex-col h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-gray-500 dark:text-gray-400 flex border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                      placeholder="Buscar por nombre de solicitante u hogar..."
                      defaultValue=""
                    />
                  </div>
                </label>
              </div>
              {/* Chips */}
              <div className="flex gap-3 items-center">
                <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 px-4">
                  <p className="text-gray-900 dark:text-white text-sm font-medium">
                    Hogar de Reposo
                  </p>
                  <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">
                    arrow_drop_down
                  </span>
                </button>
                <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 px-4">
                  <p className="text-gray-900 dark:text-white text-sm font-medium">
                    Rango de Fechas
                  </p>
                  <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">
                    arrow_drop_down
                  </span>
                </button>
              </div>
            </div>
            {/* Reservations Table */}
            <div className="mt-6 bg-white dark:bg-[#18232e] rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                      Solicitante
                    </th>
                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                      Hogar de Reposo
                    </th>
                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                      Habitación / Camas
                    </th>
                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                      Fechas
                    </th>
                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300 text-center">
                      Estado
                    </th>
                    <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300 text-right">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4 text-sm text-gray-900 dark:text-white">
                      Elena García
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                      Residencia Sol de Otoño
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                      Habitación Doble - 1 Cama
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                      01/08/2024 - 31/08/2024
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                        Pendiente
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end items-center gap-2">
                        <button className="flex items-center justify-center size-8 rounded-lg bg-success/10 text-success hover:bg-success/20">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18 }}
                          >
                            check
                          </span>
                        </button>
                        <button className="flex items-center justify-center size-8 rounded-lg bg-danger/10 text-danger hover:bg-danger/20">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18 }}
                          >
                            close
                          </span>
                        </button>
                        <button className="flex items-center justify-center size-8 rounded-lg bg-gray-200/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18 }}
                          >
                            visibility
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4 text-sm text-gray-900 dark:text-white">
                      Marcos Rodríguez
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                      Hogar Dulce Hogar
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                      Habitación Individual
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                      15/08/2024 - 15/09/2024
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                        Pendiente
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end items-center gap-2">
                        <button className="flex items-center justify-center size-8 rounded-lg bg-success/10 text-success hover:bg-success/20">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18 }}
                          >
                            check
                          </span>
                        </button>
                        <button className="flex items-center justify-center size-8 rounded-lg bg-danger/10 text-danger hover:bg-danger/20">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18 }}
                          >
                            close
                          </span>
                        </button>
                        <button className="flex items-center justify-center size-8 rounded-lg bg-gray-200/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18 }}
                          >
                            visibility
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4 text-sm text-gray-900 dark:text-white">
                      Lucía Fernández
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                      Centro Geriátrico La Paz
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                      Habitación Doble - 1 Cama
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                      05/09/2024 - 05/10/2024
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                        Pendiente
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end items-center gap-2">
                        <button className="flex items-center justify-center size-8 rounded-lg bg-success/10 text-success hover:bg-success/20">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18 }}
                          >
                            check
                          </span>
                        </button>
                        <button className="flex items-center justify-center size-8 rounded-lg bg-danger/10 text-danger hover:bg-danger/20">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18 }}
                          >
                            close
                          </span>
                        </button>
                        <button className="flex items-center justify-center size-8 rounded-lg bg-gray-200/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18 }}
                          >
                            visibility
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4 text-sm text-gray-900 dark:text-white">
                      Javier Moreno
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                      Residencia Sol de Otoño
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                      Suite Premium
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                      20/08/2024 - 20/11/2024
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                        Pendiente
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end items-center gap-2">
                        <button className="flex items-center justify-center size-8 rounded-lg bg-success/10 text-success hover:bg-success/20">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18 }}
                          >
                            check
                          </span>
                        </button>
                        <button className="flex items-center justify-center size-8 rounded-lg bg-danger/10 text-danger hover:bg-danger/20">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18 }}
                          >
                            close
                          </span>
                        </button>
                        <button className="flex items-center justify-center size-8 rounded-lg bg-gray-200/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 18 }}
                          >
                            visibility
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>

  );
};

export default ManageRequest;
