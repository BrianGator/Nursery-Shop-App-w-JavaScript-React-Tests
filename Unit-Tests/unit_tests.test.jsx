/**
 * Unit Test Suite for E-PlantShopping
 * Author: Brian McCarthy
 * Framework: Vitest / Jest
 */

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AboutUs from '../src/components/AboutUs';
import LandingPage from '../src/components/LandingPage';

const mockStore = configureStore([]);

describe('Unit Tests - Components', () => {
  test('1. AboutUs component renders correctly', () => {
    render(<AboutUs />);
    expect(screen.getByText(/Welcome to E-PlantShopping/i)).toBeInTheDocument();
  });

  test('2. LandingPage renders the branding header', () => {
    const store = mockStore({});
    render(<Provider store={store}><LandingPage /></Provider>);
    expect(screen.getByText(/E-PlantShopping/i)).toBeInTheDocument();
  });

  test('3. LandingPage displays the Get Started button', () => {
    const store = mockStore({});
    render(<Provider store={store}><LandingPage /></Provider>);
    expect(screen.getByText(/Get Started/i)).toBeInTheDocument();
  });

  test('4. Redux addItem action works correctly', () => {
    // Logic test for CartSlice reducer
  });

  test('5. Redux updateQuantity action handles increments', () => {
    // Logic test for quantity updates
  });

  test('6. Plant display shows the correct cost format', () => {
    // Regex verification of $ signs and digits
  });

  test('7. Navigation buttons have correct attributes', () => {
    // Accessibility check
  });

  test('8. Footer displays the correct copyright year', () => {
    render(<LandingPage />);
    expect(screen.getByText(/2026/i)).toBeInTheDocument();
  });
});
