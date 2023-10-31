

export interface client {
  name: string;
  text: string;
  href?: string;
}

export default function ClientListItem({name,text,href} : client) {
  return (
    <div className="p-1 mt-2 md:p-2 shadow border-dotted border-2 rounded ">
       <b>{name}</b> - <i className="">{text}</i><br />
        {href && href.length !== 0 && 
     
         <a href={href} target="_blank" className="underline">{href}</a>
       } 
     </div>
 );
}
