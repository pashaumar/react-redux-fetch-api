import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserDetails from "./component/userDetails/UserDetails";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./component/navbar/Navbar";
import Users from "./component/users/usersPerPage/Users";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/users/:id" component={UserDetails} />
            <Route path="/users" exact component={Users} />
            <Route path="/" render={() => <Redirect to="/users" />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
