import { fireEvent, render, screen } from '@testing-library/react';
import Button from './button.component';

describe('render button', () => {
    it('orange', () => {
        render(
            <Button
                text='Je click'
                type='button'
                color='ORANGE'
            />
        );

        const button = screen.getByText('Je click');

        expect(button).toBeInTheDocument();
        expect(button.nodeName).toEqual('BUTTON');
        expect(button).toHaveClass('button', 'orange');
        expect(button).toHaveProperty('type', 'button');
    });

    it('yellow and type submit', () => {
        render(
            <Button
                text='Je click'
                type='submit'
                color='YELLOW'
            />
        );

        const button = screen.getByText('Je click');

        expect(button).toBeInTheDocument();
        expect(button.nodeName).toEqual('BUTTON');
        expect(button).toHaveClass('button', 'yellow');
        expect(button).toHaveProperty('type', 'submit');
    });

    it('blue and type reset', () => {
        render(
            <Button
                text='Je click'
                type='reset'
                color='BLUE'
            />
        );

        const button = screen.getByText('Je click');

        expect(button).toBeInTheDocument();
        expect(button.nodeName).toEqual('BUTTON');
        expect(button).toHaveClass('button', 'blue');
        expect(button).toHaveProperty('type', 'reset');
    });

    it('and action click', async () => {
        let value = null;
        const click = () => {
            value = 'clicked';
        }

        render(
            <Button
                color='BLUE'
                text='Je click'
                type='button'
                clickHandler={click}
            />
        );

        const button = screen.getByText('Je click');
        expect(button).toBeInTheDocument();

        fireEvent(
            screen.getByText('Je click'),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(value).toEqual('clicked');
    });
});
