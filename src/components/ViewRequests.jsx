import HeadConfig from './commons/HeadConfig';
import HeaderManage from './commons/HeaderManage.jsx';
import ReservationDetailsModal from "./commons/ReservationDetailsModal.jsx";
import SideBar from './commons/SideBar';
import { useState } from 'react';
import Swal from "sweetalert2";

const ViewRequests = () => {
    const activesReservations = [
        {
            formData: {
                name: "Fernando Mayorga Morales",
                documentNumber: '1152469087',
                email: "heinner45@gmail.com",
                phone: "3222277857",
                district: "Campohermoso - Bucaramanga",
                gender: "Masculino",
                age: "26",
            },
            selectedBeds: [
                {
                    key: "1-1",
                    cama: { numeroCama: 1, ubicación: "S", estado: "D" },
                    camarote: {
                        numeroCamarote: 1,
                        camas: [
                            { numeroCama: 1, ubicación: "S", estado: "D" },
                            { numeroCama: 2, ubicación: "I", estado: "D" },
                        ],
                    },
                },
                {
                    key: "1-2",
                    cama: { numeroCama: 2, ubicación: "I", estado: "D" },
                    camarote: {
                        numeroCamarote: 1,
                        camas: [
                            { numeroCama: 1, ubicación: "S", estado: "D" },
                            { numeroCama: 2, ubicación: "I", estado: "D" },
                        ],
                    },
                },
                {
                    key: "2-2",
                    cama: { numeroCama: 2, ubicación: "I", estado: "D" },
                    camarote: {
                        numeroCamarote: 2,
                        camas: [
                            { numeroCama: 1, ubicación: "S", estado: "D" },
                            { numeroCama: 2, ubicación: "I", estado: "D" },
                        ],
                    },
                },
            ],
            dates: {
                startDate: "2025-11-12",
                endDate: "2025-11-14",
            },
            habitacion: {
                numeroHabitación: "01",
                camarotes: [
                    {
                        numeroCamarote: 1,
                        camas: [
                            { numeroCama: 1, ubicación: "S", estado: "D" },
                            { numeroCama: 2, ubicación: "I", estado: "D" },
                        ],
                    },
                    {
                        numeroCamarote: 2,
                        camas: [
                            { numeroCama: 1, ubicación: "S", estado: "D" },
                            { numeroCama: 2, ubicación: "I", estado: "D" },
                        ],
                    },
                ],
                hogar: "V",
            },
        },
        {
            formData: {
                name: "Janeth Contramaestre",
                documentNumber: '1152469087',
                email: "heinner45@gmail.com",
                phone: "3222277857",
                district: "Campohermoso - Bucaramanga",
                gender: "Masculino",
                age: "26",
            },
            selectedBeds: [
                {
                    key: "1-1",
                    cama: { numeroCama: 1, ubicación: "S", estado: "D" },
                    camarote: {
                        numeroCamarote: 1,
                        camas: [
                            { numeroCama: 1, ubicación: "S", estado: "D" },
                            { numeroCama: 2, ubicación: "I", estado: "D" },
                        ],
                    },
                },
                {
                    key: "1-2",
                    cama: { numeroCama: 2, ubicación: "I", estado: "D" },
                    camarote: {
                        numeroCamarote: 1,
                        camas: [
                            { numeroCama: 1, ubicación: "S", estado: "D" },
                            { numeroCama: 2, ubicación: "I", estado: "D" },
                        ],
                    },
                },
                {
                    key: "2-2",
                    cama: { numeroCama: 2, ubicación: "I", estado: "D" },
                    camarote: {
                        numeroCamarote: 2,
                        camas: [
                            { numeroCama: 1, ubicación: "S", estado: "D" },
                            { numeroCama: 2, ubicación: "I", estado: "D" },
                        ],
                    },
                },
            ],
            dates: {
                startDate: "2025-11-12",
                endDate: "2025-11-14",
            },
            habitacion: {
                numeroHabitación: "01",
                camarotes: [
                    {
                        numeroCamarote: 1,
                        camas: [
                            { numeroCama: 1, ubicación: "S", estado: "D" },
                            { numeroCama: 2, ubicación: "I", estado: "D" },
                        ],
                    },
                    {
                        numeroCamarote: 2,
                        camas: [
                            { numeroCama: 1, ubicación: "S", estado: "D" },
                            { numeroCama: 2, ubicación: "I", estado: "D" },
                        ],
                    },
                ],
                hogar: "S",
            },
        },
    ];

    // dentro del componente principal:
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [showDetailsModal, setShowDetailsModal,] = useState(false);

    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const handleCloseAllReservations = () => {
        setShowConfirmModal(false);

        // Aquí puedes poner tu lógica para cerrar todas las reservas:
        // por ejemplo, una llamada a tu API o limpieza de estado.
        alert("✅ Todas las reservas fueron cerradas y las camas están disponibles.");

        // Ejemplo si usas un backend:
        // await fetch("/api/close-all-reservations", { method: "POST" });
    };

    const handleCloseReservation = async (reserva) => {
        const result = await Swal.fire({
            title: "¿Finalizar Reservación?",
            text: `¿Estás seguro de que deseas finalizar la reserva de ${reserva.name || "este huésped"}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#6c757d",
            confirmButtonText: "Sí, finalizar",
            cancelButtonText: "Cancelar",
            background: "#fff",
            color: "#333",
        });

        if (result.isConfirmed) {
            try {
                // Aquí puedes realizar la acción (API, estado, etc.)
                // Por ejemplo:
                // await fetch(`/api/reservations/${reserva.id}/close`, { method: "POST" });

                await Swal.fire({
                    icon: "success",
                    title: "Reservación finalizada",
                    text: "La reserva ha sido marcada como finalizada correctamente.",
                    confirmButtonColor: "#198754",
                    background: "#fff",
                    color: "#333",
                });

                // Aquí puedes actualizar la lista de reservas activas si lo necesitas
                // refreshReservations();
            } catch (error) {
                await Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Hubo un problema al intentar finalizar la reserva.",
                    confirmButtonColor: "#d33",
                });
            }
        }
    };




    const handleViewDetails = (reserva) => {
        const { formData, habitacion, selectedBeds, dates } = reserva;

        // 🧩 Unificamos toda la info que el modal necesita
        const formattedReservation = {
            nombreCompleto: formData.name,
            documentNumber: formData.documentNumber || "No registrado",
            correo: formData.email,
            telefono: formData.phone,
            genero: formData.gender,
            distrito: formData.district,
            fechaIngreso: new Date(`${dates.startDate}T00:00:00`).toLocaleDateString(),
            fechaSalida: new Date(`${dates.endDate}T00:00:00`).toLocaleDateString(),
            hogar:
                habitacion.hogar === "V"
                    ? "Hogar de Varones"
                    : "Hogar de Señoritas",
            numeroHabitación: habitacion.numeroHabitación,
            cantidadCamas: selectedBeds.length,
            estado: "Activa",
            camasReservadas: selectedBeds
                .map(
                    (bed) =>
                        `Camarote ${bed.camarote.numeroCamarote} - Cama ${bed.cama.numeroCama} (${bed.cama.ubicación})`
                )
                .join(", "),

        };

        setSelectedReservation(formattedReservation);
        setShowDetailsModal(true);
    };


    const handleCloseDetails = () => {
        setSelectedReservation(null);
        setShowDetailsModal(false);
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    // 🧩 Filtros añadidos
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedHome, setSelectedHome] = useState(""); // "V" o "S"
    const [dateRange, setDateRange] = useState({ start: "", end: "" });

    // 🧩 Aplicar filtros sobre el array original
    const filteredReservations = activesReservations.filter((reserva) => {
        const matchesNameOrHome =
            reserva.formData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (reserva.habitacion.hogar === "V" &&
                "varones".includes(searchTerm.toLowerCase())) ||
            (reserva.habitacion.hogar === "S" &&
                "señoritas".includes(searchTerm.toLowerCase()));

        const matchesHome =
            !selectedHome || reserva.habitacion.hogar === selectedHome;

        const matchesDate =
            (!dateRange.start ||
                new Date(reserva.dates.startDate) >= new Date(dateRange.start)) &&
            (!dateRange.end ||
                new Date(reserva.dates.endDate) <= new Date(dateRange.end));

        return matchesNameOrHome && matchesHome && matchesDate;
    });

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
                                    Reservas Activas
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                                    {filteredReservations.length} reservas activas
                                </p>
                            </div>
                        </div>

                        {/* Filtros */}
                        <div className="mt-6 flex flex-col md:flex-row gap-4">
                            {/* 🧩 Campo de búsqueda */}
                            <div className="flex-1">
                                <label className="flex flex-col h-12 w-full">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                        <div className="text-gray-500 dark:text-gray-400 flex border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
                                            <span className="material-symbols-outlined">search</span>
                                        </div>
                                        <input
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                            placeholder="Buscar por nombre o tipo de hogar..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                </label>
                            </div>

                            {/* 🧩 Filtros adicionales */}
                            <div className="flex gap-3 items-center flex-wrap">
                                <select
                                    className="flex h-12 items-center rounded-lg bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 px-4 text-sm text-gray-900 dark:text-white"
                                    value={selectedHome}
                                    onChange={(e) => setSelectedHome(e.target.value)}
                                >
                                    <option value="">Todos los hogares</option>
                                    <option value="V">Hogar de Varones</option>
                                    <option value="S">Hogar de Señoritas</option>
                                </select>

                                {/* 🧩 Filtro de fechas */}
                                <input
                                    type="date"
                                    className="h-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-gray-900 dark:text-white px-3 text-sm"
                                    value={dateRange.start}
                                    onChange={(e) =>
                                        setDateRange((prev) => ({ ...prev, start: e.target.value }))
                                    }
                                />
                                <input
                                    type="date"
                                    className="h-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-gray-900 dark:text-white px-3 text-sm"
                                    value={dateRange.end}
                                    onChange={(e) =>
                                        setDateRange((prev) => ({ ...prev, end: e.target.value }))
                                    }
                                />

                                {/* 🧨 Botón rojo para cerrar reservas */}
                                <button
                                    onClick={() => setShowConfirmModal(true)}
                                    className="h-12 px-5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-sm transition-colors"
                                >
                                    Cerrar todas las reservas
                                </button>
                            </div>
                        </div>
                        {/* ⚠️ Modal de confirmación */}
                        {showConfirmModal && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg w-full max-w-md p-6">
                                    <h3 className="text-lg font-bold text-red-600 mb-2">
                                        ⚠️ Confirmar acción
                                    </h3>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-5 leading-relaxed">
                                        Estás a punto de cerrar <strong>todas las reservas activas</strong>.
                                        Esto dejará <strong>todas las camas de los hogares disponibles</strong>.
                                        <br />
                                        ¿Deseas continuar?
                                    </p>

                                    <div className="flex justify-end gap-3">
                                        <button
                                            onClick={() => setShowConfirmModal(false)}
                                            className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-800 dark:text-gray-200"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            onClick={handleCloseAllReservations}
                                            className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 hover:bg-red-700 text-white"
                                        >
                                            Sí, cerrar todas
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Reservations Table */}
                        <div className="mt-6 bg-white dark:bg-[#18232e] rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="border-b border-gray-200 dark:border-gray-700">
                                    <tr>
                                        <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                            Solicitante
                                        </th>
                                        <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                            Hogar de reserva
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
                                    {filteredReservations.map((reserva, index) => {
                                        const { formData, habitacion, selectedBeds, dates } = reserva;

                                        const camasReservadas = selectedBeds
                                            .map(
                                                (bed) =>
                                                    `Camarote ${bed.camarote.numeroCamarote} - Cama ${bed.cama.numeroCama} (${bed.cama.ubicación})`
                                            )
                                            .join(", ");

                                        // ✅ Corrección: evitar desplazamiento de fecha
                                        const fechaInicio = new Date(`${dates.startDate}T00:00:00`).toLocaleDateString();
                                        const fechaFin = new Date(`${dates.endDate}T00:00:00`).toLocaleDateString();

                                        return (
                                            <tr
                                                key={index}
                                                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                            >
                                                <td className="p-4 text-sm text-gray-900 dark:text-white">
                                                    {formData.name}
                                                </td>
                                                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                                                    {habitacion.hogar === "V"
                                                        ? "Hogar de Varones"
                                                        : "Hogar de Señoritas"}
                                                </td>
                                                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                                                    Habitación {habitacion.numeroHabitación} <br />
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                                        {camasReservadas}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                                                    {fechaInicio} - {fechaFin}
                                                </td>
                                                <td className="p-4 text-center">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
                                                        Activa
                                                    </span>
                                                </td>
                                                <td className="p-4 text-right">
                                                    <div className="flex justify-end items-center gap-2">

                                                        {/* ❌ Cerrar / Finalizar Reserva */}
                                                        <button
                                                            onClick={() => handleCloseReservation(reserva)}
                                                            title="Finalizar Reservación"
                                                            className="flex items-center justify-center size-8 rounded-lg bg-danger/10 text-danger hover:bg-danger/20"
                                                        >
                                                            <span
                                                                className="material-symbols-outlined"
                                                                style={{ fontSize: 18 }}
                                                            >
                                                                close
                                                            </span>
                                                        </button>

                                                        {/* 👁️ Ver detalles */}
                                                        <button
                                                            onClick={() => handleViewDetails(reserva)}
                                                            title="Detalles de la Reserva"
                                                            className="flex items-center justify-center size-8 rounded-lg bg-gray-200/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                                        >
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
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
            <ReservationDetailsModal
                isOpen={showDetailsModal}
                onClose={handleCloseDetails}
                reservation={selectedReservation}
            />
        </>
    );

};

export default ViewRequests;
