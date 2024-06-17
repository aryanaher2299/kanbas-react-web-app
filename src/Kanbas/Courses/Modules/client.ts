import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

// export const deleteModule = async (moduleId: string) => {
//     const response = await axios
//         .delete(`${MODULES_API}/${moduleId}`);
//     return response.data;
// };

// export const createModule = async (courseId: string, module: any) => {
//     const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
//     return response.data;
// };

// export const updateModule = async (module: any) => {
//     const response = await axios.
//         put(`${MODULES_API}/${module._id}`, module);
//     return response.data;
// };

// export const findModulesForCourse = async (courseId: string) => {
//     const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
//     return response.data;
// };

export const findModulesByCourseId = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

export const deleteModule = async (moduleId: string) => {
    console.log(`Client: Deleting module with ID: ${moduleId}`);
    const response = await axios.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
};

export const updateModule = async (module: any) => {
    const response = await axios.put(`${MODULES_API}/${module._id}`, module);
    return response.data;
};

export const createModule = async (courseId: string, module: any) => {
    module._id = Date.now().toString(); // Use the current time as the ID
    module.course = courseId;
    const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
    return response.data;
};


