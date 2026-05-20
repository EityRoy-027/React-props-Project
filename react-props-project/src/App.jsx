
import Dog from "./Dog"

function App() {
  

 const name="Cutie"
 const rating="10"
 const description="A fluffy white Pomeranian with bright round eyes and a playful personality. Despite its tiny size, it acts bold and confident, always curious about everything around it. Its soft double coat, fox-like face, and energetic nature make it both adorable and attention-grabbing. This little dog loves human company, enjoys being the center of attention, and can quickly turn any quiet room into a lively one with its cheerful energy"

 const age="6";


  return (
    <>
      

  
      <Dog
 
       name={name}
        rating={rating}
        description={description}
        age={age}
        image="/dog.png"

    />
    </>
  )
}

export default App
