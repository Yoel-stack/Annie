import Image from "next/image";

const customerScreenshots = [
  { id: 1, src: "/screen/captura1.jpeg", alt: "Captura cliente contento 1" },
  { id: 2, src: "/screen/captura2.jpeg", alt: "Captura cliente contento 2" },
  { id: 3, src: "/screen/captura3.jpeg", alt: "Captura cliente contento 3" },
  { id: 4, src: "/screen/captura4.jpeg", alt: "Captura cliente contento 4" },
  { id: 5, src: "/screen/captura5.jpeg", alt: "Captura cliente contento 5" },
  { id: 6, src: "/screen/captura6.jpeg", alt: "Captura cliente contento 6" },
  { id: 7, src: "/screen/captura7.jpeg", alt: "Captura cliente contento 7" },
];

export default function Screenshots() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-8">
          <h2 className="text-sm sm:text-xl font-bold tracking-tight uppercase text-[#7A4A43]">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-2 text-xs sm:text-base text-gray-500">
            Mensajes reales y pedidos entregados ¡Gracias por confiar!
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {customerScreenshots.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid overflow-hidden rounded-2xl bg-gray-100 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full">
                
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}