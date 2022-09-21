import { RootState } from "../store";
import { MenuState } from "./menu.reducer";

export const selectMenuReducer = (state: RootState): MenuState => state.menu;

