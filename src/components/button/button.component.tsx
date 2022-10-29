import { MouseEventHandler } from 'react';
import './button.style.scss';

type ButtonProps = {
    text: string;
    color: Colors;
    clickHandler?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset" | undefined;
}

export type Colors = 'ORANGE' | 'BLUE' | 'YELLOW' | 'GREEN';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const color = props.color === 'ORANGE' ? 'orange' :
        props.color === 'YELLOW' ? 'yellow' :
        props.color === 'GREEN' ? 'green' : 'blue';

    return (
        <button
            className={`button ${color}`}
            onClick={props.clickHandler}
            type={props.type}
        >
            { props.text }
        </button>
    );
}

export default Button;
