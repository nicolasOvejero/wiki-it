import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { MENU_ACTION_TYPES } from '../../store/menu/menu.types';
import Button from '../button/button.component';
import Menu from '../menu/menu.component';
import './header.style.scss';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleMenu = () => dispatch({
        type: MENU_ACTION_TYPES.SET_IS_OPEN_MENU
    });

    return (
        <Fragment>
            <header className='header-container'>
                <div className='logo-container'>
                    <span
                        className="icon-menu material-symbols-outlined"
                        onClick={toggleMenu}
                    >
                        menu
                    </span>
                    <h2 className='site-name'><Link to="/">WIKI-IT</Link></h2>
                </div>
                <nav className='links-container'>
                    <Button color="ORANGE" text='Languages' clickHandler={() => { navigate('/languages') }} ></Button>
                    <Button color="BLUE" text='Frameworks' clickHandler={() => { navigate('/frameworks') }}></Button>
                </nav>
            </header>
            <Menu />
            <Outlet />
        </Fragment>
    );
}

export default Header;
