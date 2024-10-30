import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '@/app/login/page';

jest.mock('@/app/components/Input', () => {
  return function MockInput(props: { placeholder: string; inputImage: string; type: string }) {
    return <input placeholder={props.placeholder} type={props.type} />;
  };
});

jest.mock('@/app/components/PasswordInput', () => {
  return function MockPasswordInput(props: { onPasswordChange?: (password: string) => void }) {
    return <input type="password" onChange={(e) => props.onPasswordChange && props.onPasswordChange(e.target.value)} />;
  };
});

jest.mock('@/app/components/Oauth', () => {
  return function MockOauth(props: { oauthImage: string; oauth: string }) {
    return <div>{props.oauth}</div>;
  };
});

describe('Login Component', () => {
  beforeEach(() => {
    render(<Login />);
  });

  it('renders the Login component correctly', () => {
    expect(screen.getAllByText(/Log In/i));
    expect(screen.getByText(/Enter your credentials to access your account/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter Email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Log into Account/i })).toBeInTheDocument();
  });

  it('toggles remember me checkbox', () => {
    const checkbox = screen.getByRole('checkbox', { name: /Remember Me/i });

    // Initially, the checkbox should be unchecked
    expect(checkbox).not.toBeChecked();

    // Click to check the checkbox
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    // Click again to uncheck the checkbox
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('renders the Oauth components', () => {
    expect(screen.getByText(/google/i)).toBeInTheDocument();
    expect(screen.getByText(/twitter/i)).toBeInTheDocument();
  });
});
