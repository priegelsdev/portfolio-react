import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

// layout component
import Layout from './Components/Layout';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Portfolio from './pages/Portfolio';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/portfolio" element={<Portfolio />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
