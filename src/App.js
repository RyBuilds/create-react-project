import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="PageOne">
          <PageOne />
        </Route>
        <Route path="PageTwo">
          <PageTwo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
