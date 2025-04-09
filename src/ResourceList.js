import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export function ResourceList(props) {
    const listToManage = (props.resources ?? []).map(resource => [uuidv4(), resource])
    const [resources, setResources] = useState(listToManage)

    function addResource(newResourceString) {
        let newEntry = [uuidv4(), newResourceString];
        setResources(resources.concat([newEntry]))
    }

    function onBlur(e) {
        if(e.target.id !== "New Resource" || e.target.value === "") {
            return;
        }
        addResource(e.target.value);
        e.target.value = ""
    }

    function onEnterPressed(e) {
        if (e.key !== "Enter") {
            return;
        }
        addResource(e.target.value);
        e.target.value = ""
    }

    return <div>
        <label htmlFor="text">Resource List:</label>
        <ul className="w3-ul">
            {resources.map((resource) => {
                return <li key={resource[0]}>{resource[1]}</li>
            })}
            <li><input
                type="text"
                name="new-resource"
                id="New Resource"
                placeholder="resource link"
                onBlur={onBlur}
                onKeyDown={onEnterPressed}/>
            </li>
        </ul>
    </div>
}