import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import Main from "./app/Main";

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
  useEffect(() => {  // axios.get("/hello").then((response) => {
    //   console.log(response.data);
    // });
  
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
