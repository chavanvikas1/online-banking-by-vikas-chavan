import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Form from './component/Form';
import Admin from './Admin/Admin';
import Navbar from './component/Navbar';
import Dashboard from './component/Dashboard';
import Adduser from './Admin/Adduser';
import Profile from './pages/Profile';
import Alluser from './Admin/Alluser';
import Transfermoney from './pages/Transfermoney';
import Userpayment from './pages/Userpayment';

function App() {
  return (
    <div>
      <Router >
        {/* <Navbar/> */}

<Switch>
     <Route path="/" exact component={Form} />
     <Route path="/fhgjnm"  component={Admin} />
     <Route path="/Profile"  component={Profile} />
     <Route path="/alldata"  component={Alluser} />
     <Route path="/Dashboard"  component={Dashboard} />
     <Route path="/Add-user"  component={Adduser} />
     <Route path="/transfer"  component={Transfermoney} />
     <Route path="/user"  component={Userpayment} />
</Switch>
      </Router>

    </div>
  );
}

export default App;
