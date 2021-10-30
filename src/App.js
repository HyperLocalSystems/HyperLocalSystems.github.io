import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Mappicker from "./components/mappicker";
import Rooturl from "./components/rooturl";
import Shop from "./components/shop";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/start">
          <Mappicker />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/shop/:shopId" children={<Shop />} />
        <Route path="/">
          <Rooturl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
