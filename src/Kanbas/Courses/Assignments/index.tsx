import { BsGripVertical, BsPlus } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import './index.css';
import AssignmentControl from './AssignmentControl';
import { IoEllipsisVertical } from 'react-icons/io5';
import { FaCaretDown } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import GreenCheckmark from './GreenCheckmark';

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControl /> <br />

      <div className="container">

        <div className="row">
          <div className="col">
            <div className='d-flex flex-row'>
              <div className='d-flex align-items-start'>
                <BsGripVertical className='fs-2' />
              </div>
              <div className='d-flex align-items-start'>
                <h4 className="d-inline col-form-label">ASSIGNMENTS</h4>
              </div>
              <div className='d-flex align-items-end'>
                <span className="ms-2  bg-secondary border rounded">40% of Total</span>
                <BsPlus className='fs-2'/>
                <IoEllipsisVertical/>
              </div>
            </div>


            <ul className="list-group mt-3">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="me-2">
                  <div className="d-flex align-items-center">

                    <span className="me-2"><BsGripVertical /></span> 
                    <span className="me-3" style={{color: "green"}}><FaBook /></span> 
                    <div>
                      <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none">A1 - ENV + HTML</a>
                      <p className="mb-0"> <span className='text-danger'>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00 am |</p>
                      <p className="mb-0"><b>Due</b> May 13 at 11:59pm | 100 pts</p>
                    </div>
                  </div>
                </div>
                <GreenCheckmark/>
                <IoEllipsisVertical/>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="me-2">
                  <div className="d-flex align-items-center">
                    <span className="me-2"><BsGripVertical /></span>
                    <span className="me-3" style={{color: "green"}}><FaBook /></span> 
                    <div>
                      <a href="#/Kanbas/Courses/1234/Assignments/124" className="text-decoration-none">A2 - CSS + Bootstrap</a>
                      <p className="mb-0"><span className='text-danger'>Multiple Modules</span>  | <b>Not available until</b> May 13 at 12:00 am |</p>
                      <p className="mb-0"><b>Due</b> May 20 at 11:59pm | 100 pts</p>
                    </div>
                  </div>
                </div>
                <span className='content-align-end'><GreenCheckmark/></span>
                <IoEllipsisVertical/>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="me-2">
                  <div className="d-flex align-items-center">
                    <span className="me-2"><BsGripVertical /></span>
                    <span className="me-3" style={{color: "green"}}><FaBook /></span>
                    <div>
                      <a href="#/Kanbas/Courses/1234/Assignments/125" className="text-decoration-none">A3 - Javascript + React</a>
                      <p className="mb-0"><span className='text-danger'>Multiple Modules</span> <b>Not available until</b> May 20 at 12:00 am |</p>
                      <p className="mb-0"><b>Due</b> May 27 at 11:59pm | 100 pts</p>
                    </div>
                  </div>
                </div>
                <GreenCheckmark/>
                <IoEllipsisVertical/>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
