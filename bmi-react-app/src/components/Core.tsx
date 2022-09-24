import { InputControl } from "./InputControl";
import { SectionResult } from "./SectionResult";

export function Core() {
    return (
        <>
            <h2>Type your data</h2>
            <form action="#">
                <InputControl id={'name'} label={'name: '} type={'text'} />
                <InputControl id={'weight'} label={'weight: '} type={'number'} />
                <InputControl id={'height'} label={'height: '} type={'number'} step={0.01}/>
                <button id="btn_calculate" onClick={calculate}>Calculate</button>
            </form>
            <SectionResult />
        </>
    )
}

export function calculate() {
    const btn_calculate = document.getElementById('btn_calculate')
    const input_weight = document.getElementById('weight')
    const input_height = document.getElementById('height')

    const result = document.getElementById('result')
    const bmi_span = document.getElementById('bmi')

    btn_calculate.onclick = (event) => {
        event.preventDefault()
        const weight = Number(input_weight.value)
        const height = Number(input_height.value)

        const bmi = weight / (height * height)

        bmi_span.innerHTML = bmi.toFixed(1)

        result.style.display = 'flex'
        result.classList.add('visivel')
        result.classList.remove('visivel')
    }
}