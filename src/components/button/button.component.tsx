import { MouseEventHandler } from 'react';
import './button.style.scss';

type ButtonProps = {
    text: string;
    clickHandler: MouseEventHandler<HTMLButtonElement>;
}

function Button(props: ButtonProps) {
    return (
        <button className='button' onClick={props.clickHandler}>
            { props.text }
        </button>
    );
}

export default Button;
