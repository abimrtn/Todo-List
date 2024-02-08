import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from 'react-bootstrap/Button';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState(taskObj.Name);
  const [description, setDescription] = useState(taskObj.Description);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'taskName') {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
  }, [taskObj]);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj['Name'] = taskName;
    tempObj['Description'] = description;
    updateTask(tempObj);
  };

  const handleCancel = () => {
    toggle(false);
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={handleCancel}>Update Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>
          <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description" />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline-primary" onClick={handleUpdate}>Update</Button>{' '}
        <Button variant="outline-secondary" onClick={handleCancel}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;