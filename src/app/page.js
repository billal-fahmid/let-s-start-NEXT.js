'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

const Home = () => {
  const router = useRouter()

  const navigate = (page) => {
    router.push(page)
  }
  return (

    <main className="">


     
      <h2 className='text-7xl font-bold p-5 text-orange-500 text-center mt-10'>Lets Start NEXT.JS</h2>
      {/* <button onClick={() => navigate('/login')} className="text-xl font-semibold bg-orange-500 text-black py-2 px-5"> Login</button>
      <button onClick={() => navigate('/about')} className="text-xl font-semibold bg-orange-500 text-black py-2 px-5"> About</button> */}


    </main>

  )
}

export default Home;


