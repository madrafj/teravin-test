import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './app/store';
import Details from './pages/detail';
import Home from './pages/home';
import DataPersonal from './pages/submission/data-personal';
import Keahlian from './pages/submission/keahlian';
import PengalamanKerja from './pages/submission/pengalaman-kerja';
import RiwayatPendidikan from './pages/submission/riwayat-pendidikan';

window.store = store

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="submission">
            <Route path="data-personal" element={<DataPersonal />} />
            <Route path="riwayat-pendidikan" element={<RiwayatPendidikan />} />
            <Route path="pengalaman-kerja" element={<PengalamanKerja />} />
            <Route path="keahlian" element={<Keahlian />} />
          </Route>
          <Route path="details/:id" element={<Details />} />
          <Route path="*" element={<h4>Halaman tidak tersedia</h4>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
