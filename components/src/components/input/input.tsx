interface InputProps {
    type: string
    placeholder: string
}

export const Input = (props: InputProps): JSX.Element => {
    return (
    <input 
        type={props.type}
        placeholder={props.placeholder}
        className="
            border-blackGray 
            border-2 
            rounded-8 
            p-p-input 
            w-325 
            h-50
            font-Styreneb-Bold
            font-bold
            text-blackGray
            text-lg
            focus:border-4
            hover:border-4
            active:border-4
            placeholder:text-gray
            focus-visible:border-blackGray
            "
    />
    
)
}

