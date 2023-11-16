'use client';
const Navbar = ({ task, completed, incomplete }) => {
  return (
    <nav className="top">
      <h1>TODO</h1>
      <h3>Total Task: {task}</h3>
      <h3>Completed Task: {completed}</h3>
      <h3>Uncompleted Task: {incomplete}</h3>
    </nav>
  );
};

export default Navbar;
