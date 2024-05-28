import { BsGripVertical, BsPlus } from 'react-icons/bs';
import { FaBook } from 'react-icons/fa';
import { IoEllipsisVertical } from 'react-icons/io5';
import './index.css';
import AssignmentControl from './AssignmentControl';
import GreenCheckmark from './GreenCheckmark';
import { useParams } from 'react-router';
import { assignments } from '../../Database';
import { Link } from 'react-router-dom';

export default function Assignments() {

  const { cid } = useParams();
  const courseAssignments = assignments.filter((assignment) => assignment.course === cid);

  return (
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

            {assignments.map((assignment) =>
            
            (<ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2" />
                  <FaBook className="me-3 text-success" />
                  <div>
                    <Link
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment.id}`}
                      className="text-decoration-none"
                    >
                      {assignment.title}
                    </Link>

                    <p className="mb-0"> <span className='text-danger'>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00 am |</p>
                    <p className="mb-0"><b>Due</b> May 13 at 11:59pm | 100 pts</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <GreenCheckmark />
                  <IoEllipsisVertical className="ms-2" />
                </div>
              </li>
            </ul>))}

          </div>
        </div>
      </div>
    </div>
  );
}
