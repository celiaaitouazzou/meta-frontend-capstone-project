import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './Pages/Reservation/BookingForm';

describe('BookingForm - Required Fields Validation', () => {
  const renderForm = (formData) => {
    render(<BookingForm formData={formData} />);
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    return alertMock;
  };

  afterEach(() => {
    jest.restoreAllMocks(); // Clean up all mocks after each test
  });

  test('If First name is empty, it should show required and NOT submit', () => {
    const mockFormData = { ...initialFormData, firstName: '' };
    const alertMock = renderForm(mockFormData);
    expect(screen.getByText('Required', { container: screen.getByLabelText('First Name').parentElement })).toBeVisible();
    expect(alertMock).not.toHaveBeenCalled();
  });

  test('If Last name is empty, it should show required and NOT submit', () => {
    const mockFormData = { ...initialFormData, lastName: '' };
    const alertMock = renderForm(mockFormData);
    expect(screen.getByText('Required', { container: screen.getByLabelText('Last Name').parentElement })).toBeVisible();
    expect(alertMock).not.toHaveBeenCalled();
  });

  test('If Date is empty, it should show required and NOT submit', () => {
    const mockFormData = { ...initialFormData, date: '' };
    const alertMock = renderForm(mockFormData);
    expect(screen.getByText('Required', { container: screen.getByLabelText('Date').parentElement })).toBeVisible();
    expect(alertMock).not.toHaveBeenCalled();
  });

  test('If Time is empty, it should show required and NOT submit', () => {
    const mockFormData = { ...initialFormData, time: '' };
    const alertMock = renderForm(mockFormData);
    expect(screen.getByText('Required', { container: screen.getByLabelText('Time').parentElement })).toBeVisible();
    expect(alertMock).not.toHaveBeenCalled();
  });
});

describe('BookingForm - Multiple Empty Required Fields', () => {
  const renderForm = (formData) => {
    render(<BookingForm formData={formData} />);
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    return alertMock;
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should show required errors and not call alert on empty first and last name', () => {
    const mockFormData = { ...initialFormData, firstName: '', lastName: '' };
    const alertMock = renderForm(mockFormData);
    expect(screen.getByText('Required', { container: screen.getByLabelText('First Name').parentElement })).toBeVisible();
    expect(screen.getByText('Required', { container: screen.getByLabelText('Last Name').parentElement })).toBeVisible();
    expect(alertMock).not.toHaveBeenCalled();
  });

  test('should show required errors and not call alert on empty first name and date', () => {
    const mockFormData = { ...initialFormData, firstName: '', date: '' };
    const alertMock = renderForm(mockFormData);
    expect(screen.getByText('Required', { container: screen.getByLabelText('First Name').parentElement })).toBeVisible();
    expect(screen.getByText('Required', { container: screen.getByLabelText('Date').parentElement })).toBeVisible();
    expect(alertMock).not.toHaveBeenCalled();
  });

  test('should show required errors and not call alert on empty last name and time', () => {
    const mockFormData = { ...initialFormData, lastName: '', time: '' };
    const alertMock = renderForm(mockFormData);
    expect(screen.getByText('Required', { container: screen.getByLabelText('Last Name').parentElement })).toBeVisible();
    expect(screen.getByText('Required', { container: screen.getByLabelText('Time').parentElement })).toBeVisible();
    expect(alertMock).not.toHaveBeenCalled();
  });
});
