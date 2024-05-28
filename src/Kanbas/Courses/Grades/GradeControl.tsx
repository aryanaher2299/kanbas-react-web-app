import { FaFileExport, FaFileImport } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaFilterSolid } from "react-icons/lia";

export default function GradeControl() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='d-flex flex-row-reverse'>
                    <div>
                        <IoSettingsOutline className='fs-2' />
                    </div>
                    <div>
                        <button className="btn btn-outline-secondary dropdown-toggle" id='export'><FaFileExport className='me-2' /> Export</button>
                    </div>
                    <div>
                        <button className="btn btn-outline-secondary me-2" id='import'><FaFileImport className='me-2' /> Import</button>
                    </div>
                </div>
            </div>
            <br />
            <div className='row'>
                <div className='col-sm-4'>
                    <label htmlFor='text-student-names' className='col-form-label'>Student Names</label>
                </div>

                <div className='col-sm-4'>
                    <label htmlFor='text-assignment-names' className='col-form-label'>Assignment Names</label>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <input type="text" className="form-control" id='text-student-names' placeholder="Search Students" />
                </div>
                <div className='col-sm-4'>
                    <input type="text" className="form-control" id='text-assignment-names' placeholder="Search Assignments" />
                </div>
            </div>

            <div className='row-2'>
                <button className="btn btn-outline-secondary dropdown-toggle"><LiaFilterSolid /> Apply Filters</button>
            </div>
        </div>
    );
}