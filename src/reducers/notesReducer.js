import {
  CREATE_NOTE,
  GET_NOTES,
  GET_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  SORT_NOTE,
} from '../actions/types';

export const noteReducer = (
  state = { notes: [], selectedNote: null },
  action
) => {
  switch (action.type) {
    case CREATE_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case GET_NOTE:
      return {
        ...state,
        selectedNote: state.notes.find((note) => note.id === action.payload),
      };
    case UPDATE_NOTE:
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      const newNotes = [...state.notes];
      newNotes[index] = action.payload;
      return {
        ...state,
        notes: newNotes,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => {
          return note.id !== action.payload;
        }),
      };
    case SORT_NOTE:
      return {
        ...state,
        notes: action.payload,
      };
    default:
      return state;
  }
};
