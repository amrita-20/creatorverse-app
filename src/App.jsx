import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { supabase } from './client';
import Card from './components/Card';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';

function App() {
  
  return (
    <main className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowCreators />} />
          <Route path="/creator/:id" element={<ViewCreator/>} />
          <Route path="/add" element={<AddCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
