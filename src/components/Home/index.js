import React, {useContext} from "react";
import spider from '../../assets/spider.jpg'
import iron from '../../assets/iron.jpg'
import thor from '../../assets/thor.jpg'
import captain from '../../assets/america.jpg'
import hulk from '../../assets/hulk.jpg'
import marvellogo from '../../assets/marvel-logo.jpg'


import Button from "../Buttom/index.js"

import { 
    Container,
    IMG,
    DivMarvelCaracteres,
    DivButtonHero,
    PageButtom,
    HeaderPage,
    DivInformacoesGerais,
    DivInformacoesCriador,
    DivInformacoesRedesSociais,
    Loading
} from './styleIndex';

import Remaining from '../remaining/index'
import { AllContext } from "../context/AuthContext.js";

import MarvelGif from '../../assets/aberturamarvel.gif'
export default function Index(){

    const {itens, setItens,  heroi, setHeroi, Escolha} = useContext(AllContext);

    return(
        <Container>
            <HeaderPage>
                <div>
                    <img src={marvellogo} width="150"></img>
                </div>
                <div>
                    <strong><a href="#">Inicio</a></strong>
                    <strong><a href="#remaining">Personagens</a></strong>
                    <strong><a href="https://developer.marvel.com/" target="_blank">Api Marvel</a></strong>
                    <strong><a href="#divInformacoesGerais">Criador</a></strong>
                </div>
            </HeaderPage>
            {itens == "" && 
            <>
                <Loading>
                    <img src='https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif' alt='carregando...'></img>
                </Loading>
            </> 
            || itens && 
            <>
                <PageButtom  id="hero">
                    <DivButtonHero>
                        <Button image={spider} name="Spider-Man (House of M)">spider-man</Button>
                        <Button image={iron} name="Iron Man/Tony Stark (MAA)">iron man</Button>
                        <Button image={thor} name="Thor (MAA)">thor</Button>
                        <Button image={captain} name="Captain America/Steve Rogers (MAA)">Captain America</Button>
                        <Button image={hulk} name="Hulk (HAS)">hulk</Button>
                    </DivButtonHero>

                    <DivMarvelCaracteres img={MarvelGif}>
                        {itens.map((user, key)=>(
                            <div key={key}>
                                <div>
                                    <div>
                                        <h1>{user.name}</h1>
                                    </div>
                                    <IMG src={user.thumbnail.path + '.'+ user.thumbnail.extension}></IMG>
                                    <div>
                                        <p>{user.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </DivMarvelCaracteres>
                </PageButtom>

                <Remaining style={{overflowX: 'hidden'}}></Remaining>
                
                <DivInformacoesGerais id="divInformacoesGerais">
                    <DivInformacoesCriador>
                        <div>
                            <strong>Criador:</strong>
                            <p>Sthephanyel Silva Pinheiro</p>
                            <strong>Email para contato:</strong>
                            <p>sthephanyelsilva3@gmail.com</p>
                            <strong>Telefone:</strong>
                            <p>+55(85) 9 8789-1854</p>
                        </div>
                    </DivInformacoesCriador>
                    <DivInformacoesRedesSociais>
                        <div>
                            <a target="_blank" href="https://www.linkedin.com/in/sthephanyel-silva-pinheiro-a8a875183">
                                <img width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                            </a>
                            <strong>Linkedin</strong>
                        </div>
                        <div>
                            <a target="_blank" href="https://www.instagram.com/sthephanyel_silva/">
                                <img width="60" src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>    
                            </a>
                            <strong>Instagram</strong>
                        </div>
                        <div>
                            <a target="_blank" href="https://web.whatsapp.com/send?phone=55987891854">
                                <img width="55" src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/>    
                            </a>          
                            <strong>WhatsApp</strong>
                        </div>
                    </DivInformacoesRedesSociais>
                </DivInformacoesGerais>
            </>}
        </Container>
    );
}