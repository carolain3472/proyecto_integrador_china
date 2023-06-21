import React, { useState, useEffect } from "react";
import Memo_card_tarjeta from "./memoCard-tarjeta";
import "../scss/memoCard_tablero_style.css";

import { images } from "./memoCard-images";

/**
 * Componente Memo_card_tablero.
 * Representa el tablero principal del juego de memoria.
 */

export function Memo_card_tablero() {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const totalPairs = Math.floor(images.length / 2);

  const [timeLeft, setTimeLeft] = useState(35); // 3 minutes in seconds

  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);

  /**
   * Función que baraja un array en su lugar utilizando el algoritmo de Fisher-Yates.
   * @param {Array} array - Array a ser barajado.
   */

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  /**
   * Efecto de inicialización que baraja las cartas al cargar el componente.
   */

  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, []);

  /**
   * Efecto que inicia un temporizador y verifica si el juego ha sido completado o si se ha agotado el tiempo.
   */

  useEffect(() => {
    if (!gameComplete && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } else if (!gameComplete && timeLeft === 0 && score < totalPairs * 5) {
      // Juego perdido: se agotó el tiempo y no se han encontrado todos los pares
      setGameComplete(false);
    }
  }, [gameComplete, timeLeft, score, totalPairs]);

  /**
   * Efecto que verifica si las dos cartas seleccionadas forman un par.
   */

  useEffect(() => {
    checkForMatch();
  }, [secondCard]);

  /**
   * Formatea el tiempo restante en el formato "mm:ss".
   * @param {number} time - Tiempo restante en segundos.
   * @returns {string} - Tiempo formateado en "mm:ss".
   */

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  /**
   * Voltea una carta y verifica si forma un par con la carta previamente seleccionada.
   * @param {string} name - Nombre de la carta.
   * @param {number} number - Número de la carta.
   * @returns {number} - Indicador de éxito al voltear la carta (0: no se voltea, 1: se voltea).
   */

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0; //No se voltea la carta si se selecciona la misma carta dos veces
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    } else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1; // La carta se voltea
  };

  /**
   * Verifica si las dos cartas seleccionadas forman un par y realiza las acciones correspondientes.
   */

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();
    }
  };

  /**
   * Deshabilita las cartas seleccionadas si forman un par.
   */

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
    setScore(score + 5);

    if (score + 5 === totalPairs * 5) {
      setGameComplete(true);
    }
  };

  /**
   * Voltea las cartas seleccionadas si no forman un par.
   */

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  /**
   * Reinicia las cartas seleccionadas.
   */

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  };

  return (
    <div className="app">
      {timeLeft === 0 && !gameComplete ? (
        <div className="game-over-message">
          <h1 className="fin-juego-perd">
            ¡Perdiste! Tiempo agotado. <br />
            Tu puntuación: {score}
          </h1>
        </div>
      ) : (
        <>
          {!gameComplete && (
            <div>
              <div className="score-time">
                <div className="score">Puntos: {score}</div>
                <div className="timer">
                  Tiempo restante: {formatTime(timeLeft)}
                </div>
              </div>
              <div className="cards-container">
                {cards.map((card, index) => (
                  <Memo_card_tarjeta
                    key={index}
                    name={card.player}
                    number={index}
                    frontFace={card.src}
                    flipCard={flipCard}
                    unflippedCards={unflippedCards}
                    disabledCards={disabledCards}
                    score={score}
                    setScore={setScore}
                  />
                ))}
              </div>
            </div>
          )}
          {gameComplete && (
            <div className="game-complete-message">
              <h1 className="fin-juego">
                ¡Juego completado! Puntuación: {score}
              </h1>
            </div>
          )}
        </>
      )}
    </div>
  );
}
