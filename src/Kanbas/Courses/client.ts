import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const updateCourse = async (course: any) => {
    const response = await axios.put(`${COURSES_API}/${course._id}`, course);
    return response.data;
};

export const deleteCourse = async (id: string) => {
    const response = await axios.delete(`${COURSES_API}/${id}`);
    return response.data;
};

export const createCourse = async (course: any) => {
    const response = await axios.post(COURSES_API, course);
    return response.data;
};

export const findAllCourses = async () => {
    try {
        const response = await axios.get(COURSES_API);
        return response.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};