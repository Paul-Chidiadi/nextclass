'use client';
const Body = ({ todoInfo, handleCompleteClick, handleIncompleteClick, handleDeleteClick }) => {
  const incompletedTodoElements = todoInfo.map((item) => {
    return item.isCompleted === false ? (
      <div key={item.id} className="container">
        <p>{item.description}</p>
        <div className="inner">
          <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
          <button onClick={() => handleCompleteClick(item.id)}>Complete</button>
        </div>
      </div>
    ) : (
      ''
    );
  });
  const completedTodoElements = todoInfo.map((item) => {
    return item.isCompleted === true ? (
      <div key={item.id} className="container">
        <p>{item.description}</p>
        <div className="inner">
          <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
          <button onClick={() => handleIncompleteClick(item.id)}>incomplete</button>
        </div>
      </div>
    ) : (
      ''
    );
  });
  return (
    <>
      <div className="todos-cont"> INCOMPLETED TODOS{incompletedTodoElements}</div>;
      <div className="todos-cont"> COMPLETED TODOS{completedTodoElements}</div>;
    </>
  );
};

export default Body;
