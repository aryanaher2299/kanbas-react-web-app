import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as db from "../../Database";
import GradeControl from './GradeControl';
import { useParams } from 'react-router';

export default function Grades() {
    const { cid } = useParams();

    // Get the list of students enrolled in the current course
    const enrolledStudents = db.enrollments.filter(enrollment => enrollment.course === cid);
    const studentIds = enrolledStudents.map(enrollment => enrollment.user);

    // Get the assignments for the current course
    const courseAssignments = db.assignments.filter(assignment => assignment.course === cid);

    // Get the grades for the students in the current course
    const studentGrades = db.grades.filter(grade => studentIds.includes(grade.student));

    // Get the student details
    const studentDetails = db.users.filter(user => studentIds.includes(user._id));


    return (
        <div>
            <GradeControl />

            <div className="container-fluid mt-4">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">

                        <thead>
                            <tr>
                                <th scope="col">Student Name</th>
                                {courseAssignments.map(assignment => (
                                    <th key={assignment.id} scope="col">
                                        {assignment.title}<br />
                                        <small>Out of {assignment.points}</small>
                                    </th>
                                ))}
                            </tr>
                        </thead>


                        <tbody>
                            {studentDetails.map(student => (
                                <tr key={student._id}>
                                    <td>{student.firstName} {student.lastName}</td>
                                    {courseAssignments.map(assignment => {
                                        const grade = studentGrades.find(
                                            g => g.student === student._id && g.assignment === assignment.id
                                        );
                                        return <td key={assignment.id}>{grade ? grade.grade : 'N/A'}</td>;
                                    })}
                                </tr>
                            ))}
                        </tbody>


                    </table>
                </div>
            </div>
        </div>

    );
}
