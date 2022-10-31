import Link from 'next/link';


const ClientsPage = () =>{

    
    const cliens = [
        {id:'Hamed',name:"Hamed"},
        {id:'Sara',name:"Sara"},
        {id:'Farzad',name:"Farzad"},
        {id:'Saeed',name:"Saeed"},
    ]

    return(
        <>
            <h1>The Clients Project</h1>
            {cliens.map((client)=>(
                 <li key={client.id}>
                    {/* <Link href={{`/clients/${client.id}`}}>{client.name}</Link> */}
                    <Link rel="stylesheet" href={{
                        pathname:"/clients/[id]",
                        query:{ id : client.id }
                    }}>{client.name}</Link>
                </li>
            ))}
        </>
    )
}
export default ClientsPage;