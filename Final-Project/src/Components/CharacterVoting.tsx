import React, { useState } from 'react'

function CharacterVoting({votes, setVotes, characters}) {

  
    const upVotes = (id) => {
      setVotes(prev => ({
        ...prev,
        [id]: prev[id] + 1
      }))
    }

  
  return (
    <div>
    <h5 style={{margin: '2em'}}>Vote for your favorite character!</h5>
    
    <div style={{display:"flex", flexWrap:'wrap', gap: '30px', justifyContent: 'center'}}>
      
      {characters.map((char) => (
      <div key={char.id} style={{ border: '1px solid', padding: '10px', textAlign: 'center', backgroundColor:'lightSteelBlue', marginBottom: '2em'}}>
        <p>{char.name}</p>

      <button onClick={() => upVotes(char.id)}>Vote</button>
      <p>Total votes: {votes[char.id]}</p>
      </div>
      ))}
    </div>
    </div>
  )
}

export default CharacterVoting