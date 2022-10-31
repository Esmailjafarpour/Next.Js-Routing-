import {useRouter} from 'next/router';  
// import {withRouter} from 'next/router';

const PortfolioProjectPage = () =>{

    // if you use class based component use withRouter

    const router = useRouter();
    console.log(router.query.projectId)

    return(
        <h1>The Portfolio Project Page</h1>
    
    )
}
export default PortfolioProjectPage;