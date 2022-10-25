import { render, screen } from '@testing-library/react';
import AnimatedLetter from '../component/AnimatedLetter';


it('Should render AnimatedLetter', () => {
  render(<AnimatedLetter />);
  const component = screen.getByTestId('animated-typography')

  expect(component).toBeDefined()
  expect(component).toBeInTheDocument()
  expect(component).toBeVisible()
});
