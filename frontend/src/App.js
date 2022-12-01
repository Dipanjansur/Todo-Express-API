import logo from './logo.svg';
import './App.css';
import CreateTodo from './Components/CreateTodo';
import ShowTodo from './Components/ShowTodo';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './Components/Login';
import { Register } from './Components/Register';

function App() {
  const Logins = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,

    }, {
      path: "/register",
      element: <Register />
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={Logins} />
    </div>
  );
}

export default App;
