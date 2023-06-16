import React from "react";
import { useState } from "react";
import { Nav_bar_perfil } from "../components/nav-bar-perfil";
import { Boton_back } from "../components/boton-back";
import { NavLink } from "react-router-dom";
import { Memo_card_tablero } from "../components/memoCard-tablero";
import "../scss/user_profile_style.css";
import "../scss/boton_toggler_style.css";

export function Memo_card() {
  return (
    <>
      <main className="contenedor-perfil">
        <div className="settings">
          <h1 className="titulo-settings">MemoCard</h1>
        </div>

        <Memo_card_tablero />

        <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boton_back
            nombre="Minijuegos"
            imagen="/images/dinastia-icono.png"
            identificador={123}
            href="/minijuegos"
          />
        </div>
      </main>
    </>
  );
}
