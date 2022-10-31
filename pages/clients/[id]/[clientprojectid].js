import {useRouter} from 'next/router';  

const ClientProjectPage = () =>{

    const Router = useRouter() 

   

    return(
        <h1>Client Project {Router.query.id}</h1>
       
    )

}
export default ClientProjectPage;