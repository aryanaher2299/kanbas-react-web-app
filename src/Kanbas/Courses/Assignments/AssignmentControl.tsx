import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
export default function AssignmentControl() {
    const navigate = useNavigate();
    const { cid } = useParams();
    return (
        <div id="wd-modules-controls" className="text-nowrap">

            <div className="d-flex flex-row">
                <div className="col-sm-6">
                    <input type="text" className="form-control" id="searchAssignments" placeholder="Search ..." />
                </div>

                <div className="col">
                    <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-2 float-end"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}>
                        + Add Assignment
                    </button>
                    <div className="d-inline float-end">
                        <button id="wd-add-group-btn" className="btn btn-lg btn-secondary" type="button">
                            + Group
                        </button>



                    </div>
                </div>

            </div>







        </div>
    );
}
