


function App() {
  

 const name="Cutie"
 const rating="10"
 const description="A fluffy white Pomeranian with bright round eyes and a playful personality. Despite its tiny size, it acts bold and confident, always curious about everything around it. Its soft double coat, fox-like face, and energetic nature make it both adorable and attention-grabbing. This little dog loves human company, enjoys being the center of attention, and can quickly turn any quiet room into a lively one with its cheerful energy"

 const age="6";


  return (
    <>
      

   <div>



    <div className="w-full  flex flex-col justify-center items-center gap-3 p-8">


   <div className="w-full h-[450px]">
    <img className="w-[400px] h-[400px] rounded-md" src="/dog.png >" 
    alt="dog" />
   </div>

   <div className="w-full text-xl">
    <span className="font-bold">Name:{name}</span>
    </div>  

   <div className="w-full text-xl">
    <span className="font-bold">Rating </span>:{rating}
    </div>

   <div className="w-full text-xl">
    <span className="font-bold">Description:</span>{description}
    </div>

      <div className="w-full text-xl">
    <span className="font-bold">Age:</span>{age}
    </div>

 
  
   
   {/* <div className="w-full text-xl">
    <span className="font-bold ">Year:</span>2009
    </div>

   <div className="w-full text-xl">
    <span className="font-bold ">Duration:1h 40min</span>
    </div> */}
  

  

   
  <div className="w-full flex gap-4">

{/* //1st way */}


  

  {/* <button className="px-2 py-2 border-2 bg-blue-100 text-sm text-blue-600 border-blue-600 rounded-4xl">{age>18? "Watch Now" : "Not Available"}</button>
  <button className="px-6 py-2 border-2 bg-orange-100 text-sm text-orange-600 border-orange-600 rounded-3xl">{isAge()}</button> */}

  </div>

   </div>
   


   </div>


    </>
  )
}

export default App
