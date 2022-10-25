import { render, screen } from '@testing-library/react';
import Chart from '../component/Chart';


it('Should render Chart', () => {
  render(<Chart value={75} />);
  const component = screen.getByTestId('chart')

  expect(component).toBeDefined()
  expect(component).toBeInTheDocument()
  expect(component).toBeVisible()
});
