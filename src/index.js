import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import './index.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from './components/PublicRoute/PublicRoute';
import Landing from './components/Landing/Landing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<App/>}>
                <Route index element={<Landing />} />
                <Route element={<PublicRoute />}>
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
