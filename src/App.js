import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import List from './components/List.js'
import Details from './components/Details';
import NotFound from './components/NotFound';

function App() {



  return (
    <BrowserRouter>
      <div className="App">
        <div className="title-container">
          <h1 className="main-title">Breaking Bad</h1>
        </div>
        <div className="container">

          <Switch>
            <Route path="/" exact component={List} />
            <Route path="/details/:id" component={Details} />
            <Route component={NotFound} />
          </Switch>

        </div>

      </div>

    </BrowserRouter>

  );
}

export default App;
