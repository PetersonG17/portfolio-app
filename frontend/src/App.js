import { Route, Switch } from 'react-router-dom';

import Layout from './components/layouts/Layout';
import MainPage from './pages/Main';
import TagsPage from './pages/Tags';
import SkillsPage from './pages/Skills';
import CertificationsPage from './pages/Certifications';

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
        <Route path='/certifications'>
          <CertificationsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
