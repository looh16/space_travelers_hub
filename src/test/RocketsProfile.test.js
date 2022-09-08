import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketsProfile from '../components/rocket/RocketsProfile'


test('renders rocketProfile correctly', () => {
  const tree = Renderer.create(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <RocketsProfile />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
