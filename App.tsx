import { Provider } from 'react-redux';
import { store } from './src/store/store';
import ProductList from './src/components/ProductList';
import './global.css';

const App = () => {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
};

export default App;
