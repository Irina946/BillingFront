import Select, { SingleValue } from 'react-select'
import './select.css'

export interface OptionTarif {
    label: string,
    value: string,
    description: string,
    price: number,
    duration: number,
    internet: number,
    is_unlimited_intenet: boolean,
    minute: number,
    sms: number
}

interface SelectInputProps {
    options: OptionTarif[],
    defaultOption: OptionTarif | null,
    onChange: (selectedOption: OptionTarif | null) => void
}



export const SelectInput = (props: SelectInputProps): JSX.Element => {
    const formattedOptions = props.options.map(option => ({
        label: option.label,
        value: option.value,
    }));

    const handleChange = (newValue: SingleValue<{ label: string; value: string }>) => {
        if (newValue) {
            const selectedOption = props.options.find(option => option.value === newValue.value) || null;
            props.onChange(selectedOption);
        } else {
            props.onChange(null);
        }
    };

    return (
        <Select
            value={props.defaultOption ? { label: props.defaultOption.label, value: props.defaultOption.value } : null}
            onChange={handleChange} 
            isClearable={true}
            isSearchable={true}
            className="react-select" 
            classNamePrefix="react-select"
            options={formattedOptions}
            isDisabled={false}
            isLoading={false}
            isRtl={false}
            placeholder={'Выберите тариф'}
        />
    )
}

