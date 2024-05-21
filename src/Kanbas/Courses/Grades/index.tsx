import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch, BsBoxArrowInDown, BsBoxArrowUp } from 'react-icons/bs';
import './index.css';
import { IoSettingsOutline } from "react-icons/io5";
import { FaFileImport } from "react-icons/fa";
import { FaFileExport } from 'react-icons/fa6';

export default function Grades() {
    return (
        <div>

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
                            <button className="btn btn-outline-secondary me-2" id='import'><FaFileImport className='me-2'/> Import</button>
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
                <button className="btn btn-outline-secondary dropdown-toggle"><BsBoxArrowUp /> Apply Filters</button>
                </div>

            </div>

            <div className="container-fluid mt-4">

                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Student Name</th>
                                <td scope="col">A1 SETUP<br /><small>Out of 100</small></td>
                                <td scope="col">A2 HTML<br /><small>Out of 100</small></td>
                                <td scope="col">A3 CSS<br /><small>Out of 100</small></td>
                                <td scope="col">A4 BOOTSTRAP<br /><small>Out of 100</small></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-danger'>Jane Adams</td>
                                <td>100%</td>
                                <td>96.67%</td>
                                <td>92.18%</td>
                                <td>66.22%</td>
                            </tr>
                            <tr>
                                <td className='text-danger'>Christina Allen</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td className='text-danger'>Samreen Ansari</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td className='text-danger'>Han Bao</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td><input type="text" className="form-control" defaultValue="88.03%" /></td>
                                <td>98.99%</td>
                            </tr>
                            <tr>
                                <td className='text-danger'>Mahi Sai Srinivas Bobbili</td>
                                <td>100%</td>
                                <td>96.67%</td>
                                <td>98.37%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td className='text-danger'>Siran Cao</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}
