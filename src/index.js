import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Slidebar  from './Slidebar';
import Navbar from './Navbar';
import Add_Courses from './Add_Courses';
import AddBatches from './Add_Batches';
import AddFaculties from './Add_Faculties'
import AddLectures from './Add_Lectures';
import AddSubjects from './Add_Subjects'
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
            <Route path='/' element={<Dashboard/>} />
            <Route path='/Navbar' element={<Navbar/>} />
            <Route path='/Slidebar' element={<Slidebar/>} />
           <Route path='/Course_table' element={<Coursetable/>} />
           <Route path='/Batches_table' element={<Batchetable/>} />
           <Route path='/Subject_tables' element={<Subjecttables/>} />
           <Route path='/Lecture_table' element={<Lecturetable/>} />
           <Route path='/Teacher_tables' element={<Teachertable/>} />
           <Route path='/Add_Courses' element = {<Add_Courses/>}/>
           <Route path='/Add_Batches' element = {<AddBatches/>}/>
           <Route path='/Add_Faculties' element = {<AddFaculties/>}/>
           <Route path='/Add_Lectures' element = {<AddLectures/>}/>
           <Route path='/Add_Lectures' element = {<AddLectures/>}/>
           <Route path='/Add_Subjects' element = {<AddSubjects/>}/>
        </Routes>
    </BrowserRouter>)
}
root.render(<MyRoutes/>);