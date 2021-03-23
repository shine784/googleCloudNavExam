
import * as React from 'react';
import { Route } from 'react-router';
import KubernetesPages from 'pages/KubernetesPage';
import { Link } from 'react-router-dom';
import ComputePage from 'pages/ComputePage';

interface Props { 
  model: null;
}

const App:React.FC = () => (
    <>
      <h1>
        Google Cloud Services: Lee kun Hee
      </h1>
      <ul>
        <li key="1">
          <Link to="/">default</Link>
        </li>
        <li key="2">
          <Link to="/compute/cluster">compute</Link>
        </li>
        <li key="3">
          <Link to="/kubernetes/cluster">kubernetes</Link>
        </li>
      </ul>
        <Route path="/compute" component={ComputePage} />
        <Route path="/kubernetes" component={KubernetesPages} />
    </>
)
export default App;
