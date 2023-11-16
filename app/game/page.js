'use client';
import { useState } from 'react';
import Die from '../../components/Die.js';

export default function Game() {
  const [die, setDie] = useState(allNewDice());

  
  const allIsHeld = die.every((item) => item.isHeld === true);
  if (allIsHeld) {
    setDie(allNewDice);
  }

  const dieElement = die.map((item) => {
    return (
      <Die
        key={item.id}
        dieId={item.id}
        isHeld={item.isHeld}
        value={item.value}
        holdFunction={(id) => {
          holdDie(id);
        }}
      />
    );
  });

  function allNewDice() {
    let dieArray = [];
    for (let a = 0; a < 10; a++) {
      const randomDie = Math.floor(Math.random() * 6) + 1;
      const dieObject = { id: a + 1, value: randomDie, isHeld: false };
      dieArray.push(dieObject);
    }
    return dieArray;
  }

  function holdDie(id) {
    setDie((prevDie) => {
      let choosenNumber;
      let newArray = [];
      for (let a = 0; a < prevDie.length; a++) {
        const element = prevDie[a];
        // check and get choosen number
        if (element.isHeld) {
          choosenNumber = element.value;
        }

        if (choosenNumber) {
          // hold die making sure that the value is same as  choosen number
          if (element.id === id && element.value === choosenNumber) {
            const newDieObject = { ...element, isHeld: !element.isHeld };
            newArray.push(newDieObject);
          } else {
            newArray.push(element);
          }
        } else {
          // hold die making sure that the value is same as  choosen number
          if (element.id === id) {
            const newDieObject = { ...element, isHeld: !element.isHeld };
            newArray.push(newDieObject);
          } else {
            newArray.push(element);
          }
        }
      }
      return newArray;
      // return prevDie.map((item) => {
      //   return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      // });
    });
  }

  function handleRoll() {
    setDie((prevDie) => {
      return prevDie.map((item) => {
        const randomDie = Math.floor(Math.random() * 6) + 1;
        return item.isHeld ? item : { ...item, value: randomDie };
      });
    });
  }

  return (
    <main className="game-container">
      <h1>TENZIES</h1>
      <p>Roll until all the dice are the same. Click each die to freeze it at its current value between rolls</p>
      <div className="dice-container">{dieElement}</div>
      <button onClick={handleRoll}>Roll</button>
    </main>
  );
}
