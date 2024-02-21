import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoalTracker from "../GoalTracker";

function RoutesHOC() {
  const isAuthenticated = false; // Replace with your authentication logic

  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Routes>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </Routes>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={GoalTracker} />
        {/* put all pages below this!!*/}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesHOC;
