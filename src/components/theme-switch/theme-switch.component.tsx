import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectThemeReducer } from '../../store/theme/theme.selector';
import { THEME_ACTION_TYPES } from '../../store/theme/theme.types';
import './theme-switch.style.scss';

const ThemeSwitch: React.FC = () => {
    const themeSate = useSelector(selectThemeReducer);
    const dispatch = useDispatch();

    const toggleTheme = () => dispatch({
        type: THEME_ACTION_TYPES.SET_THEME,
        payload: {
            theme: themeSate.theme === 'LIGHT' ? 'DARK' : 'LIGHT'
        }
    });

    return (
        <label id='switch' className='switch'>
            <input type='checkbox' id='slider'
                checked={themeSate.theme === 'LIGHT'}
                onChange={toggleTheme} />
            <span className='slider round'></span>
        </label>
    );
}

export default ThemeSwitch;

