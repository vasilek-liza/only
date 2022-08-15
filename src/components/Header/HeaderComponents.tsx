import styled from 'styled-components';

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
`
const Link = styled.a`
    color: #000000;
    text-decoration: none;
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    @media (max-width: 1024px) {
        font-size: 56px;
        line-height: 58px;
    }
    @media (max-width: 767px) {
        font-size: 36px;
        line-height: 38px;
    }
`
const Wrapper = styled.div`
    padding: 40px 0px;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px) {
        padding: 20px 0;
    }
    @media (max-width: 767px) {
        padding: 15px 0;
    }
`
export default { Header, Link, Wrapper }