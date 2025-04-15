import {useState} from "react";
import {Resource} from "./Resource";

export function ResourceList(props) {
    const [resources, setResources] = useState((props.resources ?? []))

    function addResource(e) {
        e.preventDefault()
        let newEntry = ["", ""];
        setResources(resources.concat([newEntry]))
        console.log("added", resources)
    }

    function deleteResource(index) {
        console.log("deleting", index)
        var newState = resources.toSpliced(index, 1);
        console.log("post splice", newState)
        setResources(newState);
    }

    function updateResource(index, resource){
        console.log("updating parent", index, resource)
        const newList = [
            ...resources.slice(0,index),
            [resource.description, resource.url],
            ...resources.slice(index+1)
            ]
        // setResources(newList)
        console.log("newList", newList)
        setResources(newList)
    }

    return <div>
        <header>Resource List:</header>
        <br/>
        <button
            className="w3-button w3-green"
            title="Add Resource"
            onClick={addResource}>
            Add
        </button>
        <div className="w3-container w3-flex w3-padding">
            {
                resources.map(([description, url], index) => {
                    return <div
                                role={"listitem"}
                                id={"resource-" + index}
                                className="w3-card  w3-padding w3-container"
                                key={index}>
                        <Resource description={description} url={url} parentUpdate={(resource) => updateResource(index,resource)}  />
                        <button
                            className="w3-button w3-teal w3-block"
                            onClick={(e) => {
                                e.preventDefault();
                                deleteResource(index)
                            }}>
                            Remove
                        </button>
                    </div>
                })
            }
        </div>
    </div>
}