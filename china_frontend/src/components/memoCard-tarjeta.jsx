import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import backFace from "/images/questionMark.png";

/**
 * Componente Memo_card_tarjeta.
 * Representa una tarjeta en el juego de memoria.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.name - Nombre de la carta.
 * @param {number} props.number - Número de la carta.
 * @param {string} props.frontFace - Ruta de la imagen de la cara frontal de la carta.
 * @param {Function} props.flipCard - Función para voltear una carta.
 * @param {Array} props.unflippedCards - Array de números de las cartas que no están volteadas.
 * @param {Array} props.disabledCards - Array de números de las cartas deshabilitadas (ya encontradas).
 * @param {number} props.score - Puntuación actual del jugador.
 * @param {Function} props.setScore - Función para actualizar la puntuación.
 * @returns {JSX.Element} - Elemento JSX que representa una tarjeta del juego de memoria.
 */

const Memo_card_tarjeta = ({
  name,
  number,
  frontFace,
  flipCard,
  unflippedCards,
  disabledCards,
  score,
  setScore,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);

  /**
   * Efecto que actualiza la puntuación cuando cambie.
   */

  useEffect(() => {
    // Actualizar el puntaje cuando cambie
    setScore(score);
  }, [score]);

  /**
   * Efecto que voltea la carta si no está en la lista de cartas sin voltear.
   */

  useEffect(() => {
    if (unflippedCards.includes(number)) {
      setTimeout(() => setIsFlipped(false), 700);
    }
  }, [unflippedCards]);

  /**
   * Efecto que deshabilita la carta si está en la lista de cartas deshabilitadas.
   */

  useEffect(() => {
    if (disabledCards.includes(number)) {
      setHasEvent(false);
    }
  }, [disabledCards]);

  /**
   * Manejador de clic en la carta.
   * Voltea la carta y llama a la función flipCard del componente padre.
   * @param {Event} e - Evento de clic.
   */

  const handleClick = (e) => {
    const value = flipCard(name, number);
    if (value !== 0) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="tarjeta">
      <ReactCardFlip isFlipped={isFlipped}>
        <img
          className="tarjeta-image"
          src={backFace}
          alt="back-face"
          onClick={hasEvent ? handleClick : null}
        />
        <img
          className="tarjeta-image"
          src={frontFace}
          alt="front-face"
          onClick={hasEvent ? handleClick : null}
        />
      </ReactCardFlip>
    </div>
  );
};

export default Memo_card_tarjeta;
