import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNote } from '../actions/notesActions';
import Modal from '../components/Modal';

const NoteDelete = ({ match }) => {
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
      <Modal title={selectedNote.title} id={selectedNote.id}></Modal>
    </div>
  );
};
export default NoteDelete;
