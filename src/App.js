import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
//import { Layout, NotFound, Home, Navbar } from "./components";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          // path: "",
          index: true,
          element: <Home />,
        },
        ,
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "about",
          element: <About />,
        }, {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
