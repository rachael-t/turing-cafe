import React from 'react';
import Form from './Form';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
    it('should render a form', () => {
        const { getByText, getByPlaceholderText } = render(<Form />)

        const nameInput = getByPlaceholderText('Name');
        const dateInput = getByPlaceholderText('Date (mm/dd)');
        const timeInput = getByPlaceholderText('Time');
        const numInput = getByPlaceholderText('Number of guests');
        const submitBtn = getByText('Make Reservation')

        expect(nameInput).toBeInTheDocument();
        expect(dateInput).toBeInTheDocument();
        expect(timeInput).toBeInTheDocument();
        expect(numInput).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();
    })

})