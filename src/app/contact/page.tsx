import {
    BsLinkedin,
    BsInstagram,
    BsFillTelephoneFill,
    BsFillEnvelopeFill,
    BsBuildingFill
  } from "react-icons/bs";
  
export default function Page() {
    const style = { display: "inline"};

    return (
      <div className="text-xl pt-10  
      lg:flex lg:justify-center">
             
          <div className="m-10 text-left">
           <BsBuildingFill style={style} /> via Bullona 15/A
            <br />
            20154 – Milano
            <br />
            p.iva 09421290967
          </div>
          <div className="m-10 text-left">
            <a href="mailto:info@ascionemagro.com"><BsFillEnvelopeFill style={style} /> info@ascionemagro.com</a>
            <br />
            <a href="tel:+390245480446"><BsFillTelephoneFill style={style} /> +39 02 4548 0446</a>
          </div>
          <div className="m-10 text-left">
            <a
              href="https://www.instagram.com/ascionemagro/"
              target="_blank"
              rel="noopener"
            ><BsInstagram style={style} /> instagram</a>
            <br />
            <a
              href="https://www.linkedin.com/company/ascionemagro/?viewAsMember=true"
              target="_blank"
              rel="noopener"
            ><BsLinkedin style={style} /> linkedin</a>
          </div>
     </div>
    );
  }
  