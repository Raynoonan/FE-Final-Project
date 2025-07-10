import React, { useEffect, useState } from 'react'
import CharacterVoting from '../CharacterVoting.tsx';
import ImageSlide from "../ImageSlide.tsx"
import type {characters} from "../../App.tsx"

function CharacterPage() {
const [characters, setCharacters] = useState<characters[]>([]);
const [votes, setVotes] = useState<{ [key: string]: number}>({})
    
  useEffect(() => {
      async function fetchCharacters() {
        const response = await fetch("https://685c355a89952852c2dca101.mockapi.io/api/v1/characters");
        const data = await response.json();
        setCharacters(data);

         const initialVotes = data.reduce((acc: { [key: string]: number }, char) => {
        acc[char.id] = 0;
        return acc;
      }, {});
      setVotes(initialVotes);
      }
      fetchCharacters();
    }, []);


  return (
    <div>
     
      <h2>Character Page</h2>
      <ImageSlide characters={characters}/>
      <CharacterVoting votes={votes} setVotes={setVotes} characters={characters}/>

    </div>
  )
}

export default CharacterPage