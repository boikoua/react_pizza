import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';
import { HashRouter as Router } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
