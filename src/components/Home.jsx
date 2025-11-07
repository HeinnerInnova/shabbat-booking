import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";

const Home = () => {

  const navigate = useNavigate();


  const navToDisponibility = () => {
    navigate("/disponibility");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
      <div className="layout-container flex h-full grow flex-col">

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
              {[
                {
                  title: "Hogar de Varones",
                  desc: "Un ambiente tranquilo, seguro y ordenado diseñado para el bienestar masculino.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBdojvkogSAx-OfB2vcs5-mESJLwrzywuLrGJE2p_IAPmSFVfwxm7JH02kaLd50jhRT2u65I-H8R87ApH9HR0jtT0EBeZEYYG4KPYi0Fq4GMfbbAQ1zcqeBg4ayw6NNhjXdUPcufDuBuqiySi_qt4WQVxhoeOIKAnj1zBygTlPW8CL-yVmfpvfuaxiAQTJKzNpzsE-Bg8L3z_dCcEE7IVAQnGvcY4mKJe7HANcmG6Af26OhJ73fwujfEPyqvHeQIT9kIST4Y6sjk8"
                },
                {
                  title: "Hogar de Señoritas",
                  desc: "Un espacio acogedor, luminoso y seguro que fomenta la comunidad y el confort.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIZi0CnYXFd9kwJRzsvZfBvI4htx8qEgqclO-10W9WbonIznE3y0yja8sALIpakcRipOph1nZHnuel5oySAGt4iQ_pVd2UODoecfimBYL0OdCQOS2LZoTIFctCgqp5eKpz-X3TltsbWbwCgqxNPzfpFvW7mqNiHExwAeU7OjuYHmA4b5LIQfaCBPJbh8MBK49Lqt6nGHQcvnq9Dkoqd6ZLwYU0kj5pV7ZzsyZYD-XB_84C04oukAHc13KNi57S3eMrQOu9i3nU0u0"
                }
              ].map(({ title, desc, img }) => (
                <div key={title} className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 hover:shadow-lg dark:hover:shadow-primary/10 transition-all">
                  <div className="w-full aspect-video bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img})` }}></div>
                  <div className="flex flex-col flex-1 p-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 mb-6 flex-1">{desc}</p>
                    <button onClick={navToDisponibility} className="flex mt-auto w-full h-12 px-5 items-center justify-center rounded-lg bg-primary text-slate-50 text-base font-bold hover:bg-primary/90 transition-colors">
                      Ver Disponibilidad
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="flex flex-col items-center gap-6 border-t border-slate-200 dark:border-slate-800 px-5 py-10 text-center bg-background-light dark:bg-background-dark">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:justify-around">
            {["Política de Privacidad", "Términos de Servicio", "Contacto"].map(text => (
              <a key={text} href="#" className="text-slate-600 dark:text-slate-400 text-sm hover:text-primary">{text}</a>
            ))}
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2024 Gestión de Hogares. Todos los derechos reservados.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Home;
