import { useContext, useEffect, useState } from 'react';
import { AllContext } from '../context/AuthContext.js';
import { 
    Container,
    ButtonText,
    ButtonIMG
} from './stylebutton.js';

export default function Index({name, image}){
    const {EscolhaHeroiButton} = useContext(AllContext);

    // const [toogle, setToogle] = useState(true);
    // const [cor, setCor] = useState('#c3c3c3');
    // useEffect(() => {
    //     setCor((state) => toogle ? '#c3c3c3': '#446677');
    //     setTimeout(() =>{
    //         setCor('#c3c3c3');
    //         setToogle(true);
    //     },1000);
    // }, [toogle]);

    // style={{opacity: cor}}
    //             onClick={e => setToogle(state => !state)}

    return(
        <Container>
            <ButtonText onClick={()=>EscolhaHeroiButton(name)}>

                <ButtonIMG src={image} 
                ></ButtonIMG>

            </ButtonText>
        </Container>
    );
}