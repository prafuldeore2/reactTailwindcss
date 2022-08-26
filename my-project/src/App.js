import './App.css';
import {Routes,Route} from "react-router-dom"
import { MarginPading } from './Components/MarginPading';
import { Responsive } from './Components/ResponsiceTail';
import { ApplyDirective } from './Components/Applydirective';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="margin" element={<MarginPading/>}></Route>
    <Route path="responsive" element={<Responsive/>}></Route>
    <Route path="applydirective" element={<ApplyDirective/>}></Route>

    </Routes>
    </div>
  );
}

export default App;
