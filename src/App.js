import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './components/images/bg.png'
import { RootLayout } from './RootLayout';
import {Adduser} from './components/elements/Adduser'
import { Users } from './components/elements/Users';
import {Removedusers} from './components/elements/Removedusers'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
function App() {

//create browser router object//
const router=createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {
        path:"/",
        element:<Adduser/>
      },
      {
        path:"/users",
        element:<Users/>
      },
      {
        path:"/removedusers",
        element:<Removedusers/>
      }
    ]
  }
])


  return (
    <div className='b mr-2' style={{backgroundImage:`url(${bg})`}}>
     
      <RouterProvider router={router}/>
     
     </div>
  );
}

export default App;
