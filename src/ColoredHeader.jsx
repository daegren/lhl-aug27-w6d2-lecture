import React from 'react';

const ColoredHeader = ({ color, children }) => (
  <h1 style={{ color }}>{children}</h1>
);
export default ColoredHeader;
