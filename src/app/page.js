'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

const Home = () => {
 const router = useRouter()

 const navigate =(page)=>{
  router.push(page)
 }
  return (

    <main className="">

      <h2 className='text-7xl font-bold p-5 text-orange-500 text-center'>Lets Start NEXT.JS</h2>
      <ul className="text-xl text-black bg-orange-600 font-bold p-5 gap-5 flex ">
        <Link href={'/'}>Home</Link>
        <Link href={'about'}>About</Link>
        <Link href={'login'}>Login</Link>
      </ul>
      <button onClick={()=>navigate('/login')} className="text-xl font-semibold bg-orange-500 text-black py-2 px-5"> Login</button>
      <button onClick={()=>navigate('/about')} className="text-xl font-semibold bg-orange-500 text-black py-2 px-5"> About</button>


    </main>

  )
}

export default Home;


