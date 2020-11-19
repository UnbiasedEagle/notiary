import history from '../history';
import { v4 as uuidv4 } from 'uuid';

import {
  CREATE_NOTE,
  GET_NOTE,
  GET_NOTES,
  UPDATE_NOTE,
  DELETE_NOTE,
  SORT_NOTE,
} from './types';

export const createNote = (note) => {
  return (dispatch, getState) => {
    note.id = uuidv4();
    dispatch({
      type: CREATE_NOTE,
      payload: note,
    });
    const notes = getState().notes.notes;
    localStorage.setItem('notes', JSON.stringify(notes));
    history.push('/');
  };
};

export const getNotes = () => {
  return (dispatch, getState) => {
    dispatch({
      type: GET_NOTES,
      payload: getState().notes.notes,
    });
  };
};

export const getNote = (id) => {
  return {
    type: GET_NOTE,
    payload: id,
  };
};

export const sortNotes = () => {
  return (dispatch, getState) => {
    let sortedNotes = [...getState().notes.notes];

    sortedNotes.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    dispatch({
      type: SORT_NOTE,
      payload: sortedNotes,
    });
  };
};

export const updateNote = (note) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_NOTE,
      payload: note,
    });
    const notes = getState().notes.notes;
    localStorage.setItem('notes', JSON.stringify(notes));
    history.push('/');
  };
};

export const deleteNote = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_NOTE,
      payload: id,
    });
    const notes = getState().notes.notes;
    localStorage.setItem('notes', JSON.stringify(notes));
    history.push('/');
  };
};
