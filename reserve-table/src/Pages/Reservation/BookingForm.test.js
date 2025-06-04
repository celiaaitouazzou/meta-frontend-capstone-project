import { render, screen, fireEvent, act } from '@testing-library/react';
import BookingForm from './BookingForm'; // Adjust the import path if necessary
import { waitFor } from '@testing-library/react';

describe("If one required field is empty, the form does not submit and shows 'required'", () => {
  test("first Name is empty", async () => {
    const firstNameEmpty = {
      firstName: '',
      lastName: 'Ait',
      date: '03-03-2003',
      time: '09:09PM',
      guests: '1',
      occasion: 'Occasion'
    };

    // Render the form
    render(<BookingForm formData={firstNameEmpty} />);

    // Find the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Use act to wrap the click event
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Assert that the "required" error message appears
    const errorMessage = screen.getByText(/required/i);
    expect(errorMessage).toBeInTheDocument();

    // Ensure the form does not submit
    expect(screen.queryByText(/form submitted successfully/i)).not.toBeInTheDocument();
  });

  test("last Name is empty", async () => {
    const lastNameEmpty = {
      firstName: 'John',
      lastName: '',
      date: '03-03-2003',
      time: '09:09PM',
      guests: '1',
      occasion: 'Occasion'
    };

    // Render the form
    render(<BookingForm formData={lastNameEmpty} />);

    // Find the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Use act to wrap the click event
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Assert that the "required" error message appears for the lastName field
    const errorMessage = screen.getByText(/required/i);
    expect(errorMessage).toBeInTheDocument();

    // Ensure the form does not submit
    expect(screen.queryByText(/form submitted successfully/i)).not.toBeInTheDocument();
  });

    test("date is empty", async () => {
    const dateEmpty = {
      firstName: 'John',
      lastName: 'Ait',
      date: '',
      time: '09:09PM',
      guests: '1',
      occasion: 'Occasion'
    };

    // Render the form
    render(<BookingForm formData={dateEmpty} />);

    // Find the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Use act to wrap the click event
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Assert that the "required" error message appears for the date field
    const errorMessage = screen.getByText(/required/i);
    expect(errorMessage).toBeInTheDocument();

    // Ensure the form does not submit
    expect(screen.queryByText(/form submitted successfully/i)).not.toBeInTheDocument();
  });

  test("time is empty", async () => {
    const timeEmpty = {
      firstName: 'John',
      lastName: 'Ait',
      date: '03-03-2003',
      time: '',
      guests: '1',
      occasion: 'Occasion'
    };

    // Render the form
    render(<BookingForm formData={timeEmpty} />);

    // Find the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Use act to wrap the click event
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Assert that the "required" error message appears for the time field
    const errorMessage = screen.getByText(/required/i);
    expect(errorMessage).toBeInTheDocument();

    // Ensure the form does not submit
    expect(screen.queryByText(/form submitted successfully/i)).not.toBeInTheDocument();
  });
});

describe("if two fields are empty, i want two required appearing in the respective field and the form not submitting",()=>{
  test("first and last name are empty and their respective divs show 'required'", async () => {
    const twoFieldsEmpty = {
      firstName: '',
      lastName: '',
      date: '03-03-2003',
      time: '09:09PM',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={twoFieldsEmpty} />);

    // Find the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Trigger the submit button click
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Query the first div for the first name field
    const firstNameDiv = screen.getByLabelText(/First Name/i).closest('.mb-3');
    expect(firstNameDiv).toHaveTextContent(/Required/i);

    // Query the second div for the last name field
    const lastNameDiv = screen.getByLabelText(/Last Name/i).closest('.mb-3');
    expect(lastNameDiv).toHaveTextContent(/Required/i);

    // Ensure the form does not submit
    expect(screen.queryByText(/form submitted successfully/i)).not.toBeInTheDocument();
  });

  test("first name and date are empty and their respective divs show 'required'", async () => {
    const twoFieldsEmpty = {
      firstName: '',
      lastName: 'Ait',
      date: '',
      time: '09:09PM',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={twoFieldsEmpty} />);

    // Find the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Trigger the submit button click
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Query the first div for the first name field
    const firstNameDiv = screen.getByLabelText(/First Name/i).closest('.mb-3');
    expect(firstNameDiv).toHaveTextContent(/Required/i);

    // Query the div for the date field
    const dateDiv = screen.getByLabelText(/Date/i).closest('.mb-3');
    expect(dateDiv).toHaveTextContent(/Required/i);

    // Ensure the form does not submit
    expect(screen.queryByText(/form submitted successfully/i)).not.toBeInTheDocument();
  });

  test("first name and time are empty and their respective divs show 'required'", async () => {
    const twoFieldsEmpty = {
      firstName: '',
      lastName: 'Ait',
      date: '03-03-2003',
      time: '',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={twoFieldsEmpty} />);

    // Find the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Trigger the submit button click
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Query the first div for the first name field
    const firstNameDiv = screen.getByLabelText(/First Name/i).closest('.mb-3');
    expect(firstNameDiv).toHaveTextContent(/Required/i);

    // Query the div for the time field
    const timeDiv = screen.getByLabelText(/Time/i).closest('.mb-3');
    expect(timeDiv).toHaveTextContent(/Required/i);

    // Ensure the form does not submit
    expect(screen.queryByText(/form submitted successfully/i)).not.toBeInTheDocument();
  });

  test("last name and date are empty and their respective divs show 'required'", async () => {
    const twoFieldsEmpty = {
      firstName: 'John',
      lastName: '',
      date: '',
      time: '09:09PM',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={twoFieldsEmpty} />);

    // Find the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Trigger the submit button click
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Query the div for the last name field
    const lastNameDiv = screen.getByLabelText(/Last Name/i).closest('.mb-3');
    expect(lastNameDiv).toHaveTextContent(/Required/i);

    // Query the div for the date field
    const dateDiv = screen.getByLabelText(/Date/i).closest('.mb-3');
    expect(dateDiv).toHaveTextContent(/Required/i);

    // Ensure the form does not submit
    expect(screen.queryByText(/form submitted successfully/i)).not.toBeInTheDocument();
  });

  test("last name and time are empty and their respective divs show 'required'", async () => {
    const twoFieldsEmpty = {
      firstName: 'John',
      lastName: '',
      date: '03-03-2003',
      time: '',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={twoFieldsEmpty} />);

    // Find the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Trigger the submit button click
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Query the div for the last name field
    const lastNameDiv = screen.getByLabelText(/Last Name/i).closest('.mb-3');
    expect(lastNameDiv).toHaveTextContent(/Required/i);

    // Query the div for the time field
    const timeDiv = screen.getByLabelText(/Time/i).closest('.mb-3');
    expect(timeDiv).toHaveTextContent(/Required/i);

    // Ensure the form does not submit
    expect(screen.queryByText(/form submitted successfully/i)).not.toBeInTheDocument();
  });

  test("date and time are empty and their respective divs show 'required'", async () => {
    const twoFieldsEmpty = {
      firstName: 'John',
      lastName: 'Ait',
      date: '',
      time: '',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={twoFieldsEmpty} />);

    // Find the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Trigger the submit button click
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Query the div for the date field
    const dateDiv = screen.getByLabelText(/Date/i).closest('.mb-3');
    expect(dateDiv).toHaveTextContent(/Required/i);

    // Query the div for the time field
    const timeDiv = screen.getByLabelText(/Time/i).closest('.mb-3');
    expect(timeDiv).toHaveTextContent(/Required/i);

    // Ensure the form does not submit
    expect(screen.queryByText(/form submitted successfully/i)).not.toBeInTheDocument();
  });
});

describe("Multiple fields are empty and show 'required' error messages after submission", () => {
  test("first name, last name, and date are empty and show 'required'", async () => {
    const formDataEmpty = {
      firstName: '',
      lastName: '',
      date: '',
      time: '09:09PM',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the fields
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const dateInput = screen.getByLabelText(/Date/i);

    fireEvent.blur(firstNameInput);
    fireEvent.blur(lastNameInput);
    fireEvent.blur(dateInput);

    // Simulate clicking the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Check touched state and error messages
    const firstNameDiv = firstNameInput.closest('.mb-3');
    const lastNameDiv = lastNameInput.closest('.mb-3');
    const dateDiv = dateInput.closest('.mb-3');
    expect(firstNameDiv).toHaveTextContent(/Required/i);
    expect(lastNameDiv).toHaveTextContent(/Required/i);
    expect(dateDiv).toHaveTextContent(/Required/i);
    expect(firstNameInput).toHaveClass('is-invalid');
    expect(lastNameInput).toHaveClass('is-invalid');
    expect(dateInput).toHaveClass('is-invalid');
  });

  test("first name, last name, and time are empty and show 'required'", async () => {
    const formDataEmpty = {
      firstName: '',
      lastName: '',
      date: '03-03-2003',
      time: '',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the fields
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const timeInput = screen.getByLabelText(/Time/i);

    fireEvent.blur(firstNameInput);
    fireEvent.blur(lastNameInput);
    fireEvent.blur(timeInput);

    // Simulate clicking the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Check touched state and error messages
    const firstNameDiv = firstNameInput.closest('.mb-3');
    const lastNameDiv = lastNameInput.closest('.mb-3');
    const timeDiv = timeInput.closest('.mb-3');
    expect(firstNameDiv).toHaveTextContent(/Required/i);
    expect(lastNameDiv).toHaveTextContent(/Required/i);
    expect(timeDiv).toHaveTextContent(/Required/i);
    expect(firstNameInput).toHaveClass('is-invalid');
    expect(lastNameInput).toHaveClass('is-invalid');
    expect(timeInput).toHaveClass('is-invalid');
  });

  test("last name, date, and time are empty and show 'required'", async () => {
    const formDataEmpty = {
      firstName: 'John',
      lastName: '',
      date: '',
      time: '',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the fields
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const dateInput = screen.getByLabelText(/Date/i);
    const timeInput = screen.getByLabelText(/Time/i);

    fireEvent.blur(lastNameInput);
    fireEvent.blur(dateInput);
    fireEvent.blur(timeInput);

    // Simulate clicking the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Check touched state and error messages
    const lastNameDiv = lastNameInput.closest('.mb-3');
    const dateDiv = dateInput.closest('.mb-3');
    const timeDiv = timeInput.closest('.mb-3');
    expect(lastNameDiv).toHaveTextContent(/Required/i);
    expect(dateDiv).toHaveTextContent(/Required/i);
    expect(timeDiv).toHaveTextContent(/Required/i);
    expect(lastNameInput).toHaveClass('is-invalid');
    expect(dateInput).toHaveClass('is-invalid');
    expect(timeInput).toHaveClass('is-invalid');
  });
});


describe("Touched fields show 'required' error messages before submission", () => {
  test("first name is touched and shows 'required' before submission", async () => {
    const formDataEmpty = {
      firstName: '',
      lastName: 'Ait',
      date: '03-03-2003',
      time: '09:09PM',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the field
    const firstNameInput = screen.getByLabelText(/First Name/i);
    fireEvent.blur(firstNameInput); // Simulates the field losing focus

    // Check touched state and error message immediately
    await waitFor(() => {
      const firstNameDiv = firstNameInput.closest('.mb-3');
      expect(firstNameDiv).toHaveTextContent(/Required/i);
      expect(firstNameInput).toHaveClass('is-invalid');
    });
  });

  test("last name is touched and shows 'required' before submission", async () => {
    const formDataEmpty = {
      firstName: 'John',
      lastName: '',
      date: '03-03-2003',
      time: '09:09PM',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the field
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    fireEvent.blur(lastNameInput); // Simulates the field losing focus

    // Check touched state and error message immediately
    await waitFor(() => {
      const lastNameDiv = lastNameInput.closest('.mb-3');
      expect(lastNameDiv).toHaveTextContent(/Required/i);
      expect(lastNameInput).toHaveClass('is-invalid');
    });
  });

  test("date is touched and shows 'required' before submission", async () => {
    const formDataEmpty = {
      firstName: 'John',
      lastName: 'Ait',
      date: '',
      time: '09:09PM',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the field
    const dateInput = screen.getByLabelText(/Date/i);
    fireEvent.blur(dateInput); // Simulates the field losing focus

    // Check touched state and error message immediately
    await waitFor(() => {
      const dateDiv = dateInput.closest('.mb-3');
      expect(dateDiv).toHaveTextContent(/Required/i);
      expect(dateInput).toHaveClass('is-invalid');
    });
  });

  test("time is touched and shows 'required' before submission", async () => {
    const formDataEmpty = {
      firstName: 'John',
      lastName: 'Ait',
      date: '03-03-2003',
      time: '',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the field
    const timeInput = screen.getByLabelText(/Time/i);
    fireEvent.blur(timeInput); // Simulates the field losing focus

    // Check touched state and error message immediately
    await waitFor(() => {
      const timeDiv = timeInput.closest('.mb-3');
      expect(timeDiv).toHaveTextContent(/Required/i);
      expect(timeInput).toHaveClass('is-invalid');
    });
  });
});

describe("Pairs of touched fields show 'required' error messages before submission", () => {
  test("first name and last name are touched and show 'required' before submission", async () => {
    const formDataEmpty = {
      firstName: '',
      lastName: '',
      date: '03-03-2003',
      time: '09:09PM',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the fields
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    fireEvent.blur(firstNameInput); // Simulates the field losing focus
    fireEvent.blur(lastNameInput); // Simulates the field losing focus

    // Check touched state and error messages immediately
    await waitFor(() => {
      const firstNameDiv = firstNameInput.closest('.mb-3');
      const lastNameDiv = lastNameInput.closest('.mb-3');
      expect(firstNameDiv).toHaveTextContent(/Required/i);
      expect(lastNameDiv).toHaveTextContent(/Required/i);
      expect(firstNameInput).toHaveClass('is-invalid');
      expect(lastNameInput).toHaveClass('is-invalid');
    });
  });

  test("first name and date are touched and show 'required' before submission", async () => {
    const formDataEmpty = {
      firstName: '',
      lastName: 'Ait',
      date: '',
      time: '09:09PM',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the fields
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const dateInput = screen.getByLabelText(/Date/i);
    fireEvent.blur(firstNameInput); // Simulates the field losing focus
    fireEvent.blur(dateInput); // Simulates the field losing focus

    // Check touched state and error messages immediately
    await waitFor(() => {
      const firstNameDiv = firstNameInput.closest('.mb-3');
      const dateDiv = dateInput.closest('.mb-3');
      expect(firstNameDiv).toHaveTextContent(/Required/i);
      expect(dateDiv).toHaveTextContent(/Required/i);
      expect(firstNameInput).toHaveClass('is-invalid');
      expect(dateInput).toHaveClass('is-invalid');
    });
  });

  test("first name and time are touched and show 'required' before submission", async () => {
    const formDataEmpty = {
      firstName: '',
      lastName: 'Ait',
      date: '03-03-2003',
      time: '',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the fields
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const timeInput = screen.getByLabelText(/Time/i);
    fireEvent.blur(firstNameInput); // Simulates the field losing focus
    fireEvent.blur(timeInput); // Simulates the field losing focus

    // Check touched state and error messages immediately
    await waitFor(() => {
      const firstNameDiv = firstNameInput.closest('.mb-3');
      const timeDiv = timeInput.closest('.mb-3');
      expect(firstNameDiv).toHaveTextContent(/Required/i);
      expect(timeDiv).toHaveTextContent(/Required/i);
      expect(firstNameInput).toHaveClass('is-invalid');
      expect(timeInput).toHaveClass('is-invalid');
    });
  });

  test("last name and date are touched and show 'required' before submission", async () => {
    const formDataEmpty = {
      firstName: 'John',
      lastName: '',
      date: '',
      time: '09:09PM',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the fields
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const dateInput = screen.getByLabelText(/Date/i);
    fireEvent.blur(lastNameInput); // Simulates the field losing focus
    fireEvent.blur(dateInput); // Simulates the field losing focus

    // Check touched state and error messages immediately
    await waitFor(() => {
      const lastNameDiv = lastNameInput.closest('.mb-3');
      const dateDiv = dateInput.closest('.mb-3');
      expect(lastNameDiv).toHaveTextContent(/Required/i);
      expect(dateDiv).toHaveTextContent(/Required/i);
      expect(lastNameInput).toHaveClass('is-invalid');
      expect(dateInput).toHaveClass('is-invalid');
    });
  });

  test("last name and time are touched and show 'required' before submission", async () => {
    const formDataEmpty = {
      firstName: 'John',
      lastName: '',
      date: '03-03-2003',
      time: '',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the fields
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const timeInput = screen.getByLabelText(/Time/i);
    fireEvent.blur(lastNameInput); // Simulates the field losing focus
    fireEvent.blur(timeInput); // Simulates the field losing focus

    // Check touched state and error messages immediately
    await waitFor(() => {
      const lastNameDiv = lastNameInput.closest('.mb-3');
      const timeDiv = timeInput.closest('.mb-3');
      expect(lastNameDiv).toHaveTextContent(/Required/i);
      expect(timeDiv).toHaveTextContent(/Required/i);
      expect(lastNameInput).toHaveClass('is-invalid');
      expect(timeInput).toHaveClass('is-invalid');
    });
  });

  test("date and time are touched and show 'required' before submission", async () => {
    const formDataEmpty = {
      firstName: 'John',
      lastName: 'Ait',
      date: '',
      time: '',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the fields
    const dateInput = screen.getByLabelText(/Date/i);
    const timeInput = screen.getByLabelText(/Time/i);
    fireEvent.blur(dateInput); // Simulates the field losing focus
    fireEvent.blur(timeInput); // Simulates the field losing focus

    // Check touched state and error messages immediately
    await waitFor(() => {
      const dateDiv = dateInput.closest('.mb-3');
      const timeDiv = timeInput.closest('.mb-3');
      expect(dateDiv).toHaveTextContent(/Required/i);
      expect(timeDiv).toHaveTextContent(/Required/i);
      expect(dateInput).toHaveClass('is-invalid');
      expect(timeInput).toHaveClass('is-invalid');
    });
  });
});


describe("Groups of touched fields show 'required' error messages before submission", () => {
  test("first name, last name, and date are touched and show 'required' before submission", async () => {
    const formDataEmpty = {
      firstName: '',
      lastName: '',
      date: '',
      time: '09:09PM',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the fields
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const dateInput = screen.getByLabelText(/Date/i);
    fireEvent.blur(firstNameInput);
    fireEvent.blur(lastNameInput);
    fireEvent.blur(dateInput);

    // Check touched state and error messages immediately
    await waitFor(() => {
      const firstNameDiv = firstNameInput.closest('.mb-3');
      const lastNameDiv = lastNameInput.closest('.mb-3');
      const dateDiv = dateInput.closest('.mb-3');
      expect(firstNameDiv).toHaveTextContent(/Required/i);
      expect(lastNameDiv).toHaveTextContent(/Required/i);
      expect(dateDiv).toHaveTextContent(/Required/i);
      expect(firstNameInput).toHaveClass('is-invalid');
      expect(lastNameInput).toHaveClass('is-invalid');
      expect(dateInput).toHaveClass('is-invalid');
    });
  });

  test("first name, last name, and time are touched and show 'required' before submission", async () => {
    const formDataEmpty = {
      firstName: '',
      lastName: '',
      date: '03-03-2003',
      time: '',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the fields
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const timeInput = screen.getByLabelText(/Time/i);
    fireEvent.blur(firstNameInput);
    fireEvent.blur(lastNameInput);
    fireEvent.blur(timeInput);

    // Check touched state and error messages immediately
    await waitFor(() => {
      const firstNameDiv = firstNameInput.closest('.mb-3');
      const lastNameDiv = lastNameInput.closest('.mb-3');
      const timeDiv = timeInput.closest('.mb-3');
      expect(firstNameDiv).toHaveTextContent(/Required/i);
      expect(lastNameDiv).toHaveTextContent(/Required/i);
      expect(timeDiv).toHaveTextContent(/Required/i);
      expect(firstNameInput).toHaveClass('is-invalid');
      expect(lastNameInput).toHaveClass('is-invalid');
      expect(timeInput).toHaveClass('is-invalid');
    });
  });

  test("last name, date, and time are touched and show 'required' before submission", async () => {
    const formDataEmpty = {
      firstName: 'John',
      lastName: '',
      date: '',
      time: '',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the fields
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const dateInput = screen.getByLabelText(/Date/i);
    const timeInput = screen.getByLabelText(/Time/i);
    fireEvent.blur(lastNameInput);
    fireEvent.blur(dateInput);
    fireEvent.blur(timeInput);

    // Check touched state and error messages immediately
    await waitFor(() => {
      const lastNameDiv = lastNameInput.closest('.mb-3');
      const dateDiv = dateInput.closest('.mb-3');
      const timeDiv = timeInput.closest('.mb-3');
      expect(lastNameDiv).toHaveTextContent(/Required/i);
      expect(dateDiv).toHaveTextContent(/Required/i);
      expect(timeDiv).toHaveTextContent(/Required/i);
      expect(lastNameInput).toHaveClass('is-invalid');
      expect(dateInput).toHaveClass('is-invalid');
      expect(timeInput).toHaveClass('is-invalid');
    });
  });

  test("all four fields are touched and show 'required' before submission", async () => {
    const formDataEmpty = {
      firstName: '',
      lastName: '',
      date: '',
      time: '',
      guests: '1',
      occasion: 'Occasion',
    };

    // Render the form
    render(<BookingForm formData={formDataEmpty} />);

    // Simulate touching the fields
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const dateInput = screen.getByLabelText(/Date/i);
    const timeInput = screen.getByLabelText(/Time/i);
    fireEvent.blur(firstNameInput);
    fireEvent.blur(lastNameInput);
    fireEvent.blur(dateInput);
    fireEvent.blur(timeInput);

    // Check touched state and error messages immediately
    await waitFor(() => {
      const firstNameDiv = firstNameInput.closest('.mb-3');
      const lastNameDiv = lastNameInput.closest('.mb-3');
      const dateDiv = dateInput.closest('.mb-3');
      const timeDiv = timeInput.closest('.mb-3');
      expect(firstNameDiv).toHaveTextContent(/Required/i);
      expect(lastNameDiv).toHaveTextContent(/Required/i);
      expect(dateDiv).toHaveTextContent(/Required/i);
      expect(timeDiv).toHaveTextContent(/Required/i);
      expect(firstNameInput).toHaveClass('is-invalid');
      expect(lastNameInput).toHaveClass('is-invalid');
      expect(dateInput).toHaveClass('is-invalid');
      expect(timeInput).toHaveClass('is-invalid');
    });
  });
});

describe("Form does not submit when all mandatory fields are empty", () => {
  test("all 4 mandatory fields are empty and form does not submit", async () => {
    const formDataEmpty = {
      firstName: '',
      lastName: '',
      date: '',
      time: '',
      guests: '1',
      occasion: 'Occasion',
    };

    // Mock the onSubmit handler
    const handleSubmit = jest.fn();

    // Render the form
    render(<BookingForm formData={formDataEmpty} onSubmit={handleSubmit} />);

    // Simulate touching the fields
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const dateInput = screen.getByLabelText(/Date/i);
    const timeInput = screen.getByLabelText(/Time/i);

    fireEvent.blur(firstNameInput);
    fireEvent.blur(lastNameInput);
    fireEvent.blur(dateInput);
    fireEvent.blur(timeInput);

    // Simulate clicking the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    // Check that the form does not submit
    expect(handleSubmit).not.toHaveBeenCalled();

    // Check that all fields display the 'Required' error message
    await waitFor(() => {
      const firstNameDiv = firstNameInput.closest('.mb-3');
      const lastNameDiv = lastNameInput.closest('.mb-3');
      const dateDiv = dateInput.closest('.mb-3');
      const timeDiv = timeInput.closest('.mb-3');

      expect(firstNameDiv).toHaveTextContent(/Required/i);
      expect(lastNameDiv).toHaveTextContent(/Required/i);
      expect(dateDiv).toHaveTextContent(/Required/i);
      expect(timeDiv).toHaveTextContent(/Required/i);

      expect(firstNameInput).toHaveClass('is-invalid');
      expect(lastNameInput).toHaveClass('is-invalid');
      expect(dateInput).toHaveClass('is-invalid');
      expect(timeInput).toHaveClass('is-invalid');
    });
  });
});

describe("Form does not submit when all mandatory fields are empty", () => {
  test("Form does not submit and shows required errors", async () => {
    const handleSubmit = jest.fn();

    render(<BookingForm onSubmit={handleSubmit} />);

    // Blur all mandatory fields to trigger validation (including selects)
    fireEvent.blur(screen.getByLabelText(/First Name/i));
    fireEvent.blur(screen.getByLabelText(/Last Name/i));
    fireEvent.blur(screen.getByLabelText(/Date/i));
    fireEvent.blur(screen.getByLabelText(/Time/i));
    fireEvent.blur(screen.getByLabelText(/Guests/i));
    fireEvent.blur(screen.getByLabelText(/Occasion/i));

    // Attempt to submit
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Should NOT submit
    expect(handleSubmit).not.toHaveBeenCalled();

    // Should show "Required" for all fields
    await waitFor(() => {
      expect(screen.getAllByText(/Required/i).length).toBeGreaterThanOrEqual(4); // Adjust count as needed
    });
  });
});

describe("Form does not submit when all mandatory fields are empty", () => {
  test("Form does not submit and shows required errors", async () => {
    const handleSubmit = jest.fn();

    render(<BookingForm onSubmit={handleSubmit} />);

    // Blur all fields to trigger validation
    fireEvent.blur(screen.getByLabelText(/First Name/i));
    fireEvent.blur(screen.getByLabelText(/Last Name/i));
    fireEvent.blur(screen.getByLabelText(/Date/i));
    fireEvent.blur(screen.getByLabelText(/Time/i));
    fireEvent.blur(screen.getByLabelText(/Guests/i));
    fireEvent.blur(screen.getByLabelText(/Occasion/i));

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(handleSubmit).not.toHaveBeenCalled();

    // At least one Required message (adjust if you have custom messages)
    await waitFor(() => {
      expect(screen.getAllByText(/Required/i).length).toBeGreaterThanOrEqual(1);
    });
  });
});


describe("BookingForm confirmation flow", () => {
  test("shows ConfirmedBooking after successful submission", async () => {
    render(<BookingForm />);

    // Fill out all required fields
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "Alice" } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Smith" } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "2025-12-25" } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: "19:00" } });
    fireEvent.change(screen.getByLabelText(/Guests/i), { target: { value: "3" } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });

    // Wait for the ConfirmedBooking component to appear
    await waitFor(() => {
      //expect(screen.getByTestId("confirmed-booking")).toBeInTheDocument();
      // Optionally, check for personalized confirmation
      expect(screen.getAllByText(/Your reservation has been booked!/i)).toBeInTheDocument();
    });
  });
});