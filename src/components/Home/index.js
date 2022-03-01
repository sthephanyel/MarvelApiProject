import React, {useContext} from "react";
import spider from '../../assets/spider.jpg'
import iron from '../../assets/iron.jpg'
import thor from '../../assets/thor.jpg'
import captain from '../../assets/america.jpg'
import hulk from '../../assets/hulk.jpg' 

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

import { AllContext } from "../context/AuthContext.js";



export default function Index(){

    const {itens, setItens,  heroi, setHeroi, Escolha} = useContext(AllContext);

    return(
        <Container>
            <HeaderPage>
                <strong>Api Marvel</strong>
                <strong>Teste</strong>
                <strong>Teste</strong>
                <strong>Criador</strong>
            </HeaderPage>
            {itens == "" && 
            <>
                <Loading>
                    <img src='https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif' alt='carregando...'></img>
                </Loading>
            </> 
            || itens && 
            <>
                <PageButtom>
                    <DivButtonHero>
                        <Button image={spider} name="Spider-Man (House of M)">spider-man</Button>
                        <Button image={iron} name="Iron Man/Tony Stark (MAA)">iron man</Button>
                        <Button image={thor} name="Thor (MAA)">thor</Button>
                        <Button image={captain} name="Captain America/Steve Rogers (MAA)">Captain America</Button>
                        <Button image={hulk} name="Hulk (HAS)">hulk</Button>
                    </DivButtonHero>

                    <DivMarvelCaracteres>
                    {itens.map((user, key)=>(
                        <div key={key}>
                            {user.description == "" && <></> ||
                                user.description && 
                                <div>
                                    <h1>{user.name}</h1>
                                    <IMG src={user.thumbnail.path + '.'+ user.thumbnail.extension}></IMG>
                                    <p>{user.description}</p>
                                </div>
                            }
                        </div>
                    ))}
                    </DivMarvelCaracteres>
                </PageButtom>
                <DivInformacoesGerais>
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
                            <img width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                            <strong>Linkedin</strong>
                        </div>
                        <div>
                            <img width="60" src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
                            <strong>Instagram</strong>
                        </div>
                        <div>
                            <img width="55" src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/>
                            <strong>WhatsApp</strong>
                        </div>
                    </DivInformacoesRedesSociais>
                </DivInformacoesGerais>
            </>}
        </Container>
    );
}