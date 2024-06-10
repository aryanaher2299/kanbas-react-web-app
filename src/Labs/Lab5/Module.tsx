import { useState } from "react";

export default function Module() {
    const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
    const [module, setModule] = useState({
        id: 1,
        name: "Web Development",
        description: "Web Development",
        course: "Web Development",
    });
    return (
        <div id="wd-module">
            <h2>Module</h2>
            <h4>Displaying Module</h4>
            <a
                href={`${REMOTE_SERVER}/lab5/module`}
                className="btn btn-primary me-2"
                id="wd-module-display">
                Display Module
            </a> <hr />
            <h4>Displaying Module Name</h4>
            <a
                href={`${REMOTE_SERVER}/lab5/module/name`}
                className="btn btn-primary me-2"
                id="wd-module-display-name">
                Display Module Name
            </a> <hr />
            <div id="wd-update-module-name" className="" >
                <h4> Editing Module Name</h4>
                <a href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}
                    className="btn btn-primary me-2 float-end"
                    id="wd-module-edit-name">
                    Update Name
                </a>
                <input
                    className="form-control mb-2 w-75"
                    id="wd-module-name"
                    value={module.name}
                    onChange={(e) => setModule({ ...module, name: e.target.value })}>
                </input>
            </div>
        </div >
    );
}