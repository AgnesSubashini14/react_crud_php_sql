import Crud from "./Crud";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './App.css'
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";


function App() {
  return (
    <div >
    
        <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>ListUser</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/user_create'>CreateUser</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='user/id:/edit'>EditUser</Link>
            </li>
          </ul>
          
        </nav>
        <Routes>
          <Route index element={<ListUser/>}/>
          <Route path='/user_create' element={<CreateUser/>}/>
          <Route path='user/:id/edit' element={<EditUser/>}/>


        </Routes>

        </BrowserRouter>
      
     
      
    </div>
  );
}

export default App;
