import { fireEvent, render, screen } from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  test('debe escribir en el input', () => {
    // Sujeto de pruebas
    render(<GifExpertApp />);

    // Disparamos el eventos
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Saitama' } });

    // Hacemos la aserción de lo que esperamos que suceda
    expect(input.value).toBe('Saitama');

    // screen.debug();
  });

  test('no debe añadir una categoría existente', () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: 'One Piece' } });
    fireEvent.submit(form);

    expect(screen.getAllByText('One Piece').length).toBe(1);
  });
});
