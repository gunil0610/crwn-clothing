import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &:active {
    background-color: black;
    color: white;
    border: none;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }

  &:active {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const googleSignInStyles = css`
  background-color: #4295f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }

  &:active {
    background-color: #4295f4;
    color: white;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:focus {
    outline: 0;
  }

  ${getButtonStyles}
`;
