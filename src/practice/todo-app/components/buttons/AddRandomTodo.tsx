import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRandomTodo, hideRandomModal } from '../../actions';
import Modal from './Modal';

const AddRandomTodo = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const randomTodo = useSelector((state) => state.randomReducer.randomTodo);
  const showModal = useSelector((state) => state.randomReducer.showModal);

  const handleAddRandomTodo = () => {
    const randomTodo = todos[Math.floor(Math.random() * todos.length)];
    dispatch(addRandomTodo(randomTodo));
  };

  const handleCloseModal = () => {
    dispatch(hideRandomModal());
  };

  return (
    <div>
      <button onClick={handleAddRandomTodo} style={{ marginTop: '4px' }}>
        Add Random Todo
      </button>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        onAddRandomTodo={handleAddRandomTodo}
      >
        {randomTodo && (
          <div>
            <h2>Random Todo</h2>
            <p style={{ color: '#888' }}>{randomTodo.content}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AddRandomTodo;
