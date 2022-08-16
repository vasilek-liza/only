import components from './CustomCheckboxComponents';
import style from '../../Autification/AutificationComponents';

interface ICheckboxProps {
    type: string;
    name: string;
    checked: boolean;
    onChange: () => void
}

export const CustomCheckbox: React.FC<ICheckboxProps> = ({type, name, checked, onChange}) => {
    return (
        <components.CheckboxComponent>
            <input 
                type={type} 
                name={name}  
                checked={checked} 
                onChange={onChange} 
            />
            <style.Label>Запомнить пароль</style.Label>
        </components.CheckboxComponent>

    )
}