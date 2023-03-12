import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Layout from './Components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
