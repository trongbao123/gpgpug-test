import { register } from "module";
import "./TextInput.scss";

interface TextInputProps {
    name: string;
    label: string;
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    buttonText?: string;
    onButtonClick?: (e: any) => void;
    register?: any;
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
}) => {
    return (
        <div className="text-input">
            <label>{label}</label>
            <div className="input-wrapper">
                {register ? (
                    <input type={type} value={value} onChange={onChange} {...register(name)} formNoValidate />
                ) : (
                    <input type={type} value={value} onChange={onChange} formNoValidate />
                )}
                {buttonText && <button onClick={onButtonClick}>{buttonText}</button>}
            </div>
        </div>
    );
};

export default TextInput;
