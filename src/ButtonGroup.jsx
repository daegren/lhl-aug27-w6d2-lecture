import React from 'react';

const ButtonGroup = ({ colors, colorSelected }) => (
  <div className="button-group">
    {colors.map(c => (
      <Button key={c.name} color={c} colorSelected={colorSelected} />
    ))}
  </div>
);
export default ButtonGroup;

const Button = ({ color, colorSelected }) => {
  const onClick = e => {
    colorSelected(color.color);
  };

  return <button onClick={onClick}>{color.name}</button>;
};
