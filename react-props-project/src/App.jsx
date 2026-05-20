
import Dog from "./Dog"

function App() {
  

const dog =[

{
  image: "/dog.png",
  id:1,
  name:"Cutie",
  rating:"10",
  description:"A fluffy white Pomeranian with bright round eyes and a playful personality. Despite its tiny size, it acts bold and confident, always curious about everything around it. Its soft double coat, fox-like face, and energetic nature make it both adorable and attention-grabbing. This little dog loves human company, enjoys being the center of attention, and can quickly turn any quiet room into a lively one with its cheerful energy",

age:"6",
},


{
   image: "/dog.jpg",
  id:2,
  name:"Swtie",
  rating:"8.5",
  description:"A fluffy white Pomeranian with bright round eyes and a playful personality. Despite its tiny size, it acts bold and confident, always curious about everything around it. Its soft double coat, fox-like face, and energetic nature make it both adorable and attention-grabbing. This little dog loves human company, enjoys being the center of attention, and can quickly turn any quiet room into a lively one with its cheerful energy",

age:"6",
},


{
  image: "/doggy.jpg",
  id:3,
  name:"Cutu",
  rating:"10",
  description:"A fluffy white Pomeranian with bright round eyes and a playful personality. Despite its tiny size, it acts bold and confident, always curious about everything around it. Its soft double coat, fox-like face, and energetic nature make it both adorable and attention-grabbing. This little dog loves human company, enjoys being the center of attention, and can quickly turn any quiet room into a lively one with its cheerful energy",

age:"5",
},




]


  return (
    <>
      

  {
    
    
   


 
  
  dog.map((dog)=>{
      return(
        <Dog
      
      key={dog.id}
       name={dog.name}
        rating={dog.rating}
        description={dog.description}
        age={dog.age}
        

    />
      )
    })

 


    

  }
  
      
    </>
  )
}

export default App
