import styled from 'styled-components';

interface IButton {
  login?: boolean,
}

const Button = styled.button<IButton>`
  width: ${props => props.login ? "100%" : "200px"};
  background: ${props => props.login ? "#4A67FF" : "#F5F5F5"};
  border-radius: 8px;
  color: ${props => props.login ? "#fff" : "#000000"};
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  padding: 19px;
  border: ${props => props.login ? "1px solid #4A67FF;" : "none"};
  outline: none;
  margin-top: 40px;
  cursor: pointer;
  :disabled { 
    background: #99A9FF;
    border: none;
    cursor: default;
  }
`
export default {Button}