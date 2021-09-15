import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from './pages/Login'
import firebaseKey from './firebase.json';

function App() {
  console.log(firebaseKey.firebaseConfig)
  return (
    <>
     <Router>
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/chat">
            <Chat />
          </Route>

          <Route path="/">
            <Chat />
          </Route>

        </Switch>
    </Router>
    </>
  );
}

export default App;
