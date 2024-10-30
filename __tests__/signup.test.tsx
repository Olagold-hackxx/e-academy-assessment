import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Signup from '@/app/signup/page';
import { FeedbackType } from "@/app/components/Feedback";

// Mocking dependencies with explicit props types
jest.mock('@/app/components/Input', () => {
  return function MockInput(props: { placeholder: string; type: string }) {
    return <input placeholder={props.placeholder} type={props.type} />;
  };
});

jest.mock('@/app/components/PasswordInput', () => {
  return function MockPasswordInput(props: { onPasswordChange: (password: string) => void }) {
    return <input type="password" onChange={(e) => props.onPasswordChange(e.target.value)} />;
  };
});

jest.mock('@/app/components/Oauth', () => {
  return function MockOauth(props: { oauthImage: string; oauth: string }) {
    return <div>{props.oauth}</div>;
  };
});

jest.mock('@/app/components/Feedback', () => {
  return function MockFeedback(props: { feedback: FeedbackType }) {
    return <div>{props.feedback}</div>;
  };
});

describe('Signup Component', () => {
  beforeEach(() => {
    render(<Signup />);
  });

  it('renders the Signup component correctly', () => {
    expect(screen.getByText(/E-Academy/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Create an account/i))
    expect(screen.getByPlaceholderText(/Enter Email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Create an account/i })).toBeInTheDocument();
  });

  it('disables the submit button when isDisabled is true', () => {
    const button = screen.getByRole('button', { name: /Create an account/i });

    // Initially, the button should be enabled
    expect(button).not.toBeDisabled();

    // Simulate clicking the button to toggle isDisabled
    fireEvent.click(button);

    // Now the button should be disabled
    expect(button).toBeDisabled();
  });

  it('shows loading image when button is disabled', () => {
    const button = screen.getByRole('button', { name: /Create an account/i });

    // Click to disable the button
    fireEvent.click(button);

    // The loading image should appear
    expect(screen.getByAltText(/loading/i)).toBeInTheDocument();
  });

  it('renders the Oauth components', () => {
    expect(screen.getByText(/google/i)).toBeInTheDocument();
    expect(screen.getByText(/twitter/i)).toBeInTheDocument();
  });
});
