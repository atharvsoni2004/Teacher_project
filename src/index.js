import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Slidebar  from './Slidebar';
import Navbar from './Navbar';
import Subjecttables from './Subject_table'
import Lecturetable from './Lecture_table';
import Batchetable from './Batches_table';
import Teachertable from './Teacher_table'
import Coursetable from './Course_table'

const root = ReactDOM.createRoot(document.getElementById('root'));

function MyRoutes() //functional component
{
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbar/>} />
           <Route path='/Course_table' element={<Coursetable/>} />
           <Route path='/Batche_table' element={<Batchetable/>} />
           <Route path='/Subject_tables' element={<Subjecttables/>} />
           <Route path='/Lecture_table' element={<Lecturetable/>} />
           <Route path='/Teacher_tables' element={<Teachertable/>} />
        </Routes>
    </BrowserRouter>)
}
root.render(<MyRoutes/>);