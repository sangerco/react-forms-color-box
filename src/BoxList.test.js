import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import BoxList from "./BoxList";

it('renders without crashing', () => {
    render(<BoxList />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment).toMatchSnapshot();
})

it('adds color box', () => {
    const { queryByText, getByLabelText, queryAllByText } = render(<BoxList />);
    let x = queryAllByText('X');
    expect(x.length).toBe(1);
    const btn = queryByText('Add Box');
    const colorInput = getByLabelText('Background Color');
    const widthInput = getByLabelText('Width');
    const heightInput = getByLabelText('Height');
    fireEvent.change(colorInput, { target: { value: 'red' }});
    fireEvent.change(widthInput, { target: { value: '200' }});
    fireEvent.change(heightInput, { target: { value: '200' }});
    fireEvent.click(btn);
    x = queryAllByText('X');
    expect(x.length).toBe(2);
})

it('deletes color box', () => {
    const { queryByText } = render(<BoxList />);
    const btn = queryByText('X');
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(btn).not.toBeInTheDocument();
})