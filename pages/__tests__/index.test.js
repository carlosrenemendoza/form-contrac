import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Main from '../index';

describe('<Main />', () => {
  it('Should rendered correctly', () => {
    const component = shallow(<Main />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
