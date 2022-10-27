import { menuReducer } from "./menu.reducer";
import { MENU_ACTION_TYPES } from "./menu.types";

it('menuReducer default parameters', () => {
    const state = menuReducer();
    expect(state).toEqual({
        isOpen: false
    });
});

it('menuReducer with parameters', () => {
    const stateTrue = menuReducer({ isOpen: false }, { type: MENU_ACTION_TYPES.SET_IS_OPEN_MENU });
    expect(stateTrue).toEqual({
        isOpen: true
    });

    const stateFalse = menuReducer({ isOpen: true }, { type: MENU_ACTION_TYPES.SET_IS_OPEN_MENU });
    expect(stateFalse).toEqual({
        isOpen: false
    });
});

it('menuReducer with no state', () => {
    const stateTrue = menuReducer(undefined, { type: MENU_ACTION_TYPES.SET_IS_OPEN_MENU });
    expect(stateTrue).toEqual({
        isOpen: true
    });
});
