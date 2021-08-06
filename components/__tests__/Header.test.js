import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../Header';

describe('<Main />', () => {
  it('Should rendered correctly', () => {
    const component = shallow(<Header />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
