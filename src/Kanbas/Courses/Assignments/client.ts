import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const getAssignmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${REMOTE_SERVER}/api/courses/${courseId}/Assignments`);
    return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${REMOTE_SERVER}/api/courses/${courseId}/Assignments`, assignment);
    return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${REMOTE_SERVER}/api/Assignments/${assignmentId}`);
    return response.data;
};

export const updateAssignment = async (assignment: any) => {
    const response = await axios.put(`${REMOTE_SERVER}/api/Assignments/${assignment._id}`, assignment);
    return response.data;
};
