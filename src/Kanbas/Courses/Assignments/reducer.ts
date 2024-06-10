import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {

    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        ...assignment,
        _id: new Date().getTime().toString(),
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment.id !== assignmentId);
    },
    
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a.id === assignment.id ? { ...a, ...assignment } : a
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a.id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
