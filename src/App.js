import './App.css';
import Footer from './Container/Footer/Footer';
import Header from './Container/Header/Header';
import Home from './Container/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchPage from './Container/SearchPage/SearchPage';

function App() {
  return (

    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
