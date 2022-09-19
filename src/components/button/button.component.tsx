import { MouseEventHandler } from 'react';
import './button.style.scss';

type ButtonProps = {
    text: string;
    color: Colors;
    clickHandler: MouseEventHandler<HTMLButtonElement>;
}

export type Colors = 'ORANGE' | 'BLUE';

function Button(props: ButtonProps) {
    const color = props.color === 'ORANGE' ? 'orange' : 'blue';

    return (
        <button className={`button ${color}`} onClick={props.clickHandler}>
            { props.text }
        </button>
    );
}

export default Button;
