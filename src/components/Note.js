import React from 'react';
import { Link } from 'react-router-dom';

const Note = ({ note }) => {
  return (
    <div className='card'>
      <div className='container'>
        <div className='d-flex stream justify-content-between align-items-center'>
          <div className='d-flex justify-content-center align-items-center'>
            <i className='fa-3x mx-3 fas fa-edit'></i>
            <div className='card-body'>
              <Link
                to={`/notes/${note.id}`}
                style={{
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  fontSize: '1.6rem',
                }}
                className='card-title'
              >
                {note.title}
              </Link>
              <p>
                <strong>Created At</strong>:{' '}
                {new Date(note.createdAt).toLocaleDateString()}
              </p>
              <p style={{ fontSize: '1.2rem' }} className='card-text'>
                {note.description}
              </p>
            </div>
          </div>

          <div>
            <Link to={`/notes/edit/${note.id}`} className='btn mx-3 btn-info'>
              Edit
            </Link>
            <Link to={`notes/delete/${note.id}`} className='btn btn-danger'>
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
