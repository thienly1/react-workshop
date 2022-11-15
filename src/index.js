import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import DataTable from "./DataTable";
import Example from "./Example";
import DataTable1 from "./DataTable1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataTable/>);
//root.render(<DataTable1/>)

