import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const InputBox = styled.input`
  flex: 1;
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
  border: px solid #bdbdbd;
  outline: none;
`;

interface Props {
  readonly placeholder?: string;
  readonly value?: string;
  readonly onChange?: (text: string) => void;
}

export const Input = ({ placeholder, value, onChange }: Props) => {
  return (
    <InputBox
      value={value}
      placeholder={placeholder}
      onChange={(event) => {
        if (typeof onChange === "function") {
          onChange(event.target.value);
        }
      }}
    />
  );
};
