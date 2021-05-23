import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      {!user ? (
        <LoginScreen />
      ) : (
        <Router>
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
