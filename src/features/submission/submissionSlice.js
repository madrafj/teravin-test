import { createSlice } from "@reduxjs/toolkit"
import { addEmployee, addMember } from "../../app/db";

const initialState = {
  dataPribadi: {},
  riwayatPendidikan: [],
  pengalamanKerja: [],
  keahlian: []
}

export const submissionSlice = createSlice({
  name: 'submission',
  initialState,
  reducers: {
    addPersonal: (state, action) => ({
      ...state,
      dataPribadi: action.payload
    }),
    addPendidikan: (state, action) => ({
      ...state,
      riwayatPendidikan: [
        ...state.riwayatPendidikan,
        action.payload
      ]
    }),
    addPengalaman: (state, action) => ({
      ...state,
      pengalamanKerja: [
        ...state.pengalamanKerja,
        action.payload
      ]
    }),
    addKeahlian: (state, action) => ({
      ...state,
      keahlian: [
        ...state.keahlian,
        action.payload
      ]
    }),
    saveAndReset: state => {
      addEmployee(state)
      return initialState
    }
  }
});

export const { addPersonal, addPendidikan, addPengalaman, addKeahlian, saveAndReset } = submissionSlice.actions;

export const submissionData = state => state.submission;

export default submissionSlice.reducer;