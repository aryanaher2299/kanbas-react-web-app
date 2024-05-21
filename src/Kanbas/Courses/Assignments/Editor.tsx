import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';


export default function AssignmentEditor() {
  return (
    <div className="container mt-4">
      <form>
        <div className="row">
          <label htmlFor="assignmentName" className="col-form-label">Assignment Name</label>
        </div>

        <div className='row'>
          <input type="text" className="form-control" id="assignmentName" defaultValue="A1" />
        </div>

        <div className="row">
          <div className="col-sm-10">
            <textarea className="form-control" id="assignmentDescription" rows={5} >
              The assignment is available online Submit a
              link to the landing page of your Web
              application running on Netlify. The landing
              page should include the following: Your full
              name and section Links to each of the lab
              assignments Link to the Kanbas application
              Links to all relevant source code repositories
              The Kanbas application should include a link
              to navigate back to the landing page.
            </textarea>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="points" className="col-sm-2 col-form-label">Points</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="points" defaultValue="100" />
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


        <div className="container">
          <div className='row'>
            <div className='col-sm-2'>
              <label htmlFor="submissionType" className="col-form-label">Submission Type</label>
            </div>
            <div className='col-sm-10'>
              <div className='container border'>

                <div className='row'>
                  <div className='col-fill pt-3'>
                    <select className="form-select" id="submissionType" defaultValue="Online">
                      <option value="Online">Online</option>
                    </select>
                  </div>
                </div>

                <div className='row'>
                  <div className='col'>
                    <label className="col-form-label pt-0">Online Entry Options</label>
                  </div>

                  <div className='row'>
                    <fieldset className="mb-3 row">

                      <div className="col-sm-10">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="textEntry" />
                          <label className="form-check-label" htmlFor="textEntry">Text Entry</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="websiteUrl" defaultChecked />
                          <label className="form-check-label" htmlFor="websiteUrl">Website URL</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="mediaRecordings" />
                          <label className="form-check-label" htmlFor="mediaRecordings">Media Recordings</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="studentAnnotations" />
                          <label className="form-check-label" htmlFor="studentAnnotations">Student Annotations</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="fileUpload" />
                          <label className="form-check-label" htmlFor="fileUpload">File Upload</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <input type="date" className="form-control" id="dueDate" defaultValue="2024-05-13" />
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
                    <input type="date" className="form-control" id="availableFrom" defaultValue="2024-05-20" />
                  </div>
                  <div className='col align-self-end'>
                    <input type="date" className="form-control" id="Until" defaultValue="2024-05-20" />
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="mb-3 row">
          <div className="col-sm-10 offset-sm-2">
            <button type="button" className="btn btn-secondary me-2">Cancel</button>
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}
