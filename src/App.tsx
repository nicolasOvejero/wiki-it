import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Frameworks from './router/frameworks/frameworks.component';
import Home from './router/home/home.component';
import Languages from './router/languages/languages.component';

function App() {
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
