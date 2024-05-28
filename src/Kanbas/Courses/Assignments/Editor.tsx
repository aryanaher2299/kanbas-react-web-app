import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { useParams } from 'react-router';
import { assignments, courses } from '../../Database';
import EditorSubmissionType from './EditorSubmissionType';
import { Link } from 'react-router-dom';


export default function AssignmentEditor() {

  // const {assignment.id} = useParams();
  // console.log(`Assignment ID: ${assignmentid}`);

  // const courseAssignments = assignments.find((assignment) => assignment.id === assignmentid);

  const {cid} = useParams();

  const hashSegments = window.location.hash.split('/');
  const assignmentid = hashSegments[hashSegments.length - 1];
  
  const courseAssignments = assignments.find(assignment => assignment.id === assignmentid);


  if(!assignmentid){
    return (<h4>not found</h4>);
  }

  return (

    <div className="container mt-4">
        
        <form>

          <div className="row">
            <label htmlFor="assignmentName" className="col-form-label">Assignment Name</label>
          </div>
          <div className='row'>
            <input type="text" className="form-control" id="assignmentName" defaultValue = {courseAssignments?.title} />
          </div>

          <div className="row">
            <div className="col-sm-10">
              <textarea className="form-control" id="assignmentDescription" rows={5} >
                {courseAssignments?.description}
              </textarea>
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="points" className="col-sm-2 col-form-label">Points</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="points" defaultValue={courseAssignments?.points} />
            </div>
          </div>
          

          <div className="mb-3 row">
            <label htmlFor="assignmentGroup" className="col-sm-2 col-form-label">Assignment Group</label>
            <div className="col-sm-10">
              <select className="form-select" id="assignmentGroup" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="displayGradeAs" className="col-sm-2 col-form-label">Display Grade As</label>
            <div className="col-sm-10">
              <select className="form-select" id="displayGradeAs" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
              </select>
            </div>
          </div>

          <EditorSubmissionType />
          <br />

          <div className='container'>
            <div className='row'>
              <div className='col-sm-2'>
                <label htmlFor="Assign" className='col-sm-2 col-form-label'>Assign</label>
              </div>

              <div className='col-sm-8'>
                <div className='container border'>
                  <div className='row'>
                    <label htmlFor="assignTo" className="col-form-label">Assign To</label>
                  </div>

                  <div className='row ms-1 me-2'>
                    <input type="text" className="form-control" id="assignTo" defaultValue="Everyone" />
                  </div>

                  <div className='row'>
                    <label htmlFor="dueDate" className="col-form-label">Due</label>
                  </div>
                  <div className='row mb-2'>
                    <input type="date" className="form-control" id="dueDate" defaultValue={courseAssignments?.duedate} />
                  </div>

                  <div className='row'>
                    <div className='col'>
                      <label htmlFor='availableFrom' className='col-form-label'>Available From</label>
                    </div>
                    <div className='col align-self-end'>
                      <label htmlFor='until' className='col-form-label'>Until</label>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col align-self-start'>
                      <input type="date" className="form-control" id="availableFrom" defaultValue={courseAssignments?.availabledate} />
                    </div>
                    <div className='col align-self-end'>
                      <input type="date" className="form-control" id="Until" />
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="mb-3 row">
          <div className="col-sm-10 offset-sm-2">
            <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
            <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-primary">Save</Link>
          </div>
        </div>
        </form>

    </div>
  );
}
