import { Route, Switch } from 'react-router-dom';

import Layout from './components/layouts/Layout';
import MainPage from './pages/Main';
import TagsPage from './pages/Tags';
import SkillsPage from './pages/Skills';

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
        <Route path='/skills'>
          <SkillsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
