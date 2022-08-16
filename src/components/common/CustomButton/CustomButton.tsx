import './CustomButtonComponents.tsx';
import components from './CustomButtonComponents';

interface IButtonProps {
    text: string,
    children?: any,
    onClick?: () => void,
    type?: "button" | "submit" | "reset",
    disabled?: boolean,
    login?: boolean,
}

export const CustomButton: React.FC<IButtonProps> = ({text, disabled, children, login, onClick, type}) => {

    return (
        <components.Button
            disabled={disabled} 
            type={type} 
            onClick={onClick}
            login={login}
        >
            {text}
            {children}
        </components.Button> 
    );
}