import React from 'react';
import { BsGripVertical, BsPlus } from 'react-icons/bs';
import { FaCheckCircle, FaBook } from 'react-icons/fa';
import { IoEllipsisVertical } from 'react-icons/io5';
import './index.css';
import AssignmentControl from './AssignmentControl';
import GreenCheckmark from './GreenCheckmark';

export default function Assignments() {
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
                <span className="ms-2 badge bg-secondary">40% of Total</span>
              </div>
              <div>
                <BsPlus className='fs-2 me-2' />
                <IoEllipsisVertical />
              </div>
            </div>

            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2" />
                  <FaBook className="me-3 text-success" />
                  <div>
                    <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none">A1 - ENV + HTML</a>
                    <p className="mb-0"> <span className='text-danger'>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00 am |</p>
                    <p className="mb-0"><b>Due</b> May 13 at 11:59pm | 100 pts</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <GreenCheckmark />
                  <IoEllipsisVertical className="ms-2" />
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2" />
                  <FaBook className="me-3 text-success" />
                  <div>
                    <a href="#/Kanbas/Courses/1234/Assignments/124" className="text-decoration-none">A2 - CSS + Bootstrap</a>
                    <p className="mb-0"><span className='text-danger'>Multiple Modules</span>  | <b>Not available until</b> May 13 at 12:00 am |</p>
                    <p className="mb-0"><b>Due</b> May 20 at 11:59pm | 100 pts</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <GreenCheckmark />
                  <IoEllipsisVertical className="ms-2" />
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2" />
                  <FaBook className="me-3 text-success" />
                  <div>
                    <a href="#/Kanbas/Courses/1234/Assignments/125" className="text-decoration-none">A3 - Javascript + React</a>
                    <p className="mb-0"><span className='text-danger'>Multiple Modules</span> <b>Not available until</b> May 20 at 12:00 am |</p>
                    <p className="mb-0"><b>Due</b> May 27 at 11:59pm | 100 pts</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <GreenCheckmark />
                  <IoEllipsisVertical className="ms-2" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
