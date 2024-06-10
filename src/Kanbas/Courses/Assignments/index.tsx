import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsSearch, BsPlus, BsGripVertical, BsTrash } from 'react-icons/bs';
import { deleteAssignment, setAssignments } from './reducer';
import "./index.css";
import AssignmentControl from './AssignmentControl';
import { IoEllipsisVertical } from 'react-icons/io5';
import { FaBook } from 'react-icons/fa';
import GreenCheckmark from './GreenCheckmark';
import * as client from './client';

export default function Assignments() {
    const { cid } = useParams<{ cid: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
    const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);

    const handleDelete = (aid: string) => {
        if (window.confirm('Are you sure you want to delete this assignment?')) {
            removeAssignment(aid);
        }
    };

    const removeAssignment = async (aid: string) => {
        await client.deleteAssignment(aid);
        dispatch(deleteAssignment(aid));
    };


    const fetchAssignments = async () => {
        const assignments = await client.getAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };

    useEffect(() => {
        fetchAssignments();
    }, []);


    return (

        <div className="container">
            {/* <AssignmentControl /> <br />

            <ul className="list-group">

                {courseAssignments.map((assignment: any) => (

                    <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <BsGripVertical className="me-2" />
                            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment.id}`} className="text-decoration-none">
                                {assignment.title}
                            </Link>
                        </div>
                        <div>
                            <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(assignment.id)}>
                                <BsTrash />
                            </button>
                        </div>
                    </li>
                ))}

            </ul> */}



            <div id="wd-assignments">
                <AssignmentControl /> <br />
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <div className='d-flex align-items-center'>
                                    <BsGripVertical className='fs-2 me-2' />
                                    <h4 className="d-inline mb-0">ASSIGNMENTS</h4>
                                </div>
                                <div>
                                    <BsPlus className='fs-2 me-2' />
                                    <IoEllipsisVertical />
                                </div>
                            </div>

                            {courseAssignments.map((assignment: any) => (
                                <ul className="list-group">
                                    <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <BsGripVertical className="me-2" />
                                            <FaBook className="me-3 text-success" />
                                            <div>
                                                <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment.id}`} className="text-decoration-none">
                                                    {assignment.title}
                                                </Link>

                                                <p className="mb-0"> <span className='text-danger'>Multiple Modules</span> | <b>Not available until</b> {assignment.availabledate}</p>
                                                <p className="mb-0"><b>Due</b> {assignment.duedate} | {assignment.points} pts</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(assignment.id)}>
                                                <BsTrash />
                                            </button>
                                            <GreenCheckmark />
                                            <IoEllipsisVertical className="ms-2" />
                                        </div>
                                    </li>
                                </ul>))}

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
