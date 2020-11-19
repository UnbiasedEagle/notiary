import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes, sortNotes } from '../actions/notesActions';
import { Link } from 'react-router-dom';
import Note from '../components/Note';

const NoteList = () => {
  const { notes } = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const onClickHandler = () => {
    dispatch(sortNotes());
  };

  return (
    <div className='mt-4'>
      <div className='d-flex mb-3 align-items-center justify-content-between'>
        <div className='d-flex align-items-center'>
          <h1>Notes</h1>
          <button onClick={onClickHandler} className='btn btn-info d-flex ml-3'>
            Created At{' '}
            <i className='fas align-self-center mt-1 ml-2 fa-sort-up'></i>
          </button>
        </div>

        <Link to='/notes/new' className='btn btn-primary btn-lg'>
          Create Note
        </Link>
      </div>
      <div className='mb-3'>
        {notes.map((note) => {
          return <Note key={note.id} note={note}></Note>;
        })}
      </div>
    </div>
  );
};

export default NoteList;
