export default function EditorSubmissionType() {
    return (
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
    );
}