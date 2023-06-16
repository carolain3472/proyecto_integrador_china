import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Register_form } from "../components/register_form";
import { BrowserRouter as Router } from "react-router-dom";

describe("Register_form", () => {
  test("Verificar que se rendericen los campos de entrada", () => {
    render(
      <Router>
        <Register_form />
      </Router>
    );

    // Verificar que se rendericen los campos de entrada
    expect(screen.getByPlaceholderText("Ingresa username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Ingresa Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Ingresa contraseña")).toBeInTheDocument();
  });

  test("Actualiza el estado con campos de entrada", () => {
    render(
      <Router>
        <Register_form />
      </Router>
    );

    // Obtener los campos de entrada
    const usernameInput = screen.getByPlaceholderText("Ingresa username");
    const emailInput = screen.getByPlaceholderText("Ingresa Email");
    const passwordInput = screen.getByPlaceholderText("Ingresa contraseña");

    // Simular cambios de entrada
    fireEvent.change(usernameInput, { target: { value: "john.doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Verificar que los estados se hayan actualizado correctamente
    expect(usernameInput.value).toBe("john.doe");
    expect(emailInput.value).toBe("john@example.com");
    expect(passwordInput.value).toBe("password123");
  });
});
