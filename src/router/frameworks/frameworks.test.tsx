import { fireEvent, render, screen, within } from '@testing-library/react';
import { getAllByClass, getByClass } from '../../setupTests';
import Frameworks from './frameworks.component';

describe('render frameworks page', () => {
    it('default', () => {
        render(
            <Frameworks />
        );

        const searchForm = getByClass('search-form', screen);
        expect(searchForm).toBeInTheDocument();

        const grid = getByClass('languages-grid', screen);
        expect(grid).toBeInTheDocument();
        expect(grid.nodeName).toEqual('ARTICLE');

        const cards = getAllByClass('language-card-container', screen);
        expect(cards.length).toEqual(12);
        expect(within(cards[0]).getByText('angular')).toBeInTheDocument();
        expect(within(cards[11]).getByText('Vue.js')).toBeInTheDocument();
    });

    it('test search form by name', () => {
        render(
            <Frameworks />
        );

        const input = getByClass('search-input', screen);
        expect(input).toBeInTheDocument();
        fireEvent.change(input,  { target: { value: 'React' } });
        const button = getByClass('button', screen);
        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        const cards = getAllByClass('language-card-container', screen);
        expect(cards.length).toEqual(2);
        expect(within(cards[0]).getByText('react native')).toBeInTheDocument();
        expect(within(cards[1]).getByText('reactJS')).toBeInTheDocument();
    });

    it('test search form no result', () => {
        render(
            <Frameworks />
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
            <Frameworks />
        );

        const input = getByClass('search-input', screen);
        expect(input).toBeInTheDocument();
        fireEvent.change(input,  { target: { value: 'Frontend' } });
        const button = getByClass('button', screen);
        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        const cards = getAllByClass('language-card-container', screen);
        expect(cards.length).toEqual(10);
    });
});
