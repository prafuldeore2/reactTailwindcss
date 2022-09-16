import './App.css';
import {Routes,Route} from "react-router-dom"
import { MarginPading } from './Components/MarginPading';
import { Responsive } from './Components/ResponsiceTail';
import { ApplyDirective } from './Components/Applydirective';
import { Facebook } from './Components/Facebook';
import { Microsoft } from './Components/Microsoft';
import { Linkdin } from './Components/LinkdIn';
import { Scaler } from './Components/Scaler';
import { Cookie } from './Components/Coockies';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="margin" element={<MarginPading/>}></Route>
    <Route path="responsive" element={<Responsive/>}></Route>
    <Route path="applydirective" element={<ApplyDirective/>}></Route>
    <Route path="/" element={<Facebook/>}></Route>
    <Route path="microsoft" element={<Microsoft/>}></Route>
    <Route path="linkdin" element={<Linkdin/>}></Route>
    <Route path="scaler" element={<Scaler/>}></Route>
    <Route path="cookie" element={<Cookie/>}></Route>




    </Routes>
    </div>
  );
}

export default App;
