import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Home from './router/home/home.component';
import Languages from './router/languages/languages.component';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="languages" element={<Languages />} />
            </Route>
        </Routes>
    );
}

export default App;
