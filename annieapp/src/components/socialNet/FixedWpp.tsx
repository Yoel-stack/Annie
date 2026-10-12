
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'; 


export default function FixedWpp() {

    const phoneNumber = "Minumeroo"; 
    const message = encodeURIComponent("¡Hola Annie! Quería consultar por los productos personalizados.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-5 right-5 z-50">
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="flex items-center justify-center w-9 h-9 sm:w-13 sm:h-13 bg-[#7A4A43] text-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none"
        >
            <FaWhatsapp className="rounded-sm w-6 h-6 sm:w-8 sm:h-8" />
        </Link>
        </div>
    );
};
