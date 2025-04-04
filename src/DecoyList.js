import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export function DecoyList(props) {
    const listToManage = (props.decoys ?? []).map(decoy => [uuidv4(), decoy])
    console.log(listToManage)

    // Maybe make a list of [uuid,text] tuples and use that as state?
    const [decoys, setDecoys] = useState(listToManage)

    function changeList(e) {
        // We need to recognize changes to an existing field, by id?
        // setDecoys(decoys.concat(e.target.value));
        console.log(e.target.id)
        console.log(e.target.value)

        // Find the list item to append to, or create
    }

    return <div>
        <h2>Decoys</h2>
        <ul className="w3-ul">
            {decoys.map((decoy) => {
                return <li key={decoy[0]}>{decoy[1]}</li>
            })}
            <li><input
                type="text"
                name="new-decoy"
                id={uuidv4()}
                placeholder="New Decoy"
                onInput={changeList} />
            </li>
        </ul>
    </div>
}