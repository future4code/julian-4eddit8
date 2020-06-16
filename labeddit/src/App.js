import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from './Pages/PageLogin';
import PagCadastro from './Pages/PagCadastro';
import PagFeed from './Pages/PagFeed';
import Post from './Pages/PageUserPosts'

function App() {
  return (
    <Router>
      <div>        
         <Switch>
          <Route path="/cadastro">
            <PagCadastro/>
          </Route>
          <Route path="/feed">
            <PagFeed/>
          </Route>
          <Route path="/post">
            <Post/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App