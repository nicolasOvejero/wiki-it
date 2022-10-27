import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectMenuReducer } from '../../store/menu/menu.selector';
import { MENU_ACTION_TYPES } from '../../store/menu/menu.types';
import './menu.style.scss';

function Menu() {
    const menu = useSelector(selectMenuReducer);
    const dispatch = useDispatch();

    const toggleMenu = () => dispatch({
        type: MENU_ACTION_TYPES.SET_IS_OPEN_MENU
    });

    return (
        <nav className={`menu ${menu.isOpen ? 'open' : null}`}>
            <span
                className="close material-symbols-outlined"
                onClick={toggleMenu}
            >
                close
            </span>
            <h2 className='name'>WIKI-IT</h2>
            <ul className='menu-items'>
                <li className='menu-item orange'>
                    <Link to="/languages" onClick={toggleMenu}>Languages</Link>
                </li>
                <li className='menu-item blue'>
                    <Link to="/frameworks" onClick={toggleMenu}>Frameworks</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
