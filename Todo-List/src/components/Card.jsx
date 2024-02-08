import React, {useState} from 'react';
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#9D71BC",
            secondaryColor : "#E1C4F5"
        },
        {
            primaryColor : "#FF7F4D",
            secondaryColor : "#FFD8C9"
        },
        {
            primaryColor : "#9D71BC",
            secondaryColor : "#E1C4F5"
        },
        {
            primaryColor : "#FF7F4D",
            secondaryColor : "#FFD8C9"
        },
        {
            primaryColor : "#FF7F4D",
            secondaryColor : "#FFD8C9"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div className="card-container">
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <span style={{"margin-right": "10px"}}>
                        <i class="far fa-edit" style={{"color": colors[index%5].primaryColor, "cursor": "pointer"}} onClick={() => setModal(true)}></i>
                    </span>
                    <i class="fas fa-trash-alt" style={{"color": colors[index%5].primaryColor, "cursor": "pointer"}} onClick={handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
        </div>
    );
};

export default Card;