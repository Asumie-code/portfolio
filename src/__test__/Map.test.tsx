import { render, screen } from '@testing-library/react';
import Map from '../component/Map';


it('Should render Map', () => {
  render(<Map />);
  const component = screen.getByTestId('google-map')

  expect(component).toBeDefined()
  expect(component).toBeInTheDocument()
  expect(component).toBeVisible()
});
