import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente que hace scroll hacia arriba al cambiar de ruta.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // puedes cambiarlo a "auto" si no quieres animación
        });
    }, [pathname]);

    return null;
}
