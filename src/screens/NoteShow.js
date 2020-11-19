import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNote } from '../actions/notesActions';

const NoteShow = ({ match }) => {
  const { selectedNote } = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNote(match.params.id));
  }, [dispatch, match.params.id]);

  if (!selectedNote) {
    return null;
  }

  return (
    <div className='mt-4'>
      <h1>{selectedNote.title}</h1>
      <h5>{selectedNote.description}</h5>
    </div>
  );
};

export default NoteShow;
