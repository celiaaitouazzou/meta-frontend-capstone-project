import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './Pages/Reservation/BookingForm';

describe('BookingForm - Required Fields and Submission Prevention', () => {
  const mockFormData = {
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    guests: 2,
    occasion: '',
  };

  const renderForm = (formData = mockFormData) => {
    render(<BookingForm formData={formData} />);
  };

  test('displays "Required" error for empty First Name and disables submit', () => {
    renderForm();
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(screen.getByText('Required')).toBeVisible();
    expect(screen.getByLabelText('First Name').closest('.form-group')).toContainElement(screen.getByText('Required'));
    expect(screen.getByRole('button', { name: /Submit/i })).toBeDisabled();
  });

  test('displays "Required" error for empty Last Name and disables submit', () => {
    renderForm();
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(screen.getByText('Required')).toBeVisible();
    expect(screen.getByLabelText('Last Name').closest('.form-group')).toContainElement(screen.getByText('Required'));
    expect(screen.getByRole('button', { name: /Submit/i })).toBeDisabled();
  });

  test('displays "Required" error for empty Date and disables submit', () => {
    renderForm();
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(screen.getByText('Required')).toBeVisible();
    expect(screen.getByLabelText('Date').closest('.form-group')).toContainElement(screen.getByText('Required'));
    expect(screen.getByRole('button', { name: /Submit/i })).toBeDisabled();
  });

  test('displays "Required" error for empty Time and disables submit', () => {
    renderForm();
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(screen.getByText('Required')).toBeVisible();
    expect(screen.getByLabelText('Time').closest('.form-group')).toContainElement(screen.getByText('Required'));
    expect(screen.getByRole('button', { name: /Submit/i })).toBeDisabled();
  });

  test('enables submit button and hides "Required" errors when all required fields are filled', () => {
    renderForm({
      firstName: 'John',
      lastName: 'Doe',
      date: '2025-05-08',
      time: '12:00',
      guests: 2,
      occasion: '',
    });

    fireEvent.focus(screen.getByLabelText('First Name'));
    fireEvent.blur(screen.getByLabelText('First Name'));
    fireEvent.focus(screen.getByLabelText('Last Name'));
    fireEvent.blur(screen.getByLabelText('Last Name'));
    fireEvent.focus(screen.getByLabelText('Date'));
    fireEvent.blur(screen.getByLabelText('Date'));
    fireEvent.focus(screen.getByLabelText('Time'));
    fireEvent.blur(screen.getByLabelText('Time'));

    expect(screen.queryByText('Required', { container: screen.getByLabelText('First Name').closest('.form-group') })).toBeNull();
    expect(screen.queryByText('Required', { container: screen.getByLabelText('Last Name').closest('.form-group') })).toBeNull();
    expect(screen.queryByText('Required', { container: screen.getByLabelText('Date').closest('.form-group') })).toBeNull();
    expect(screen.queryByText('Required', { container: screen.getByLabelText('Time').closest('.form-group') })).toBeNull();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeEnabled();
  });

  test('does not call handleSubmit if required fields are empty', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    renderForm();
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(alertMock).not.toHaveBeenCalled();
    alertMock.mockRestore();
  });

  test('calls handleSubmit if all required fields are filled', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const validFormData = {
      firstName: 'John',
      lastName: 'Doe',
      date: '2025-05-08',
      time: '12:00',
      guests: 2,
      occasion: '',
    };
    renderForm(validFormData);

    fireEvent.focus(screen.getByLabelText('First Name'));
    fireEvent.blur(screen.getByLabelText('First Name'));
    fireEvent.focus(screen.getByLabelText('Last Name'));
    fireEvent.blur(screen.getByLabelText('Last Name'));
    fireEvent.focus(screen.getByLabelText('Date'));
    fireEvent.blur(screen.getByLabelText('Date'));
    fireEvent.focus(screen.getByLabelText('Time'));
    fireEvent.blur(screen.getByLabelText('Time'));

    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(alertMock).toHaveBeenCalledWith(JSON.stringify(validFormData, null, 2));
    alertMock.mockRestore();
  });
});