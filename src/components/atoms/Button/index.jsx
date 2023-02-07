import React from 'react';

function Button({ title, onClick, isLoading }) {
  if (isLoading) {
    return <button type="submit" className="btn disabled">Loading...</button>;
  }

  return (
    <button type="submit" className="btn" onClick={onClick}>{title}</button>
  );
}

export default Button;