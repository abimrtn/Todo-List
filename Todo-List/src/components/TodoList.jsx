// import React, {useEffect, useState} from 'react';
// import CreateTask from '../modals/createTask';
// import Card from './Card';
// import Button from 'react-bootstrap/Button';

// const TodoList = () => {
//     const [modal, setModal] = useState(false);
//     const [taskList, setTaskList] = useState([])
//     const [dateTime, setDateTime] = useState(new Date().toLocaleString())

//     useEffect(() => {
//         let arr = localStorage.getItem("taskList")
//         if(arr){
//             let obj = JSON.parse(arr)
//             setTaskList(obj)
//         }
//         const timer = setInterval(() => {
//             setDateTime(new Date().toLocaleString())
//         }, 1000)
//         return () => clearInterval(timer)
//     }, [])


//     const deleteTask = (index) => {
//         let tempList = taskList
//         tempList.splice(index, 1)
//         localStorage.setItem("taskList", JSON.stringify(tempList))
//         setTaskList(tempList)
//         window.location.reload()
//     }

//     const updateListArray = (obj, index) => {
//         let tempList = taskList
//         tempList[index] = obj
//         localStorage.setItem("taskList", JSON.stringify(tempList))
//         setTaskList(tempList)
//         window.location.reload()
//     }

//     const toggle = () => {
//         setModal(!modal);
//     }

//     const saveTask = (taskObj) => {
//         let tempList = taskList
//         tempList.push(taskObj)
//         localStorage.setItem("taskList", JSON.stringify(tempList))
//         setTaskList(taskList)
//         setModal(false)
//     }


//     return (
//         <>
//         <style type="text/css">
//         {`
//             .btn-flat {
//             background-color: #F4512C;
//             color: white;
//             }
//         `}
//       </style>
//             <div className = "header text-center d-flex justify-content-between">
//                 <div className = "date-time" >
//                 <p>{dateTime}</p>
//                 </div>
//                 <div className="header-todo">
//                     <h3>Todo List</h3>
//                 </div>
//                 <Button  variant="flat" onClick = {() => setModal(true)}>Create Task</Button>
//             </div>
//             <div className = "task-container d-flex justify-content-center">
//             {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
//             </div>
//             <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
//         </>
//     );
// };

// export default TodoList;

import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/createTask';
import Card from './Card';
import Button from 'react-bootstrap/Button';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [dateTime, setDateTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
        const timer = setInterval(() => {
            setDateTime(new Date().toLocaleString())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }

    return (
        <>
        <style type="text/css">
        {`
            .btn-flat {
            background-color: #F4512C;
            color: white;
            }


            .task-container {
                height: auto;
                width: auto;
                display: flex;
                flex-wrap: wrap;
                background-color: #ffffff;
                border: 1px solid #000000;
                border-radius: 50px;
                /* padding: 40px 50px; */
                padding-left: 30px;
                padding-top: 30px;
                margin: 50px;
            }

            @media screen and (max-width: auto) {
              .header-todo {
                width: 40%;
              }

              .date-time {
                width: 40%;
              }

              .task-container {
                width: auto;
              }
            }
        `}
      </style>
            <div className = "header text-center d-flex justify-content-between">
                <div className = "date-time" >
                <p>{dateTime}</p>
                </div>
                <div className="header-todo">
                    <h3>Todo List</h3>
                </div>
                <Button  variant="flat" onClick = {() => setModal(true)}>Create Task</Button>
            </div>
            <div className = "task-container d-flex justify-content-center">
            {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
            //         </>
    );
};

export default TodoList;