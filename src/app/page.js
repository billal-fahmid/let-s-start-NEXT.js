'use client'

const Home = () => {
  const test=(item)=>{
    alert(item)
  }
  const InnerComponent=()=>{
    return <h3 className="text-3xl font-bold text-red-500">Inner Components </h3>
  }
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <InnerComponent></InnerComponent>
      <h2 className='text-7xl font-bold p-5 text-orange-500 text-center'>this is test next.js</h2>
      <button onClick={()=>test('TEST Item')} className="p-5 text-2xl font-bold text-yellow-400 bg-slate-600">Event Here</button>
      {InnerComponent()}
    </main>

  )
}

export default Home;


