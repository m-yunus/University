import './App.css';
import { UniversityList } from './Components/Context/Context';
import Loading from './Components/Loading/Loading';
import Main from './Components/Manihero/Main';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from "./Components/Login/Login.jsx"
import Signup from "./Components/SignUppage/Signup.jsx"
function App() {
  const {loading}=UniversityList()
  return (
    <div className="App">   
        <BrowserRouter>
            <Routes>
                  <Route exact path='/' element= {loading?<Loading/>:  <Main/>}/>
                  <Route path='/signup' element={<Signup/>}/>
                  <Route path='/login' element={<Login/>}/>
            </Routes>        
        </BrowserRouter>
    </div>
  );
}
export default App;
