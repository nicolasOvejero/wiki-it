import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createTestStore, getByClass } from '../../setupTests';
import { MENU_ACTION_TYPES } from '../../store/menu/menu.types';
import Header from './header.component';

const store = createTestStore();

describe('render header', () => {
    it('default', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const header = getByClass('header-container', screen);
        expect(header).toBeInTheDocument();
        expect(header.nodeName).toEqual('HEADER');

        const logoContainer = getByClass('logo-container', screen);
        expect(logoContainer).toBeInTheDocument();
        expect(logoContainer.nodeName).toEqual('DIV');

        const logo = getByClass('icon-menu', screen);
        expect(logo).toBeInTheDocument();
        expect(logo.nodeName).toEqual('SPAN');
        expect(logo).toHaveClass('icon-menu', 'material-symbols-outlined');

        const name = getByClass('site-name', screen);
        expect(name).toBeInTheDocument();
        expect(name.nodeName).toEqual('H2');

        const link = within(name).getByText(/WIKI-IT/i);
        expect(link).toHaveAttribute('href', '/');

        const linkContainer = getByClass('links-container', screen);
        expect(linkContainer).toBeInTheDocument();
        expect(linkContainer.nodeName).toEqual('NAV');

        const buttonLang = within(linkContainer).getByText(/Languages/i);
        expect(buttonLang).toBeInTheDocument();
        expect(buttonLang.nodeName).toEqual('BUTTON');
        expect(buttonLang).toHaveClass('button', 'orange');

        const buttonFrameworks = within(linkContainer).getByText(/Frameworks/i);
        expect(buttonFrameworks).toBeInTheDocument();
        expect(buttonFrameworks.nodeName).toEqual('BUTTON');
        expect(buttonFrameworks).toHaveClass('button', 'blue');
    });

    it('mobile menu', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const nav = getByClass('menu', screen);
        expect(nav).toBeInTheDocument();
        expect(nav.nodeName).toEqual('NAV');
    });

    it('click on languages button', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const linkContainer = getByClass('links-container', screen);
        const buttonLang = within(linkContainer).getByText(/Languages/i);
        fireEvent.click(buttonLang);
        expect(window.location.pathname).toEqual('/languages');
    });

    it('click on frameworks button', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const linkContainer = getByClass('links-container', screen);
        const buttonLang = within(linkContainer).getByText(/Frameworks/i);
        fireEvent.click(buttonLang);
        expect(window.location.pathname).toEqual('/frameworks');
    });

    it('open mobile menu', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        expect(store.getState().menu).toEqual({'isOpen': false});
        const mobileMenu = getByClass('icon-menu', screen);
        fireEvent.click(mobileMenu);
        expect(store.getState().menu).toEqual({'isOpen': true});

        // reset
        await waitFor(() => {
            store.dispatch({
                type: MENU_ACTION_TYPES.SET_IS_OPEN_MENU
            });
        });
        expect(store.getState().menu).toEqual({'isOpen': false});
    });

    it('close mobile menu', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
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

        const mobileMenu = getByClass('icon-menu', screen);
        fireEvent.click(mobileMenu);
        expect(store.getState().menu).toEqual({'isOpen': false});
    });
});
