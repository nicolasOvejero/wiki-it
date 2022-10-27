import { fireEvent, render, screen, within } from '@testing-library/react';
import { getAllByClass, getByClass } from '../../setupTests';
import Home from './home.component';

describe('render home page', () => {
    it('default', () => {
        render(
            <Home />
        );

        const homeContainer = getByClass('home', screen);
        expect(homeContainer).toBeInTheDocument();
        expect(homeContainer.nodeName).toEqual('ARTICLE');

        const searchForm = getByClass('search-form', screen);
        expect(searchForm).toBeInTheDocument();

        const title = getByClass('home-title', screen);
        expect(title).toBeInTheDocument();
        expect(title.innerHTML).toEqual('Définition');

        const cards = getAllByClass('home-list-item', screen);
        expect(cards.length).toEqual(15);
        expect(within(cards[0]).getByText('API')).toBeInTheDocument();
        expect(within(cards[14]).getByText('UX')).toBeInTheDocument();
    });

    it('test search form by name', () => {
        render(
            <Home />
        );

        const input = getByClass('search-input', screen);
        expect(input).toBeInTheDocument();
        fireEvent.change(input,  { target: { value: 'SO' } });
        const button = getByClass('button', screen);
        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        const cards = getAllByClass('home-list-item', screen);
        expect(cards.length).toEqual(2);
        expect(within(cards[0]).getByText('JSON')).toBeInTheDocument();
        expect(within(cards[1]).getByText('SOAP')).toBeInTheDocument();
    });

    it('test search form no result', () => {
        render(
            <Home />
        );

        const input = getByClass('search-input', screen);
        expect(input).toBeInTheDocument();
        fireEvent.change(input,  { target: { value: 'Test' } });
        const button = getByClass('button', screen);
        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        const grid = getByClass('home-list', screen);
        expect(grid.childElementCount).toEqual(0);
    });
});
