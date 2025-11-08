// components/ReservationDetailsModal.jsx
import React from "react";

const ReservationDetailsModal = ({ isOpen, onClose, reservation }) => {
    if (!isOpen || !reservation) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    ✕
                </button>

                <h2 className="text-xl font-semibold mb-4 text-primary">
                    Detalles de la Reserva
                </h2>

                <div className="space-y-3 text-sm">
                    <Detail label="Nombre completo" value={reservation.nombreCompleto} />
                    <Detail label="Documento" value={reservation.documento} />
                    <Detail label="Correo electrónico" value={reservation.correo} />
                    <Detail label="Número de teléfono" value={reservation.telefono} />
                    <Detail label="Género" value={reservation.genero} />
                    <Detail label="Distrito" value={reservation.distrito} />
                    <Detail label="Fecha de ingreso" value={reservation.fechaIngreso} />
                    <Detail label="Fecha de salida" value={reservation.fechaSalida} />
                    <Detail label="Hogar de reserva" value={reservation.hogar} />
                    <Detail label="Numero de Habitación" value={reservation.numeroHabitación} />
                    <Detail label="Cantidad de camas" value={reservation.cantidadCamas} />
                    <Detail label="Camas reservadas" value={reservation.camasReservadas} />
                    <Detail label="Estado" value={reservation.estado} />
                </div>

                <div className="mt-5 flex justify-end">
                    <button
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                        onClick={onClose}
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

// Componente auxiliar
const Detail = ({ label, value }) => (
    <div className="flex justify-between border-b border-gray-100 pb-2">
        <span className="font-medium text-gray-700">{label}:</span>
        <span className="text-gray-600 text-right">{value || "-"}</span>
    </div>
);

export default ReservationDetailsModal;
