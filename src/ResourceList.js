import {useState} from "react";
import {Resource} from "./Resource";

export function ResourceList(props) {
    const [resources, setResources] = useState((props.resources ?? []))

    function addResource(e) {
        let newEntry = ["", ""];
        setResources(resources.concat([newEntry]))
        console.log(resources)
        e.preventDefault()
    }


    return <div>
        <header>Resource List:</header>
        <br/>
        <button
            className="w3-button w3-green"
            title="Add Resource"
            onClick={addResource}> +</button>
        <div className="w3-container w3-flex w3-padding" title={"list of resources"}>
            {
                resources.map(([description, url], index) => {
                    return <div width="100%"
                        role={"listitem"}
                        id={"resource-" + index}
                        className="w3-padding w3-container"
                        key={index}>
                        <Resource width={"100%"} description={description} url={url}/>
                    </div>
                })
            }
        </div>
    </div>
}