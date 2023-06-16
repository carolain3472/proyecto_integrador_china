import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Sobre_nosotros } from '../pages/sobre_nosotros';

describe('Sobre_nosotros', () => {
  test('debería mostrar el título correctamente', () => {
    render(
      <MemoryRouter>
        <Sobre_nosotros />
      </MemoryRouter>
    );
    const titulo = screen.getByText('¡Bienvenid@ a nuestra aplicación sobre la civilización antigua china!');
    expect(titulo).toBeInTheDocument();
  });

  test('debería mostrar el nombre de los miembros del equipo', () => {
    render(
      <MemoryRouter>
        <Sobre_nosotros />
      </MemoryRouter>
    );
    const nombres = screen.getAllByText(/Carolain Jimenez Bedoya|Hernando Lopez Rincon|Natalia Lopez Osorio/);
    expect(nombres.length).toBe(3);
  });
});
