import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Onboarding from './Onboarding';
import Kategori from './Kategori';
import Profil from './Profil';
import OpretProfil from './OpretProfil';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Onboarding />} />
                <Route path='/OpretProfil' element={<OpretProfil/>} />
                <Route path='/Kategori' element={<Kategori/>} />
                <Route path='/Profil' element={<Profil/>} />
                <Route path='/Upload' element={<Upload/>} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;

