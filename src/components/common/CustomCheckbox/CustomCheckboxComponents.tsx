import styled from 'styled-components';

const CheckboxComponent= styled.div`
    display: flex;
    align-items: center;
    position: relative;
    label {
        display: inline-flex;
        align-items: center;
        user-select: none;
        ::before {
            content: '';
            display: inline-block;
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid #000000;
            border-radius: 4px;
            margin-right: 0.5em;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
            padding: 3px;
            box-sizing: border-box;
        }
    }
    
    input {
        position: absolute;
        opacity: 0;
        z-index: 2;
        :checked+label::after {
            background-color: #0b76ef;
            content: '';
            display: inline-block;
            width: 14px;
            height: 14px;
            padding: 3px;
            flex-shrink: 0;
            flex-grow: 0;
            margin-right: 0.5em;
            position: absolute;
            box-sizing: border-box;
            left: 3px;
            border-radius: 4px;
        }
    }
`
export default {CheckboxComponent}
  