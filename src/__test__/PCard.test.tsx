import { render, screen } from '@testing-library/react';
import PCard from '../component/PCard';


it('Should render PCard', () => {
  render(<PCard mainImage='' imgs={[{original: ''}]} />);
  const component = screen.getByTestId('pcard');
  
  expect(component).toBeDefined()
   expect(component).toBeDefined()
   expect(component).toBeInTheDocument()

});
