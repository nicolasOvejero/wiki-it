import { AnyAction } from "redux";
import { THEME_ACTION_TYPES } from "./theme.types";

export type ThemeState = {
    theme: string;
}

export const THEME_INITIAL_STATE = {
    theme: 'DARK'
}

export const themeReducer = (
    state = THEME_INITIAL_STATE,
    action = {} as AnyAction
): ThemeState => {
    console.log(action, state);
    if (action.type === THEME_ACTION_TYPES.SET_THEME) {
        return {
            ...state,
            theme: action.payload.theme
        };
    }

    return state;
};
