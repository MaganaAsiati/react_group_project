import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/configureStore';
import Profile from '../components/Profile/Profile';

describe('Profile tests', () => {
  it('render test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
