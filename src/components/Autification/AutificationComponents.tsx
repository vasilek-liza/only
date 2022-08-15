import styled from 'styled-components';
interface IInput {
    invalid?: boolean,
  }

const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
    color: #1F1F1F;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 10px;
`
const CustomInput= styled.input<IInput>`
    background: #F5F5F5;
    border-radius: 8px;
    padding: 21px 20px 20px;
    outline: none;
    margin-bottom: 20px;
    box-sizing: border-box;
    border: ${props => props.invalid ? "1px solid #E26F6F;" : "none"};

`
const ErrorInput= styled.span`
    color: #E26F6F;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: -12px 0 20px;
`
const ErrorAuth= styled.div`
    background: #F5E9E9;
    border: 1px solid #E26F6F;
    border-radius: 8px;
    padding: 21px 20px 20px;
    color: #000000;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 27px;
    display: flex;
    p {
        margin: 0 0 0 13px;
    }
`
const AutificationComponent= styled.div`
    max-width: 640px;
    margin: 0 auto;
    width: 100%;
    text-align: start;
`
export default {AutificationComponent, ErrorAuth, CustomInput, Label, Form, ErrorInput}
  