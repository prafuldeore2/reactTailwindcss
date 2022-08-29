import './App.css';
import {Routes,Route} from "react-router-dom"
import { MarginPading } from './Components/MarginPading';
import { Responsive } from './Components/ResponsiceTail';
import { ApplyDirective } from './Components/Applydirective';
import { Facebook } from './Components/Facebook';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Facebook/>}></Route>
    <Route path="margin" element={<MarginPading/>}></Route>
    <Route path="responsive" element={<Responsive/>}></Route>
    <Route path="applydirective" element={<ApplyDirective/>}></Route>
    <Route path="/" element={<Facebook/>}></Route>

    </Routes>
    </div>
  );
}

export default App;
