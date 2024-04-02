import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [QuestionActuelle, setQuestionActuelle] = useState(1);
  const [timer1, setTimer1] = useState(20);
  const [timer2, setTimer2] = useState(20);
  const [timer3, setTimer3] = useState(20);

  const questions = [
    {
      enonce: "Score de la finale de coupe du monde 2022 ?",
      reponses: ["1-0", "2-0", "1-1", "2-1", "3-3"],
      bonneReponse: "3-3"
    },
    {
      enonce: "Qui a gagné la finale de la ligue des champions 2023-2024 ?",
      reponses: ["Manchester City", "Inter Milan"],
      bonneReponse: "Manchester City"
    },
    {
      enonce: "Combien d'étoiles a la France ?",
      reponses: ["0", "1", "2", "3"],
      bonneReponse: "2"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (QuestionActuelle === 1) {
        setTimer1(timer => timer - 1);
      } else if (QuestionActuelle === 2) {
        setTimer2(timer => timer - 1);
      } else if (QuestionActuelle === 3) {
        setTimer3(timer => timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [QuestionActuelle]);

  function verifReponse(reponse) {
    const bonneReponse = questions[QuestionActuelle - 1].bonneReponse;
    if (reponse === bonneReponse) {
      alert("Bonne réponse !");
      if (QuestionActuelle < questions.length) {
        setQuestionActuelle(QuestionActuelle + 1);
      }
    } else {
      alert("Mauvaise réponse !");
    }
  }

  return (
    <>
      <h1 className='title'>QUIZZ FOOT</h1>
      {QuestionActuelle <= questions.length && (
        <div className={'question' + QuestionActuelle}>
          <h2>{questions[QuestionActuelle - 1].enonce}</h2>
          {QuestionActuelle === 1 && <p>Temps restant : {timer1} secondes</p>}
          {QuestionActuelle === 2 && <p>Temps restant : {timer2} secondes</p>}
          {QuestionActuelle === 3 && <p>Temps restant : {timer3} secondes</p>}
          <div>
            {questions[QuestionActuelle - 1].reponses.map((reponse, index) => (
              <button key={index} value={reponse} onClick={() => verifReponse(reponse)}>{reponse}</button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
