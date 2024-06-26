import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import Main from "./app/Main";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/app",
    element: <Main />,
  },
]);

function App() {

  console.log('Sample log message from App.tsx');
  
  useEffect(() => {
    axios.get("/api/techniques").then((response) => {
      console.log(response.data);
    });
  
  }, []);

  
  return <RouterProvider router={router} />;
}

export default App;
