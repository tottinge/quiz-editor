import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Resource} from "./Resource";

export function ResourceList(props) {
    const [resources, setResources] = useState((props.resources ?? []))

    function addResource(e) {
        e.preventDefault()
        let newEntry = {description: "", url: "", uuid: uuidv4()};
        setResources(resources.concat([newEntry]))
    }

    function deleteResource(uuid) {
        var newState = resources.filter((resource) => resource.uuid !== uuid);
        setResources(newState);
    }

    function updateResource(targetResource) {
        const replacementList = resources.map((listedResource) => {
            return (listedResource.uuid === targetResource.uuid) ? targetResource : listedResource
        })
        setResources(replacementList)
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
        <div className="resource-container w3-padding"
             title="list of resources">
            {
                resources.map((resource) => {
                    return <div
                        role={"listitem"}
                        key={resource.uuid}
                        id={resource.uuid}
                        className="resource-card w3-card w3-padding w3-panel"
                    >
                        <button
                            className="centered-button w3-button w3-green"
                            title="Remove Resource"
                            onClick={(e) => {
                                e.preventDefault();
                                deleteResource(resource.uuid)
                            }}>
                            &times;
                        </button>
                        <Resource description={resource.description} url={resource.url} uuid={resource.uuid}
                                  parentUpdate={(resource) => updateResource(resource)}/>
                    </div>
                })
            }
        </div>
    </div>
}