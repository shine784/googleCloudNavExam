
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
        Google Cloud Services from: Lee kun Hee
      </h1>
      <ul>
        <li>
          <Link to="/">default</Link>
        </li>
        <li>
          <Link to="/compute">compute</Link>
        </li>
        <li>
          <Link to="/kubernetes">kubernetes</Link>
        </li>
      </ul>
        <Route path="/compute" component={ComputePage} />
        <Route path="/kubernetes" component={KubernetesPages} />
    </>
)
export default App;
