import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../actions/notesActions';

const NoteCreate = () => {
  const [note, setNote] = useState({
    title: '',
    description: '',
  });

  const dispatch = useDispatch();

  const [message, setMessage] = useState('');

  const onInputChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!note.title || !note.description) {
      setMessage('Please enter all the fields');
    } else {
      dispatch(
        createNote({
          title: note.title,
          description: note.description,
          createdAt: Date.now(),
        })
      );
    }
  };

  return (
    <div className='mt-4 row'>
      <div className='col-md-8 offset-md-2'>
        <h1 className='mb-3'>Create Note</h1>
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
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NoteCreate;
