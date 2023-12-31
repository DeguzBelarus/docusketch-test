import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from './components/App';
import { store } from './redux/store';
import './index.scss';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const rootElement = document.getElementById('root')!;
createRoot(rootElement).render(app);
