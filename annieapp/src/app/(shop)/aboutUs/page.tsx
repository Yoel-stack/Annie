import Image from 'next/image'
import React from 'react'

export default function aboutUs() {
  return (
    <div className="flex flex-col lg:flex-row items-center sm:pt-2 ml-5 sm:ml-0 mr-6 text-center lg:text-left text-sm sm:text-[16px] tracking-wide font-light">
  <div className="flex p-3 pt-5 sm:p-10 text-[#7A4A43] flex-col cols-2">

  <p className="text-[20px] sm:text-[24px] font-normal">Hola, soy Annie ♡</p>

  <p className="pt-2">
    Detrás de <strong>Papelería Creativa Annie</strong> estoy yo, Cintia, una persona que disfruta muchísimo crear, imaginar y transformar pequeñas ideas en cosas que puedan acompañar momentos especiales.
  </p>

  <p className="pt-2">
    Este emprendimiento nació de mi amor por la papelería, los detalles y todo aquello que nos permite hacer un poquito más nuestro lo cotidiano. Con el tiempo, lo que comenzó como un rinconcito creativo fue creciendo hasta convertirse en este proyecto que hoy me llena de ilusión.
  </p>

  <p className="pt-2">
    Acá vas a encontrar agendas, planners, cuadernos, libretas, stickers y papelería personalizada, pero sobre todo vas a encontrar productos hechos con mucho cariño y atención a cada detalle. Me encanta pensar que cada creación puede tener algo de quien la elige: sus colores, sus gustos, su personalidad, sus ideas o incluso una historia.
  </p>

  <p className="pt-2">
    Detrás de cada pedido hay muchas ganas, creatividad y un poquito de mí. ✨  
  </p>

  <p className="pt-2">
    Gracias por estar acá, por elegir mi trabajo y por dejarme ser parte de tus momentos.  
  </p>

  <p className="text-[15px] pt-4 text-xs text-zinc-500">
    Con cariño,
    Cintia ♡
  </p>
  </div>
<div className="flex justify-center items-center mt-2 ml-2 sm:ml-0">
  <Image
  className="flex rounded-[17px] w-[200px] sm:w-[320px] md:w-[380px] lg:w-[700px]"
    src="/aboutPhoto.jpeg"
    alt="Description of the image"
    width={700}
    height={500}
  />
</div>
</div>
  )
};


