import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createTestStore, getByClass } from '../../setupTests';
import { MENU_ACTION_TYPES } from '../../store/menu/menu.types';
import Menu from './menu.component';

const store = createTestStore();

describe('render menu', () => {
    it('default close', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Menu />
                </Provider>
            </BrowserRouter>
        );

        const nav = getByClass('menu', screen);
        expect(nav).toBeInTheDocument();
        expect(nav.nodeName).toEqual('NAV');

        const close = getByClass('close', screen);
        expect(close).toBeInTheDocument();
        expect(close.nodeName).toEqual('SPAN');
        expect(close).toHaveClass('close', 'material-symbols-outlined');

        const name = getByClass('name', screen);
        expect(name).toBeInTheDocument();
        expect(name.nodeName).toEqual('H2');

        const menu = getByClass('menu-items', screen);
        expect(menu).toBeInTheDocument();
        expect(menu.nodeName).toEqual('UL');
        
        const linkLang = within(menu).getByText(/Languages/i);
        expect(linkLang).toBeInTheDocument();
        expect(linkLang.nodeName).toEqual('A');
        expect(linkLang).toHaveAttribute('href', '/languages');

        const linkFrameworks = within(menu).getByText(/Frameworks/i);
        expect(linkFrameworks).toBeInTheDocument();
        expect(linkFrameworks.nodeName).toEqual('A');
        expect(linkFrameworks).toHaveAttribute('href', '/frameworks');
    });

    it('default open', async () => {
        expect(store.getState().menu).toEqual({'isOpen': false});
        await waitFor(() => {
            // open menu
            store.dispatch({
                type: MENU_ACTION_TYPES.SET_IS_OPEN_MENU
            });
        });
        expect(store.getState().menu).toEqual({'isOpen': true});

        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Menu />
                </Provider>
            </BrowserRouter>
        );

        const nav = getByClass('menu', screen);
        expect(nav).toBeInTheDocument();
        expect(nav.nodeName).toEqual('NAV');
        expect(nav).toHaveClass('menu', 'open');

        await waitFor(() => {
            // reset
            store.dispatch({
                type: MENU_ACTION_TYPES.SET_IS_OPEN_MENU
            });
        });
        expect(store.getState().menu).toEqual({'isOpen': false});
    });

    it('close menu', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Menu />
                </Provider>
            </BrowserRouter>
        );

        expect(store.getState().menu).toEqual({ 'isOpen': false });
        await waitFor(() => {
            // open menu
            store.dispatch({
                type: MENU_ACTION_TYPES.SET_IS_OPEN_MENU
            });
        });

        const mobileMenu = getByClass('close', screen);
        fireEvent.click(mobileMenu);
        expect(store.getState().menu).toEqual({'isOpen': false});
    });

    it('click on languages link', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Menu />
                </Provider>
            </BrowserRouter>
        );

        const menu = getByClass('menu-items', screen);
        const linkLang = within(menu).getByText(/Languages/i);
        fireEvent.click(linkLang);
        expect(window.location.pathname).toEqual('/languages');
    });

    it('click on frameworks link', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Menu />
                </Provider>
            </BrowserRouter>
        );

        const menu = getByClass('menu-items', screen);
        const linkFrameworks = within(menu).getByText(/Frameworks/i);
        fireEvent.click(linkFrameworks);
        expect(window.location.pathname).toEqual('/frameworks');
    });
});
