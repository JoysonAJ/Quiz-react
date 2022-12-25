
import '../src/Stylesheet/App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<Main />
        },

        {
            path:'/quiz',
            element: <Quiz />
        },

        {
            path:'/result',
            element:<Result />
        },
    ])
  return (
   <>


   {/*<h1>*/}
   {/*    React App*/}
   {/*</h1>*/}

       <RouterProvider router={router} />
   </>
  );
}

export default App;
