import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Assignments from './Assignments';
import AssignmentEditor from './Editor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Kanbas/Courses/:cid/Assignments" element={<Assignments />} />
        <Route path="/Kanbas/Courses/:cid/Assignments/:assignmentid" element={<AssignmentEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
