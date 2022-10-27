import { fireEvent, render, screen, within } from '@testing-library/react';
import { getAllByClass, getByClass } from '../../setupTests';
import Languages from './languages.component';

describe('render ganguages page', () => {
    it('default', () => {
        render(
            <Languages />
        );

        const searchForm = getByClass('search-form', screen);
        expect(searchForm).toBeInTheDocument();

        const grid = getByClass('languages-grid', screen);
        expect(grid).toBeInTheDocument();
        expect(grid.nodeName).toEqual('ARTICLE');

        const cards = getAllByClass('language-card-container', screen);
        expect(cards.length).toEqual(20);
        expect(within(cards[0]).getByText('c')).toBeInTheDocument();
        expect(within(cards[19]).getByText('typescript')).toBeInTheDocument();
    });

    it('test search form by name', () => {
        render(
            <Languages />
        );

        const input = getByClass('search-input', screen);
        expect(input).toBeInTheDocument();
        fireEvent.change(input,  { target: { value: 'Java' } });
        const button = getByClass('button', screen);
        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        const cards = getAllByClass('language-card-container', screen);
        expect(cards.length).toEqual(2);
        expect(within(cards[0]).getByText('java')).toBeInTheDocument();
        expect(within(cards[1]).getByText('javascript')).toBeInTheDocument();
    });

    it('test search form no result', () => {
        render(
            <Languages />
        );

        const input = getByClass('search-input', screen);
        expect(input).toBeInTheDocument();
        fireEvent.change(input,  { target: { value: 'Test' } });
        const button = getByClass('button', screen);
        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        const grid = getByClass('languages-grid', screen);
        expect(grid.childElementCount).toEqual(0);
    });

    it('test search form by dev type', () => {
        render(
            <Languages />
        );

        const input = getByClass('search-input', screen);
        expect(input).toBeInTheDocument();
        fireEvent.change(input,  { target: { value: 'Frontend' } });
        const button = getByClass('button', screen);
        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        const cards = getAllByClass('language-card-container', screen);
        expect(cards.length).toEqual(15);
    });
});
