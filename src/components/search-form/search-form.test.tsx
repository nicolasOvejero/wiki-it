import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { getByClass } from '../../setupTests';
import SearchForm from './search-form.component';

describe('render search form', () => {
    it('default', () => {
        render(
            <SearchForm
                inputPlaceholder='Input Placeholder'
                submitHandler={() => {}}
                buttontext='Test Button'
            />
        );

        const form = getByClass('search-form', screen);
        expect(form).toBeInTheDocument();
        expect(form.nodeName).toEqual('FORM');
        
        const input = getByClass('search-input', screen);
        expect(input).toBeInTheDocument();
        expect(input.nodeName).toEqual('INPUT');
        expect(input).toHaveAttribute('placeholder', 'Input Placeholder');
        expect(input).toHaveAttribute('type', 'text');
        expect(input).toHaveAttribute('name', 'search-input');

        const button = getByClass('button', screen);
        expect(button).toBeInTheDocument();
        expect(button.nodeName).toEqual('BUTTON');
        expect(button).toHaveClass('button', 'yellow');
        expect(button.innerHTML).toEqual('Test Button');
        expect(button).toHaveAttribute('type', 'submit');
    });

    it('default no button label', () => {
        render(
            <SearchForm
                inputPlaceholder='Input Placeholder'
                submitHandler={() => {}}
            />
        );

        const button = getByClass('button', screen);
        expect(button).toBeInTheDocument();
        expect(button.nodeName).toEqual('BUTTON');
        expect(button).toHaveClass('button', 'yellow');
        expect(button.innerHTML).toEqual('Rechercher');
        expect(button).toHaveAttribute('type', 'submit');
    });

    it('submit form', () => {
        let clickedValue = null;
        const handler = (value: string) => {
            clickedValue = value;
        }
        expect(clickedValue).toEqual(null);

        render(
            <SearchForm
                inputPlaceholder='Input Placeholder'
                submitHandler={handler}
            />
        );

        const input = getByClass('search-input', screen);
        fireEvent.change(input, { target: { value: 'oui' } });

        const button = getByClass('button', screen);
        fireEvent.click(button);

        expect(clickedValue).toEqual('oui');
    });
});
