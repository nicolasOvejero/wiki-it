import { AnyAction } from "redux";
import { MENU_ACTION_TYPES } from "./menu.types";

export type MenuState = {
    isOpen: boolean;
}

export const MENU_INITIAL_STATE = {
    isOpen: false
}

export const menuReducer = (
    state = MENU_INITIAL_STATE,
    action = {} as AnyAction
): MenuState => {
    if (action.type === MENU_ACTION_TYPES.SET_IS_OPEN_MENU) {
        return {
            ...state,
            isOpen: !state.isOpen
        };
    }

    return state;
};
