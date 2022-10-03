import axios from 'axios'
import { useState } from 'react'
import './App.css'
import { Footer } from './components/Footer/Index'
import { Header } from './components/Header'
import { InputControl } from './components/InputControl/Index'

let id = 2;

function App() {
  const [name, setName] = useState("")
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)

  const [bmi, setBmi] = useState("")

  const getNameValue = (event: any) => {
    setName(event.target.value)
  }

  const getWeightValue = (event: any) => {
    setWeight(event.target.value)
  }

  const getHeightValue = (event: any) => {
    setHeight(event.target.value)
  }

  const onClickHandler = () => {
    setBmi((weight / Math.pow(height, 2)).toFixed(2))
    saveBmi();
  }

  const saveBmi = () => {
    axios.post("http://localhost:3000/person", {
      "id": id++,
      "name": name,
      "weight": weight,
      "height": height,
      "bmi": (weight / Math.pow(height, 2)).toFixed(2)
    })

  }
  
  return (
    <div id="container">
      <Header />
      <main>
        <h2>Type your data</h2>
        <form action="#">
          <InputControl id={"name"} type={"text"} label={"Name: "} onChange={getNameValue} />
          <InputControl id={"weight"} type={"number"} label={"Weight: "} onChange={getWeightValue} />
          <InputControl id={"height"} type={"number"} label={"Height: "} step={0.01} onChange={getHeightValue} />
          <button id="btn_calculate" onClick={onClickHandler}>Calculate</button>
        </form>

        <section id="result">
          BMI:<span id="bmi">{bmi}</span>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default App
