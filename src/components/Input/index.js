import React from "react";
import styled from "styled-components";
const InputUrl = styled.input`
  width: 100%;
  padding: 14px 20px;
  margin: 40px 0;
  border: none;
  border-radius: 4px 0px 0px 4px;
  cursor: pointer;
`;
function Input({ name, value, onChange, placeholder }) {
  return (
    <InputUrl
      // key={`input-${name}`}
      // name={name}
      placeholder={placeholder}
      type="text"
      size="50"
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default Input;
