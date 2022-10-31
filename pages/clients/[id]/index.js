import {useRouter} from 'next/router'; 

const ClientProjectPage = () =>{
    
    const Router = useRouter() 
    const loadProjectHandler = () => {

        // go to back
        // Router.push(`/clients/${Router.query.id}/projecta`)
        Router.push({
            pathname:"/clients/[id]/[clientprojectid]",
            query:{ id : 'hamed',clientprojectid:'projecta' }
        })

        // no go to back
        // Router.replace(`/clients/${Router.query.id}/projecta`)

    }
    
    return(
        <>
            <h1>Client Project Page</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </>
    )
}
export default ClientProjectPage;