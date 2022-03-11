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

    const[remaining, setRemaining] = useState([]);
    const [remainingHeroi, setRemainingHeroi] = useState(["spider-man"]);

    useEffect(()=>{
        const fetch = async ()=>{
            const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${heroi}&ts=${time}&apikey=${publicKey}&hash=${hash}`);
            console.log(result.data.data.results);
            setItens(result.data.data.results.splice(0,1));
        }
        fetch()
        const fetchRemaining = async()=>{
            const resultRemaining = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${remainingHeroi}&ts=${time}&apikey=${publicKey}&hash=${hash}`);
            console.log(resultRemaining.data.data.results);
            setRemaining(resultRemaining.data.data.results.splice(0,10));
        }
        fetchRemaining()
    },[heroi])

    function EscolhaHeroiButton(name){
        const result = name;
        setHeroi(result);

        if(result==="Iron Man/Tony Stark (MAA)"){
            const resultRemaining = result.substr(0,6).replace(/[]/g, "").toLowerCase();
            setRemainingHeroi(resultRemaining);
            console.log("resulta remaing:"+resultRemaining);
        }else if(result==="Spider-Man (House of M)"){
            const resultRemaining = result.substr(0,10).replace(/[()]/g, "").toLowerCase();
            setRemainingHeroi(resultRemaining);
            console.log(resultRemaining);
        }else if(result==="Hulk (HAS)"){
            const resultRemaining = result.substr(0,6).replace(/[ ()]/g, "").toLowerCase();
            setRemainingHeroi(resultRemaining);
            console.log(resultRemaining);
        }
        else{
            const resultRemaining = result.substr(0,6).replace(/[()]/g, "").toLowerCase();
            setRemainingHeroi(resultRemaining);
            console.log(resultRemaining);
        }
        

        console.log("Heroi:" +result);
    }
    

    return (
        <AllContext.Provider value={{itens, setItens, heroi, setHeroi, EscolhaHeroiButton,remaining,setRemaining,remainingHeroi,setRemainingHeroi}}>
            {props.children}
        </AllContext.Provider>
    );
}