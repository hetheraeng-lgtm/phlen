import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { TONES } from './components/ToneSwitcher';
import { FAQS } from './components/Faq';

test('renders the hero and both products', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/say something good/i);
  expect(screen.getByRole('heading', { name: 'LinkedIn Chuckles' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Article Studio' })).toBeInTheDocument();
});

test('tone switcher swaps the suggested comment', () => {
  render(<App />);
  const contrarian = TONES.find((t) => t.id === 'contrarian')!;
  const button = screen.getByRole('button', { name: contrarian.label });
  expect(button).toHaveAttribute('aria-pressed', 'false');
  fireEvent.click(button);
  expect(button).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByText(contrarian.text)).toBeInTheDocument();
});

test('FAQ opens one answer at a time', () => {
  render(<App />);
  const first = screen.getByRole('button', { name: FAQS[0].q });
  const second = screen.getByRole('button', { name: FAQS[1].q });
  expect(first).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(second);
  expect(second).toHaveAttribute('aria-expanded', 'true');
  expect(first).toHaveAttribute('aria-expanded', 'false');
});

test('waitlist rejects a bad email and accepts a good one', async () => {
  const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
  render(<App />);
  const input = screen.getByLabelText(/email for the article studio waitlist/i);
  const submit = screen.getByRole('button', { name: /join waitlist/i });

  fireEvent.change(input, { target: { value: 'not-an-email' } });
  fireEvent.click(submit);
  expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i);

  fireEvent.change(input, { target: { value: 'ada@example.com' } });
  fireEvent.click(submit);
  await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent(/on the list/i));
  warn.mockRestore();
});
