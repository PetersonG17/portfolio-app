import { Route, Switch } from 'react-router-dom';

import Layout from './components/layouts/Layout';
import MainPage from './pages/Main';
import TagsPage from './pages/Tags';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/tags'>
          <TagsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
