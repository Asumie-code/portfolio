import { render, screen } from '@testing-library/react';
import Form from '../component/Form';


it('Should render Form', () => {
  render(<Form />);
  const component = screen.getByTestId('contact-form')

  expect(component).toBeDefined()
  expect(component).toBeInTheDocument()
  expect(component).toBeVisible()
  
});
