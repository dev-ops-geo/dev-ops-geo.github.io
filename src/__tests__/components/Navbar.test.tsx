import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Navbar from '../../components/Navbar';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <MantineProvider>
      <BrowserRouter>{ui}</BrowserRouter>
    </MantineProvider>
  );
};

describe('Navbar Component', () => {
  test('renders the correct navigation links', () => {
    // Render the Navbar inside a BrowserRouter
    const { getByText } = renderWithProviders(<Navbar />);

    // Check if the links are present in the document
    const homeButton = getByText(/Home/i);
    const aboutButton = getByText(/About/i);

    // Assert that the links exist
    expect(homeButton).toBeInTheDocument();
    expect(aboutButton).toBeInTheDocument();
  });

  test('buttons are wrapped with links having correct href attributes', () => {
    const { getByText } = renderWithProviders(<Navbar />);
    expect(getByText(/Home/i).closest('a')).toHaveAttribute('href', '/');
    expect(getByText(/About/i).closest('a')).toHaveAttribute('href', '/about');
  });
});