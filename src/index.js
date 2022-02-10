import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './App';
import Home from './pages/Home';
import {
  Clients,
  Client,
  NewExchangeForm,
  ClientDocs,
  ExchangeInfos,
} from './pages/Clients';
import Reports from './pages/Reports';
import Integrations from './pages/Integrations';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Login from './pages/Login';

const theme = createTheme();

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="clients" element={<Outlet />}>
            <Route path=":clientId" element={<Outlet />}>
              <Route path="docs" element={<Outlet />}>
                <Route path=":docId" element={<ExchangeInfos />} />
                <Route path="new" element={<NewExchangeForm />} />
                <Route index element={<ClientDocs />} />
              </Route>
              <Route index element={<Client />} />
            </Route>
            <Route index element={<Clients />} />
          </Route>
          <Route path="/reports" element={<Reports />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
