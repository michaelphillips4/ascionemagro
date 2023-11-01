import data from "../../../../data.json";
import Image from "next/image";
const imageClass = "dark:invert mt-2 md:m-4 rounded";
const h3 = "text-4xl font-extrabold leading-none tracking-tight ";

export default function Page({
  params,
}: {
  params: { slug: string; id: number };
}) {
  const client = data.clients[params.id];

  if (client) {
    return (
      <>
       <div>
        <h3 className={h3}>{client.name} </h3>
        <i>{client.description}</i> {client.year}
        <b>{client.text}</b>
       </div> 

     {client.href && client.href.length !== 0 && (client.images === undefined)  && 
            <a href={client.href} target="_blank" className="underline">{client.href}</a>
     } 

        <div className="flex flex-wrap justify-center mt-10">
        {client.images?.map((e, i) => (
          <div key={i}>
            <Image
              src={`/clients/${client.name}/${e}`}
              alt="chairs"
              className={imageClass}
              priority
              width={278}
              height={370}
            />
          </div>
        ))}

        </div>
      </>
    );
  } else {
    return (
      <>
        <h3>Client {params.slug} not found</h3>
      </>
    );
  }
}
