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
    });

    it('should update the input value when data is entered', () => {
        const { getByPlaceholderText } = render(<Form />)

        const nameInput = getByPlaceholderText('Name');
        const dateInput = getByPlaceholderText('Date (mm/dd)');
        const timeInput = getByPlaceholderText('Time');
        const numInput = getByPlaceholderText('Number of guests');

        fireEvent.change(nameInput, { target: { value: 'Luna' }});
        fireEvent.change(dateInput, { target: { value: '06/08' }});
        fireEvent.change(timeInput, { target: { value: '6:30' }});
        fireEvent.change(numInput, { target: { value: 4 }});

        expect(nameInput.value).toBe('Luna');
        expect(dateInput.value).toBe('06/08');
        expect(timeInput.value).toBe('6:30');
        expect(numInput.value).toBe('4');
    })

})