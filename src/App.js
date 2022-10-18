import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route exact path="/">
          {/* homepage component */}
        </Route>
        <Route path="/page">{/* page component */}</Route>
      </Switch>
    </div>
  );
}

export default App;
