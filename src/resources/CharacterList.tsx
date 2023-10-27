type CharacterProps = {
    initialCharacters : CharacterType[]

}
type CharacterType = {id: number,
    name: string,
    status: string
    image: string}
export default function CharacterList(props: CharacterProps) {

    return (
        <div>
            <h2>Character List</h2>
            <ul>
                {props.initialCharacters.map((character) => (
                    <li key={character.id}><h2>{character.name}</h2>
                        <p>{character.status}</p>
                        <img src={character.image} alt="Character picture"/>
                    </li>
                ))}
            </ul>
        </div>
    );
}