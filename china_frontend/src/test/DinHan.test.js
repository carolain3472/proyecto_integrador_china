import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Din_Han } from '../pages/Historia/han.jsx';

describe('Din_Han', () => {
  test('debería mostrar el título correctamente', () => {
    render(
      <MemoryRouter>
        <Din_Han />
      </MemoryRouter>
    );
    const titulo = screen.getByText('Dinastia HAN');
    expect(titulo).toBeInTheDocument();
  });
});
