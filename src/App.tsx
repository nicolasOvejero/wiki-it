import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import Frameworks from './router/frameworks/frameworks.component';
import Home from './router/home/home.component';
import Languages from './router/languages/languages.component';
import { selectThemeReducer } from './store/theme/theme.selector';
import './App.css';

function App() {
    const themeSate = useSelector(selectThemeReducer);
    
    console.log(themeSate.theme);
    if (themeSate.theme) {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('dark', 'light');
        body.classList.add(themeSate.theme.toLowerCase());
    }

    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="languages" element={<Languages />} />
                <Route path="frameworks" element={<Frameworks />} />
            </Route>
        </Routes>
    );
}

export default App;
