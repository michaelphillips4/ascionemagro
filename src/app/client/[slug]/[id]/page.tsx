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
          <i>{client.description} </i> {client.year} <b> {client.text}</b>
        </div>

        <div className="flex flex-wrap justify-center mt-10">
          {client.images?.map((e, i) => (
            <div key={i}>
              {e.toLocaleLowerCase().endsWith(".mp4") ? (
                <video controls autoPlay className={imageClass} {...client.images.length > 1 && {width:"643",height:"482"}}>
                  <source
                    src={`/clients/${client.client}/${e}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={`/clients/${client.client}/${e}`}
                  alt="chairs"
                  className={imageClass}
                  priority
                  width={278}
                  height={370}
                />
              )}
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
