interface InputProps {
    type: string
    placeholder: string
    id: string
}

export const Input = (props: InputProps): JSX.Element => {
    return (
        <div className="relative mb-6">
            <input
                id={props.id}
                type={props.type}
                placeholder=""
                className="
                    mb-10
                    block
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
                    placeholder-transparent
                    peer
                    "
                required
            />
            <label
                htmlFor={props.id}
                className="
                absolute
                left-4
                -top-1.5
                text-gray
                font-Styreneb-Bold
                font-medium
                text-lg
                transition-all
                duration-200
                transform
                -translate-y-6
                peer-placeholder-shown:top-9
                peer-placeholder-shown:left-4
                peer-placeholder-shown:text-gray
                peer-focus:-translate-y-8
                peer-focus:text-blackGray
                peer-focus:top-0
                "
            >{props.placeholder}</label>
        </div>

    )
}

