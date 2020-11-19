import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNote, updateNote } from '../actions/notesActions';

const NoteEdit = ({ match }) => {
  const [note, setNote] = useState({
    title: '',
    description: '',
  });

  const dispatch = useDispatch();

  const { selectedNote } = useSelector((state) => state.notes);

  const [message, setMessage] = useState('');

  const onInputChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getNote(match.params.id));
  }, [dispatch, match.params.id]);

  useEffect(() => {
    if (selectedNote) {
      setNote({
        title: selectedNote.title,
        description: selectedNote.description,
      });
    }
  }, [selectedNote]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!note.title || !note.description) {
      setMessage('Please enter all the fields');
    } else {
      const newNote = {
        ...selectedNote,
        title: note.title,
        description: note.description,
        updatedAt: Date.now(),
      };
      dispatch(updateNote(newNote));
    }
  };

  return (
    <div className='mt-4 row'>
      <div className='col-md-8 offset-md-2'>
        <h1 className='mb-3'>Update Note</h1>
      </div>
      <div className='col-md-8 offset-md-2'>
        {message && <div className='alert alert-danger'>{message}</div>}
        <form onSubmit={onFormSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              value={note.title}
              onChange={onInputChange}
              name='title'
              type='text'
              id='title'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea
              onChange={onInputChange}
              name='description'
              value={note.description}
              id='description'
              className='form-control'
            ></textarea>
          </div>
          <button className='btn btn-primary'>Edit</button>
        </form>
      </div>
    </div>
  );
};

export default NoteEdit;
