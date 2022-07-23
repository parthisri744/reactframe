import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import IndexRouter from './routers/indexRouter';
import SmartNav from './components/SmartNav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <SmartNav />
    </BrowserRouter>
);

