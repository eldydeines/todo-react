import { render } from '@testing-library/react';
import App from './App';

// smoke test
it("App renders without crashing", function () {
  render(<App />);
})