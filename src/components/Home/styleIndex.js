import styled from 'styled-components';
import React from 'react';

export const Container = styled.div`
    width: 100%;
    height: 150vh;
    color: white;
    transition: all 0.5s linear;
`;
export const HeaderPage = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 1px solid white;
    margin: 0 5rem 0 5rem;

    strong{
        margin: 0 2.2rem 0 2.2rem;
    }
`;
export const PageButtom = styled.div`
    display: flex;
`;
export const DivButtonHero = styled.div`
    flex-direction: column;
`;

export const DivMarvelCaracteres = styled.div`
    padding: 20px;
    margin: 0 1rem 0 1rem;
    transition: all 0.2s linear;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-bottom: 1px solid white;
    background-color:#ffffff10;
    backdrop: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    :hover{
        background-color:#ffffff18;
    }
`;  


export const IMG = styled.img`
    width: 38%;
    height: 38%;
    border-radius:50%;

`;

export const DivInformacoesGerais = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid white;
    margin: 0 5rem 0 5rem;
    /* background: linear-gradient(to bottom , #101b37 , #041746, #0b1320); */
    color: white;
    margin-top: 1rem;
    height: 45vh;
 
`;
export const DivInformacoesCriador = styled.div`
    width: 20rem;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius:30px;
    background: #233A4E;
    div>p{
        margin-bottom:1rem;
    }
    div>strong{
        border-bottom: 1px solid white;
    }
`;
export const DivInformacoesRedesSociais = styled.div`
    width: 30rem;
    height: 15rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    div{
        width:9rem;
        height: 14rem;
        display:flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        flex-direction: column;
        background: none;
        transition: all 0.3s linear;
        transform: scale(0.9);
        cursor:pointer;

        :hover{
            border-radius:50px;
            background: #233A4E;
            transform: scale(1);
            background-color:#ffffff10;
            backdrop: blur(12px);
            -webkit-backdrop-filter: blur(12px);

        }
    }
`;

export const Loading = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items:center;
    img{
        width: 50px;
    }
}
`;