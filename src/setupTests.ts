// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import { cleanup, Screen } from '@testing-library/react';
import { menuReducer } from './store/menu/menu.reducer';

afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    cleanup();
});

export function createTestStore() {
    const store = configureStore({
        reducer: combineReducers({
            menu: menuReducer,
        }),
        middleware: (_) => { return [] }
    });
    return store;
}

export function getByClass(className: string, screen: Screen) {
    return screen.getByText(
        (_, element) => element?.classList.contains(className) || false
    );
}

export function getAllByClass(className: string, screen: Screen) {
    return screen.getAllByText(
        (_, element) => element?.classList.contains(className) || false
    );
}
