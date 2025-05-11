import { render, screen, fireEvent, act } from '@testing-library/react';
import BookingForm from './BookingForm'; // Adjust the import path if necessary

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
})