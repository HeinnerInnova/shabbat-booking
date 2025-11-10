import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./commons/Header.jsx";
import Footer from "./commons/Footer.jsx";
import HeadConfig from "./commons/HeadConfig.jsx";
import Swal from "sweetalert2";

const Home = () => {

  const navigate = useNavigate();

  const [selectedDates, setSelectedDates] = useState({});

  const handleDateChange = (hogar, field, value) => {
    setSelectedDates((prev) => ({
      ...prev,
      [hogar]: {
        ...prev[hogar],
        [field]: value,
      },
    }));
  };

  const navToDisponibility = async (hogar, habitaciones) => {
    try {
      const fechas = selectedDates[hogar] || {};
      const { desde, hasta } = fechas;

      // Validar que las fechas estén seleccionadas
      if (!desde || !hasta) {
        Swal.fire({
          icon: "warning",
          title: "Fechas incompletas",
          text: "Por favor selecciona ambas fechas antes de continuar.",
          confirmButtonColor: "#3B82F6", // azul tailwind
          confirmButtonText: "Entendido",
        });
        return;
      }

      // Validar que la fecha desde no sea mayor a la fecha hasta
      if (new Date(desde) > new Date(hasta)) {
        Swal.fire({
          icon: "error",
          title: "Rango de fechas inválido",
          text: "La fecha inicial no puede ser posterior a la fecha final.",
          confirmButtonColor: "#EF4444", // rojo tailwind
          confirmButtonText: "Corregir",
        });
        return;
      }

      // Aquí puedes navegar o llamar a tu API
      // navigate("/disponibility", {
      //   state: { hogar, fechas },
      // });

      // 1️⃣ Llamar a la API
      // const response = await fetch("https://www.shabbat-booking-api/get-rooms-detail", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ hogar }), // payload
      // });

      // 2️⃣ Validar respuesta
      // if (!response.ok) {
      //   throw new Error("Error al obtener habitaciones");
      // }

      // 3️⃣ Obtener datos
      // const data = await response.json();

      navigate("/disponibility", { state: { habitacionesHogar: habitaciones, hogar, fechas } });
    } catch (error) {
      console.log(error)
    }
  };

  const hogares = [
    {
      hogar: 'V',
      title: "Hogar de Varones",
      desc: "Un ambiente tranquilo, seguro y ordenado diseñado para el bienestar masculino.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBdojvkogSAx-OfB2vcs5-mESJLwrzywuLrGJE2p_IAPmSFVfwxm7JH02kaLd50jhRT2u65I-H8R87ApH9HR0jtT0EBeZEYYG4KPYi0Fq4GMfbbAQ1zcqeBg4ayw6NNhjXdUPcufDuBuqiySi_qt4WQVxhoeOIKAnj1zBygTlPW8CL-yVmfpvfuaxiAQTJKzNpzsE-Bg8L3z_dCcEE7IVAQnGvcY4mKJe7HANcmG6Af26OhJ73fwujfEPyqvHeQIT9kIST4Y6sjk8",
      habitaciones: [
        {
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
        },
        {
          numeroHabitación: "02",
          camarotes: [
            {
              numeroCamarote: 1,
              camas: [
                { numeroCama: 1, ubicación: "S", estado: "O" },
                { numeroCama: 2, ubicación: "I", estado: "O" },
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
        },
        {
          numeroHabitación: "03",
          camarotes: [
            {
              numeroCamarote: 1,
              camas: [
                { numeroCama: 1, ubicación: "S", estado: "O" },
                { numeroCama: 2, ubicación: "I", estado: "O" },
              ],
            },
            {
              numeroCamarote: 2,
              camas: [
                { numeroCama: 1, ubicación: "S", estado: "O" },
                { numeroCama: 2, ubicación: "I", estado: "O" },
              ],
            },
          ],
        },
      ]
    },
    {
      hogar: 'S',
      title: "Hogar de Señoritas",
      desc: "Un espacio acogedor, luminoso y seguro que fomenta la comunidad y el confort.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIZi0CnYXFd9kwJRzsvZfBvI4htx8qEgqclO-10W9WbonIznE3y0yja8sALIpakcRipOph1nZHnuel5oySAGt4iQ_pVd2UODoecfimBYL0OdCQOS2LZoTIFctCgqp5eKpz-X3TltsbWbwCgqxNPzfpFvW7mqNiHExwAeU7OjuYHmA4b5LIQfaCBPJbh8MBK49Lqt6nGHQcvnq9Dkoqd6ZLwYU0kj5pV7ZzsyZYD-XB_84C04oukAHc13KNi57S3eMrQOu9i3nU0u0",
      habitaciones: [
        {
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
            {
              numeroCamarote: 3,
              camas: [
                { numeroCama: 1, ubicación: "S", estado: "D" },
                { numeroCama: 2, ubicación: "I", estado: "D" },
              ],
            },
          ],
        },
        {
          numeroHabitación: "02",
          camarotes: [
            {
              numeroCamarote: 1,
              camas: [
                { numeroCama: 1, ubicación: "S", estado: "O" },
                { numeroCama: 2, ubicación: "I", estado: "O" },
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
        },
        {
          numeroHabitación: "03",
          camarotes: [
            {
              numeroCamarote: 1,
              camas: [
                { numeroCama: 1, ubicación: "S", estado: "O" },
                { numeroCama: 2, ubicación: "I", estado: "O" },
              ],
            },
            {
              numeroCamarote: 2,
              camas: [
                { numeroCama: 1, ubicación: "S", estado: "O" },
                { numeroCama: 2, ubicación: "I", estado: "O" },
              ],
            },
          ],
        },
      ]
    }
  ]

  return (
    <>
      <HeadConfig />
      <div className="relative flex min-h-screen w-full flex-col">
        {/* HEADER */}
        <Header />

        {/* MAIN */}
        <main className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="flex w-full max-w-6xl flex-col items-center gap-8 md:gap-12">
            <div className="flex max-w-3xl flex-col gap-3 text-center">
              <h1 className="text-3xl font-black sm:text-5xl text-slate-900 dark:text-slate-50">
                Bienvenido, seleccione un hogar para consultar disponibilidad
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-400">
                Elija una de las opciones a continuación para ver las habitaciones y camas disponibles.
              </p>
            </div>

            {/* Tarjetas */}
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {hogares.map(({ title, desc, img, hogar, habitaciones }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 hover:shadow-lg dark:hover:shadow-primary/10 transition-all"
                >
                  <div
                    className="w-full aspect-video bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${img})` }}
                  ></div>
                  <div className="flex flex-col flex-1 p-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 mb-6 flex-1">{desc}</p>

                    {/* Selector de fechas */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5">
                      <div className="flex flex-col flex-1">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Desde
                        </label>
                        <input
                          type="date"
                          value={selectedDates[hogar]?.desde || ""}
                          onChange={(e) => handleDateChange(hogar, "desde", e.target.value)}
                          className="border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2.5 text-base text-slate-800 dark:text-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        />
                      </div>
                      <div className="flex flex-col flex-1">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Hasta
                        </label>
                        <input
                          type="date"
                          value={selectedDates[hogar]?.hasta || ""}
                          onChange={(e) => handleDateChange(hogar, "hasta", e.target.value)}
                          className="border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2.5 text-base text-slate-800 dark:text-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        />
                      </div>
                    </div>


                    {/* Botón de acción */}
                    <button
                      onClick={() => navToDisponibility(hogar, habitaciones)}
                      className="flex mt-auto w-full h-12 px-5 items-center justify-center rounded-lg bg-primary text-slate-50 text-base font-bold hover:bg-primary/90 transition-colors"
                    >
                      Ver Disponibilidad
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
