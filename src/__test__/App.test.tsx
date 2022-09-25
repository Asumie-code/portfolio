import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const Nav = screen.getAllByText(/About/i);
  
    for(let value of Nav) {
      expect(value).toBeInTheDocument()
    }
});
