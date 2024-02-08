import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from 'react-bootstrap/Button';

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'taskName') {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj['Name'] = taskName;
    taskObj['Description'] = description;
    save(taskObj);
  };

  const handleCancel = () => {
    setTaskName('');
    setDescription('');
    toggle(false);
  };

  const isSaveButtonDisabled = !taskName;

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={handleCancel}>Create Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          variant="outline-primary"
          onClick={handleSave}
          disabled={isSaveButtonDisabled}
        >
          Create
        </Button>{' '}
        <Button variant="outline-secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;