import { register } from "module";
import "./TextInput.scss";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    buttonText?: string;
    onButtonClick?: (e: any) => Promise<void> | void | null;
    register?: any;
    placeholder?: string;
    disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
    name,
    label,
    type,
    value,
    onChange,
    buttonText,
    onButtonClick,
    register,
    placeholder = "",
    ...rest
}) => {
    return (
        <div className="text-input">
            <label>{label}</label>
            <div className="input-wrapper">
                {register ? (
                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        {...register(name)}
                        formNoValidate
                        placeholder={placeholder}
                        {...rest}
                    />
                ) : (
                    <input type={type} value={value} onChange={onChange} formNoValidate placeholder={placeholder} />
                )}
                {buttonText && <button onClick={onButtonClick} disabled={rest.disabled}>{buttonText}</button>}
            </div>
        </div>
    );
};

export default TextInput;
