import Link from "next/link";

export interface client {
  id:number;
  name: string;
  text: string;
  href?: string;
  hasClientDetails:boolean;
}

export default function ClientListItem({name,text,href,id, hasClientDetails} : client) {
  return (
    <div className="p-1 mt-2 md:p-2 shadow border-dotted border-2 rounded ">
       <b>{name}</b> - <i className="">{text}</i><br />
               <Link href={`/client/${name}/${id}`} className="underline">{name}</Link>
     </div>
 );
}
