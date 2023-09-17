import '../style/main.scss'
import withAppProviders from './withAppProviders';
import BrowserRouter from './router/core/BrowserRouter';
import Layout from './router/Layout';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </>
  );
}

export default withAppProviders(App)();
