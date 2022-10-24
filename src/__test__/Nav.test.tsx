import { render, screen } from '@testing-library/react';
import Nav from '../component/Nav';
import {HashRouter} from 'react-router-dom'

it('Should render Nav', () => {
  render(<HashRouter><Nav /></HashRouter>);
  const component = screen.getAllByText(/About/i);
  
    for(let value of component) {
      expect(value).toBeInTheDocument()
    }
});