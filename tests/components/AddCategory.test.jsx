import { fireEvent, render, screen } from '@testing-library/react';
import AddCategory from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    //Sujeto de pruebas
    render(<AddCategory onNewCategory={() => {}} />);
    //Extraccón del input
    const input = screen.getByRole('textbox');
    //Se dispara el evento
    fireEvent.input(input, {target: {value: 'Saitama'}});
    //Se hace la acerción
    expect(input.value).toBe('Saitama')
    screen.debug();
  });
});
