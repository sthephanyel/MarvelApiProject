import { createContext, useEffect, useState } from 'react'
import axios from "axios";
import md5 from 'md5';
export const AllContext = createContext({});

export default function Index(props){
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;

    const time = Number(new Date());
    const hash = md5(time + privateKey + publicKey);

    const [itens, setItens] = useState([]);
    const [heroi, setHeroi] = useState("Spider-Man (House of M)");

    useEffect(()=>{
        const fetch = async ()=>{
            const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${heroi}&ts=${time}&apikey=${publicKey}&hash=${hash}`);
            console.log(result.data.data.results);
            setItens(result.data.data.results.splice(0,1));
        }
        fetch()
    },[heroi])

    function EscolhaHeroiButton(props){
        const result = props;
        setHeroi(result);
        console.log("Heroi:" +result) 
    }
    

    return (
        <AllContext.Provider value={{itens, setItens, heroi, setHeroi, EscolhaHeroiButton}}>
            {props.children}
        </AllContext.Provider>
    );
}