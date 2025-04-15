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
        <div className="w3-container w3-flex w3-padding" title="list of resources">
            {
                resources.map((resource) => {
                    return <div
                        role={"listitem"}
                        key={resource.uuid}
                        id={resource.uuid}
                        className="w3-card  w3-padding w3-container"
                    >
                        <Resource description={resource.description} url={resource.url} uuid={resource.uuid}
                                  parentUpdate={(resource) => updateResource(resource)}/>
                        <button
                            className="w3-button w3-teal w3-block"
                            title="Remove Resource"
                            onClick={(e) => {
                                e.preventDefault();
                                deleteResource(resource.uuid)
                            }}>
                            Remove
                        </button>
                    </div>
                })
            }
        </div>
    </div>
}