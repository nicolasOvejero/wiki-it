import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTestStore } from './setupTests';

const store = createTestStore();
const setup = () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );

    expect(window.location.pathname).toEqual('/');
}

describe('app', () => {
    test('renders learn react link', () => {
        setup();
        const linkElement = screen.getByText(/Définition/i);
        expect(linkElement).toBeInTheDocument();
    });
});
