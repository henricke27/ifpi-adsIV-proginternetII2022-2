interface InputControlProps {
    type: string
    id: string
    label: string
    step?: number
    onChange: any
}

export const InputControl = ({ id, type, label, step, onChange }: InputControlProps) => {
    return (
        <div className="input-control">
            <label htmlFor={id}>{label} </label>
            <input type={type} step={step} id={id} onChange={onChange}/>
        </div>
    )
}
