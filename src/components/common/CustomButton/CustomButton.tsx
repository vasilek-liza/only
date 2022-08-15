import './CustomButtonComponents.tsx';
import components from './CustomButtonComponents';
import { IButtonProps } from '../../../interfaces/IButtonProps';

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