interface inputControlProps{
    step?: number
    label: string;
    type: string;
    id: string;
}

export function InputControl({step,label,type,id}: inputControlProps){
    return (
        <div className="input-control">
            <label htmlFor={id}>{label.toUpperCase()} </label>
            <input autoComplete="off" type={type} id={id} step={step}/>
        </div>
    )
}