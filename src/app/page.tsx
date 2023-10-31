import Image from "next/image";
/* import { useTheme } from 'next-themes' */
const imageClass = "dark:invert mt-2 md:m-4 rounded";
const h3 = "text-xl font-extrabold leading-none tracking-tight text-gray-900 text-center ";
export default function Home() {
 /*  const { theme, setTheme } = useTheme() */
  return (
    <>
      <p> 
        <b>ascionemagro</b> is a graphic design studio based in Milan founded in
        2013 by graphic designers <b>Valentina Ascione</b> and <b>Onofrio Magro</b>. We specialize in developing strong concepts and
        complex identity systems on both analogue and digital media.
        We work within the boundaries of commercial, art and culture and develop
        our design through research, study and conversation with the client in
        order to create content that meet their specific needs. We enjoy being
        part of a team and believe in further collaborations between design and
        other disciplines
      </p>

      <div className="flex flex-wrap justify-center mt-10">
        <div>
          <Image
            src="/chairs.jpg"
            alt="chairs"
            className={imageClass}
            priority
            width={278}
            height={370}
          />
        </div>
        <div>
          <Image
            src="/desk.jpg"
            alt="chairs"
            className={imageClass}
            priority
            width={277}
            height={370}
          />
        </div>
        <div>
          <Image
            src="/owners.jpg"
            alt="chairs"
            className={imageClass}
            priority
            width={493}
            height={370}
          />
        </div>
        <div>
          <Image
            src="/ticket.jpg"
            alt="chairs"
            className={imageClass}
            priority
            width={541}
            height={370}
          />
        </div>
        <div>
          <Image
            src="/window.jpg"
            alt="chairs"
            className={imageClass}
            priority
            width={256}
            height={341}
          />
        </div>
      </div>


<div className="flex flex-wrap justify-center mt-10">
  <div className="md:w-1/3 p-2">
<h3  className={h3}>CLIENTS</h3>
1920, Aidi, Alpino, Brioni, Dalesio&Santoro, Dedé nutrimento italiano, Enece Film, Furla, Galleria T293, Gierremilano, Lzo, Minina, Miroglio, Moleskine, Naturasì,  Niasca Portofino, Novamont, Otto – kids clothing boutuque, Spazio Paestum, Spin Master
</div>
<div className="md:w-1/3 p-2">
<h3  className={h3}>TEACHING AND LECTURES</h3>
CfpBauer Milano, NID – Nuovo Istituto Design Perugia, NABA – Nuova Accademia di Belle Arti di Milano, SPD Scuola Politecnica di Design, Università degli Studi della Repubblica di San Marino, Torino Graphic Days, AIAP DX 2015
</div>
<div className="md:w-1/3 p-2">
<h3 className={h3}>SERVICES</h3>
Art Direction, Brand and Corporate Identity, Logo Design, Book Design, Packaging, Web Design, Illustration, Infographic, Set Design
</div>
</div>


    </>
  );
}
