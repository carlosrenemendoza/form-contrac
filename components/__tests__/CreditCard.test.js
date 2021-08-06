import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CreditCard from '../Creditcard';

describe('<CreditCard />', () => {
  it('Should rendered correctly', () => {
    const component = shallow(<CreditCard />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
