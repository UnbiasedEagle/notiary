import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../actions/notesActions';

import history from '../history';

const Modal = (props) => {
  const dispatch = useDispatch();

  return createPortal(
    <div onClick={() => history.push('/')} className='modal-container'>
      <div className='flex-container'>
        <div
          onClick={(e) => e.stopPropagation()}
          className='modal-content container'
        >
          <div className='modal-header'>
            <h5 className='modal-title'>Delete Note</h5>
            <button
              onClick={() => history.push('/')}
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <p>
              Are you sure you want to delete the note with title:{' '}
              <strong>{props.title}</strong>?
            </p>
          </div>
          <div className='modal-footer'>
            <button
              onClick={() => dispatch(deleteNote(props.id))}
              type='button'
              className='btn btn-danger'
            >
              Delete
            </button>
            <button
              onClick={() => history.push('/')}
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
