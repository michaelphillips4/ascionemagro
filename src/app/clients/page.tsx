import data from "../../data.json";
import ClientListItem from "./ClientListItem";

export default function Page() {
  return (
    <>
      <h3 className="text-xl font-extrabold leading-none tracking-tight text-center ">
        clients - list of works
      </h3>
      <ul className="md:pt-6">
        {data.clients.map((c, index) => (
          <li key={`${index}`}>
            <ClientListItem name={c.name} text={c.text} href={c.href} />
          </li>
        ))}
      </ul>
    </>
  );
}
