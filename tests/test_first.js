import {render, screen} from '@testing-library/react';
import test from "node:test";
import expect from "expect";



test('exists', () => {
    render("<blah></blah>");
    const head = screen.getByText('Blah');
    expect(head).toBeIntheDocument()
})