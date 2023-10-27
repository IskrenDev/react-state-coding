import { useState } from 'react'
import './App.css'

import { initialCharacters } from './resources/initialCharacters.ts';
import CharacterList from "./resources/CharacterList.tsx";

function App() {

    const [characters, setCharacters] = useState(initialCharacters);

    //const [count, setCount] = useState(0);

    return <CharacterList initialCharacters = {characters}/>

}
export default App
