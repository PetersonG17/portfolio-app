import { Route, Switch } from 'react-router-dom';

import MainPage from './pages/Main';
import TagsPage from './pages/Tags';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/tags'>
          <TagsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
