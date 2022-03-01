import styled from 'styled-components';

export const Container = styled.div`
    width: 14rem;
    max-height: 100%;
    border: 1px solid;
    display: flex;
    border: 1px solid white;
    margin: 5px;
    transform: scale(0.9);
    transition: all 0.2s linear;
    :hover{
        transform: scale(1);
    }
`;

export const ButtonText = styled.button`
    display: flex;
    width:100%;
    decoration: none;
    background: black;
    text-decoration: none;
    border: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover { 
        /* color: white; */
    }

`;

export const ButtonIMG = styled.img`
    transition: all 0.2s linear;
    height:100%;
    width:100%;
`;