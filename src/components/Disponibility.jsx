import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
export default function Disponibility() {
  const navigate = useNavigate();

  const navToRoomDetails = () => {
    navigate("/room-details");
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Disponibilidad</title>
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
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
            "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .material-symbols-outlined.bed-icon {\n            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;\n        }\n    "
        }}
      />
      <div className="relative flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-72 flex-col gap-1">
                <p className="text-gray-900 dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
                  Disponibilidad de Habitaciones
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                  Hogar de Reposo Alegría - 23 Habitaciones
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-10 w-full sm:w-auto items-center justify-center rounded-lg bg-gray-200/60 dark:bg-gray-800/60 p-1">
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-[:checked]:bg-white has-[:checked]:dark:bg-gray-900 has-[:checked]:shadow-sm has-[:checked]:text-gray-900 has-[:checked]:dark:text-white text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal transition-all">
                  <span className="truncate">Todas</span>
                  <input
                    defaultChecked=""
                    className="invisible w-0"
                    name="availability-filter"
                    type="radio"
                    defaultValue="Todas"
                  />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-[:checked]:bg-white has-[:checked]:dark:bg-gray-900 has-[:checked]:shadow-sm has-[:checked]:text-gray-900 has-[:checked]:dark:text-white text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal transition-all">
                  <span className="truncate">Disponibles</span>
                  <input
                    className="invisible w-0"
                    name="availability-filter"
                    type="radio"
                    defaultValue="Disponibles"
                  />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-[:checked]:bg-white has-[:checked]:dark:bg-gray-900 has-[:checked]:shadow-sm has-[:checked]:text-gray-900 has-[:checked]:dark:text-white text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal transition-all">
                  <span className="truncate">Ocupadas</span>
                  <input
                    className="invisible w-0"
                    name="availability-filter"
                    type="radio"
                    defaultValue="Ocupadas"
                  />
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 01
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-green-status">
                      Disponible
                    </span>
                    <div className="size-3 rounded-full bg-green-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    4 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 02
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-orange-status">
                      Parcial
                    </span>
                    <div className="size-3 rounded-full bg-orange-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 03
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-red-status">
                      Ocupada
                    </span>
                    <div className="size-3 rounded-full bg-red-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Completa
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-400 dark:text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200/60 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-gray-300/60 dark:hover:bg-gray-700/60">
                  <span className="truncate">Ver Detalles</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 04
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-orange-status">
                      Parcial
                    </span>
                    <div className="size-3 rounded-full bg-orange-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    3 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 05
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-green-status">
                      Disponible
                    </span>
                    <div className="size-3 rounded-full bg-green-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    4 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 06
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-red-status">
                      Ocupada
                    </span>
                    <div className="size-3 rounded-full bg-red-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Completa
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-400 dark:text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200/60 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-gray-300/60 dark:hover:bg-gray-700/60">
                  <span className="truncate">Ver Detalles</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 07
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-orange-status">
                      Parcial
                    </span>
                    <div className="size-3 rounded-full bg-orange-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    1 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 08
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-green-status">
                      Disponible
                    </span>
                    <div className="size-3 rounded-full bg-green-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    4 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 09
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-orange-status">
                      Parcial
                    </span>
                    <div className="size-3 rounded-full bg-orange-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 10
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-red-status">
                      Ocupada
                    </span>
                    <div className="size-3 rounded-full bg-red-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Completa
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-400 dark:text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200/60 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-gray-300/60 dark:hover:bg-gray-700/60">
                  <span className="truncate">Ver Detalles</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 11
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-green-status">
                      Disponible
                    </span>
                    <div className="size-3 rounded-full bg-green-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    4 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-green-status">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 12
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-orange-status">
                      Parcial
                    </span>
                    <div className="size-3 rounded-full bg-orange-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    3 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 13
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-green-status">
                      Disponible
                    </span>
                    <div className="size-3 rounded-full bg-green-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    4 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-green-status">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 14
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-red-status">
                      Ocupada
                    </span>
                    <div className="size-3 rounded-full bg-red-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Completa
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-400 dark:text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200/60 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-gray-300/60 dark:hover:bg-gray-700/60">
                  <span className="truncate">Ver Detalles</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 15
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-orange-status">
                      Parcial
                    </span>
                    <div className="size-3 rounded-full bg-orange-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    1 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 16
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-orange-status">
                      Parcial
                    </span>
                    <div className="size-3 rounded-full bg-orange-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 17
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-red-status">
                      Ocupada
                    </span>
                    <div className="size-3 rounded-full bg-red-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Completa
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-400 dark:text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200/60 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-gray-300/60 dark:hover:bg-gray-700/60">
                  <span className="truncate">Ver Detalles</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 18
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-green-status">
                      Disponible
                    </span>
                    <div className="size-3 rounded-full bg-green-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    4 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-green-status">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 19
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-orange-status">
                      Parcial
                    </span>
                    <div className="size-3 rounded-full bg-orange-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    3 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 20
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-green-status">
                      Disponible
                    </span>
                    <div className="size-3 rounded-full bg-green-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    4 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-green-status">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 21
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-red-status">
                      Ocupada
                    </span>
                    <div className="size-3 rounded-full bg-red-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Completa
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-400 dark:text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200/60 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-gray-300/60 dark:hover:bg-gray-700/60">
                  <span className="truncate">Ver Detalles</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 22
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-orange-status">
                      Parcial
                    </span>
                    <div className="size-3 rounded-full bg-orange-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-status">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Habitación 23
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-green-status">
                      Disponible
                    </span>
                    <div className="size-3 rounded-full bg-green-status" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    4 de 4 camas disponibles
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-green-status">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 SUPERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 1 INFERIOR
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined bed-icon">
                        bed
                      </span>
                      <span className="text-xs font-medium">
                        CAMAROTE 2 INFERIOR
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={navToRoomDetails} className="mt-auto w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20">
                  <span className="truncate">Solicitar Reserva</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>

  );
}
