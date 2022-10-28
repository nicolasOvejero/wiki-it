import { RootState } from "../store";
import { ThemeState } from "./theme.reducer";

export const selectThemeReducer = (state: RootState): ThemeState => state.theme;

