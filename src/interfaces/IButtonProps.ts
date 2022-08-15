export interface IButtonProps {
    text: string,
    children?: any,
    onClick?: () => void,
    type?: "button" | "submit" | "reset",
    disabled?: boolean,
    login?: boolean,
}