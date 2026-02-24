import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '@/features/contact-form/ContactForm';

describe('ContactForm', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders all form fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Company')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    render(<ContactForm />);
    expect(
      screen.getByRole('button', { name: 'Send Message' }),
    ).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
    });
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  it('shows validation error for invalid email', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText('Email'), 'not-an-email');
    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    await waitFor(() => {
      expect(
        screen.getByText('Please enter a valid email address'),
      ).toBeInTheDocument();
    });
  });

  it('shows validation error for short name', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText('Name'), 'A');
    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    await waitFor(() => {
      expect(
        screen.getByText('Name must be at least 2 characters'),
      ).toBeInTheDocument();
    });
  });

  it('shows validation error for short message', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText('Message'), 'Hi');
    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    await waitFor(() => {
      expect(
        screen.getByText('Message must be at least 10 characters'),
      ).toBeInTheDocument();
    });
  });

  it('submits the form successfully with valid data', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({ success: true, message: 'Message received.' }),
    });

    render(<ContactForm />);

    await user.type(screen.getByLabelText('Name'), 'Jane Smith');
    await user.type(screen.getByLabelText('Email'), 'jane@example.com');
    await user.type(
      screen.getByLabelText('Message'),
      'Hello, I would like to discuss a project.',
    );
    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    await waitFor(() => {
      expect(
        screen.getByText(/message sent successfully/i),
      ).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/contact',
      expect.objectContaining({ method: 'POST' }),
    );
  });

  it('shows error state when submission fails', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn().mockResolvedValue({ ok: false });

    render(<ContactForm />);

    await user.type(screen.getByLabelText('Name'), 'Jane Smith');
    await user.type(screen.getByLabelText('Email'), 'jane@example.com');
    await user.type(
      screen.getByLabelText('Message'),
      'Hello, I would like to discuss a project.',
    );
    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });

  it('disables the button during submission', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn().mockReturnValue(new Promise(() => {}));

    render(<ContactForm />);

    await user.type(screen.getByLabelText('Name'), 'Jane Smith');
    await user.type(screen.getByLabelText('Email'), 'jane@example.com');
    await user.type(
      screen.getByLabelText('Message'),
      'Hello, I would like to discuss a project.',
    );
    await user.click(screen.getByRole('button', { name: 'Send Message' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Sending...' })).toBeDisabled();
    });
  });
});
