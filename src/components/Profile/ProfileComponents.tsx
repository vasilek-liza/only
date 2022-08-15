import styled from 'styled-components';

const Text = styled.div`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #000000;
    @media (max-width: 1024px) {
        font-size: 36px;
        line-height: 38px;
    }
    @media (max-width: 767px) {
        font-size: 16px;
        line-height: 18px;
    }
`
const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
export default { Text, ProfileWrapper }