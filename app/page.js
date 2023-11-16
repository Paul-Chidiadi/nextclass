'use client';
import Image from 'next/image';
import { useState } from 'react';
import Navbar from '../components/Navbar.js';
import Body from '../components/Body.js';
import Add from '../components/Add.js';

export default function Home() {
  const [todos, setTodos] = useState([
    { id: 1, description: 'Complete Tutorial class', isCompleted: false },
    { id: 2, description: 'Work on project 2', isCompleted: false },
    { id: 3, description: 'Eat Fruits', isCompleted: true },
  ]);
  let completedTaskCount = 0;
  let incompletedTaskCount = 0;
  for (let a = 0; a < todos.length; a++) {
    const element = todos[a];
    element.isCompleted === true ? completedTaskCount++ : incompletedTaskCount++;
  }
  console.log(completedTaskCount, incompletedTaskCount);

  function completeATodo(id) {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) => {
        return todo.id === id ? { ...todo, isCompleted: true } : todo;
      });
    });
  }

  function deleteATodo(id) {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => {
        return todo.id !== id;
      });
    });
  }

  function incompleteATodo(id) {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) => {
        return todo.id === id ? { ...todo, isCompleted: false } : todo;
      });
    });
  }

  function addTodo(text) {
    setTodos((prevTodo) => {
      return [...prevTodo, { id: prevTodo.length + 1, description: text, isCompleted: false }];
    });
  }
  return (
    <main>
      <Navbar task={todos.length} completed={completedTaskCount} incomplete={incompletedTaskCount} />
      <Body
        todoInfo={todos}
        handleCompleteClick={(id) => completeATodo(id)}
        handleIncompleteClick={(id) => incompleteATodo(id)}
        handleDeleteClick={(id) => deleteATodo(id)}
      />
      <Add addClick={(text) => addTodo(text)} />
    </main>
  );
}
