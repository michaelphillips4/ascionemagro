import data from "../../data.json";
import  ClientListItem from "./ClientListItem";

export default function Page() {

  const half = Math.round(data.clients.length / 2);
  const first = data.clients.slice(0, half);
  const second = data.clients.slice(half);
  
  return (<>
  <h3 className="text-xl font-extrabold leading-none tracking-tight text-gray-900 text-center " >
         clients - list of works</h3>
  
  
    <div className="flex flex-wrap ">
		
      <div className="mr-5">
        <ul>
          {first.map((c, index) => (
			 <li key={`${index}one`}>
			 <ClientListItem name={c.name} text={c.text}  href={c.href}/>
          </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {second.map((c, index) => (
			 <li key={`${index}two`}>
			 <ClientListItem name={c.name} text={c.text} href={c.href}/>
          </li>
          ))}
        </ul>
      </div>
    </div></>
  );
}
