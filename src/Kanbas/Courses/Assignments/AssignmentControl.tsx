import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
export default function AssignmentControl() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">

            <div className="d-flex flex-row">
                <div className="col-sm-6">
                    <input type="text" className="form-control" id="searchAssignments" placeholder="Search ..." />
                </div>
                
                <div className="col">
                <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-2 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </button>

                <div className="d-inline float-end">
                    <button id="wd-add-group-btn" className="btn btn-lg btn-secondary" type="button">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Group
                    </button>
                </div>
                </div>

            </div>





        </div>
    );
}
