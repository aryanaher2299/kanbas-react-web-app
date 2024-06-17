import Navigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
// import * as db from "./Database";
import { useEffect, useState } from "react";
import * as client from "./Courses/client";
import { Provider } from "react-redux";
import store from "./store";
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";



export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);

  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", imgsrc: "/images/rockprop.jpeg", description: "New Description",

  });

  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([newCourse, ...courses]);
  };

  const findAllCourses = async () => {
    try {
      const fetchedCourses = await client.findAllCourses();
      setCourses(fetchedCourses);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
  useEffect(() => {
    findAllCourses();
  }, []);


  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };

  
  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  return (
    <Provider store={store}>
      <div id="wd-kanbas" className="h-100">
        <div className="d-flex h-100">
          <div className="d-none d-md-block bg-black">
            <Navigation />
          </div>
          <div className="flex-fill p-4">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account/*" element={<Account />} />
              <Route path="Dashboard" element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse} />
                </ProtectedRoute>}
              />
              <Route path="Courses/:cid/*" element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>);
}