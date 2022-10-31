import Link from 'next/link'
const Home = () =>{
    return(
        <>
        <h1>Home Page</h1>
        <ul>
            <li><Link rel="stylesheet" href="/portfolio" >Portfolio</Link></li>
            <li><Link rel="stylesheet" href="/about" >About</Link></li>
            <li><Link rel="stylesheet" href="/clients" >clients</Link></li>
        </ul>
</>
    )
}
export default Home;