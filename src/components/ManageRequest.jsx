const ManageRequest = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Panel de Administración de Reservas</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            font-size: 20px;\n        }\n    "
    }}
  />
  <div className="flex h-screen">
    {/* SideNavBar */}
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-[#18232e] border-r border-gray-200 dark:border-gray-700 flex flex-col">
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
              Hogar Gest
            </h1>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <a
              className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              href="#"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-sm font-medium">Dashboard</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary dark:text-primary"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                bed
              </span>
              <p className="text-sm font-medium">Reservas</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              href="#"
            >
              <span className="material-symbols-outlined">home</span>
              <p className="text-sm font-medium">Hogares</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              href="#"
            >
              <span className="material-symbols-outlined">group</span>
              <p className="text-sm font-medium">Residentes</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <a
            className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium">Ajustes</p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">help_center</span>
            <p className="text-sm font-medium">Ayuda</p>
          </a>
        </div>
      </div>
    </aside>
    {/* Main Content */}
    <main className="flex-1 flex flex-col overflow-y-auto">
      {/* TopNavBar */}
      <header className="flex-shrink-0 bg-white dark:bg-[#18232e] border-b border-gray-200 dark:border-gray-700 flex items-center justify-between whitespace-nowrap px-6 py-3">
        <div className="flex items-center gap-4">
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
