import { Fragment } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import './header.style.scss';

function Header() {
    const navigate = useNavigate();

    return (
        <Fragment>
            <header className='header-container'>
                <div className='logo-container'>
                    <h2 className='site-name'><Link to="/">WIKI-IT</Link></h2>
                </div>
                <nav className='links-container'>
                    <Button color="ORANGE" text='Languages' clickHandler={() => { navigate('/languages') }} ></Button>
                    <Button color="BLUE" text='Frameworks' clickHandler={() => { navigate('/frameworks') }}></Button>
                </nav>
            </header>
            <Outlet />
        </Fragment>
    );
}

export default Header;
