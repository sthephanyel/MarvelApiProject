import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    text-align:Center;
    justify-content:center;

    margin-top: 50px;
    margin-top: 50px;
    word-wrap:break-word; 
    white-space:normal;
    
    display: block;
    flex-wrap: wrap;
`;
export const TableHero = styled.div`
    display: block;
    color: white;

    a{
        text-decoration:none;
        color: white;
    }
    div{
        display: inline-block;
    }
`;

export const HeroField = styled.div`
    background: #233A4E;
    flex:0 0 auto;
    top:0;
    width: 24.6vw;
    height: 30vw;
    vertical-align: middle;
    transform: scale(0.9);
    transition: all 0.2s linear;
    border-radius:30px;
    border: 1px solid white;
    align-items: center;
    text-align: center;
    justify-content: center;

    div{
        margin:1rem;
        display: block;
    }
    div> h4{
        font-size:150%;
        max-width: 56%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: 34px;
        transition: all 0.2s linear;
    }
    img{
        width:40%;
        height:10vw;
        border: 1px solid white;
        border-radius:30px;
    }
    p{
        margin:0.5rem 1rem 0.5rem 1rem;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    :hover{
        transform: scale(1);
        div> h4{
            max-width: 76%;
            overflow:visible;
            text-overflow: none;
            white-space: normal;
        }
    }

    @media (max-width:950px){
        div>div:last-child{
            display:none;
        }
        img{
        width:70%;
        height:18vw;

        }
        div> h4{
            max-width: 50%;
            font-size:90%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        :hover{
        div> h4{
            max-width: 50%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    @media (max-width:550px){
 
        div> h4{
            display:none;
        }
        img{
            width:90%;
            height:23vw;
        }

    }
`;

export const TextContent = styled.div`
    background-color:#ffffff18;
    backdrop: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    height: 10vw;
    border-radius:30px;
    overflow-Y: scroll;

    ::-webkit-scrollbar{
        width: 10px;
        background: #233A4E;
    }
    ::-webkit-scrollbar-track{
        background: #233A4E;
        border-radius:30px;
    }
    ::-webkit-scrollbar-thumb{
        background:#fff;
        border-radius:30px;

    }
`;