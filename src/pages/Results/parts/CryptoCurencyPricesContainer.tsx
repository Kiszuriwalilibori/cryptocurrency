import styled from 'styled-components';

const CryptoCurrencyPricesContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    @media (max-width: 850px) {
        grid-template-columns: repeat(4, 1fr);
        & :nth-child(5) {
            border-left: none;
        }
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        & :nth-child(odd) {
            border-left: none;
        }
    }

    & :first-child {
        @media (max-width: 1000px) {
            border-left: none;
        }
    }

    @media (max-width: 400px) {
        width: 100%;
    }
    @media (max-width: 300px) {
        grid-template-columns: repeat(1, 1fr);
        & * {
            border-left: none;
        }
    }
`;
export default CryptoCurrencyPricesContainer;
