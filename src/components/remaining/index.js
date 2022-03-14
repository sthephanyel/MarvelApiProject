import { useContext, useEffect, useState } from 'react';
import { AllContext } from '../context/AuthContext.js';
import { 
    Container,
    TableHero,
    HeroField,
    TextContentDescription,
    TextContent
} from './stylebutton.js';

export default function Index({}){
    const {remaining,EscolhaHeroiButton} = useContext(AllContext);

    return(
        <Container>
            <TableHero id='remaining'>
                <h1>Personagens</h1>
                {remaining.map((user, key)=>(
                    <div key={key}>
                        <a href="#hero">
                        <HeroField onClick={()=>EscolhaHeroiButton(user.name)}>
                            <div>
                                <div>
                                   <h4>{user.name}</h4> 
                                </div>
                                <img width="100" src={user.thumbnail.path + '.'+ user.thumbnail.extension}></img>
                                <div>
                                    {user.description == "" && <><p>has no description ;-;</p></> ||
                                    user.description &&
                                    <TextContent>
                                        
                                        <p>{user.description}</p>
                                    </TextContent>
                                    }
                                </div>
                            </div>
                        </HeroField>
                        </a>
                    </div>
                ))}
            </TableHero>
        </Container>
    );
}