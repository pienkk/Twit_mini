import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
import LeftSideBar from './pages/hyosung/leftSideBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
