//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import Flat from './pages/Flat';
import Member from './pages/Member';
import Charges from './pages/Charges';
import Visitor from './pages/Visitor';
import RemoveCharges from './pages/RemoveCharges';
import RemoveFlat from './pages/RemoveFlat';
import RemoveMember from './pages/RemoveMember';
import Payment from './pages/Payment';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/AddFlat" component={Flat}></Route>
            <Route path="/RemoveFlat" component={RemoveFlat}></Route>
            <Route path="/AddMember" component={Member}></Route>
            <Route path="/RemoveMember" component={RemoveMember}></Route>
            <Route path="/Visitor" component={Visitor}></Route>
            <Route path="/MonthlyCharges" component={Charges}></Route>
            <Route path="/Payment" component={Payment}></Route>
            <Route path="/RemoveCharges" component={RemoveCharges}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
