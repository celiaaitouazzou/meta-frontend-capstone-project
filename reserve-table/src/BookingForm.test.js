import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './Pages/Reservation/BookingForm';

describe('BookingForm - Required Fields Validation and Visual Feedback', () => {



  describe('BookingForm - Required Fields Validation and Visual Feedback', () => {
    const mockFormData = {
      firstName: '',
      lastName: 'A.O.',
      date: '05-05-05',
      time: '6:00PM',
      guests: 2,
      occasion: '',
    };

    const renderForm = (formData = mockFormData) => {
      render(<BookingForm formData={formData} />);
    };

    test('If First name is empty, it should show required and NOT submit', () => {
      const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
      renderForm(mockFormData);
      fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

      // Check if the "Required" message for First Name is visible
      expect(screen.getByText('Required', { container: screen.getByLabelText('First Name').closest('.form-group') })).toBeVisible();

      // Check if the alert (representing submission) was NOT called
      expect(alertMock).not.toHaveBeenCalled();

      alertMock.mockRestore(); // Clean up the mock
    });
  });

  describe('BookingForm - Required Fields Validation and Visual Feedback', () => {
    const mockFormData = {
      firstName: 'Celia',
      lastName: '',
      date: '05-05-2005',
      time: '6:00PM',
      guests: 2,
      occasion: '',
    };

    const renderForm = (formData = mockFormData) => {
      render(<BookingForm formData={formData} />);
    };

    test('If Last name is empty, it should show required and NOT submit', () => {
      const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
      renderForm(mockFormData);
      fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

      // Check if the "Required" message for First Name is visible
      expect(screen.getByText('Required', { container: screen.getByLabelText('Last Name').closest('.form-group') })).toBeVisible();

      // Check if the alert (representing submission) was NOT called
      expect(alertMock).not.toHaveBeenCalled();

      alertMock.mockRestore(); // Clean up the mock
    });
  });

  describe('BookingForm - Required Fields Validation and Visual Feedback', () => {
    const mockFormData = {
      firstName: 'Celia',
      lastName: 'A.O.',
      date: '',
      time: '6:00PM',
      guests: 2,
      occasion: '',
    };

    const renderForm = (formData = mockFormData) => {
      render(<BookingForm formData={formData} />);
    };

    test('If Last name is empty, it should show required and NOT submit', () => {
      const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
      renderForm(mockFormData);
      fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

      // Check if the "Required" message for First Name is visible
      expect(screen.getByText('Required', { container: screen.getByLabelText('Date').closest('.form-group') })).toBeVisible();

      // Check if the alert (representing submission) was NOT called
      expect(alertMock).not.toHaveBeenCalled();

      alertMock.mockRestore(); // Clean up the mock
    });
  });

  describe('BookingForm - Required Fields Validation and Visual Feedback', () => {
    const mockFormData = {
      firstName: 'Celia',
      lastName: 'A.O.',
      date: '09-05-2005',
      time: '',
      guests: 2,
      occasion: '',
    };

    const renderForm = (formData = mockFormData) => {
      render(<BookingForm formData={formData} />);
    };

    test('If Last name is empty, it should show required and NOT submit', () => {
      const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
      renderForm(mockFormData);
      fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

      // Check if the "Required" message for First Name is visible
      expect(screen.getByText('Required', { container: screen.getByLabelText('Time').closest('.form-group') })).toBeVisible();

      // Check if the alert (representing submission) was NOT called
      expect(alertMock).not.toHaveBeenCalled();

      alertMock.mockRestore(); // Clean up the mock
    });
  });


  describe('BookingForm - Multiple Empty Required Fields', () => {
    const mockFormData = {
      firstName: '',
      lastName: '',
      date: '09-05-2005',
      time: '8:00PM',
      guests: 2,
      occasion: '',
    };

    const renderForm = (formData = mockFormData) => {
      render(<BookingForm formData={formData} />);
    };

    test('If Last name is empty, it should show required and NOT submit', () => {
      const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
      renderForm(mockFormData);
      fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
      expect(screen.getAllByText('Required').length).toBeEqual(2);

      // Check if the alert (representing submission) was NOT called
      expect(alertMock).not.toHaveBeenCalled();

      alertMock.mockRestore(); // Clean up the mock
    });
  });

});