import { useState } from "react"

function App() {

  const [color, setColor] = useState("white");

  const handleChange = (e) => {
    const selectColor = e.target.value;
    console.log(` the selector value is : ${selectColor}`)
    console.log(selectColor)

    setColor(selectColor)
  }

  return (
    <div className="w-full h-screen duration-1000" style={{ backgroundColor: color }}>
      {/* For Buttons  */}
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 gap-2 ">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "red" }}>Light Red</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "green" }}>Light Green</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "blue" }}>Light Blue</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full " style={{ backgroundColor: "yellow" }}>Light Yellow</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full" style={{ backgroundColor: "white" }}>light White</button>
        </div>
      </div>


      <div className="pt-5 pl-5">
        <select onChange={handleChange} value={color}>
          <option value="white">White</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>

    </div>
  )
}

export default App
