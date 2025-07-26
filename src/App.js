import {useState} from "react"
import {useEffect} from "react"
import './style.css';
function App()
{
    let[state,setState]=useState("");
    let[array,setArray]=useState([]);
    let ti="To Do App"
    useEffect(()=>{document.title=ti},[ti])
    function change(e)
    {
        setState(e.target.value);
    }
    function changeStatus(TaskDone)
    {
        setArray((prev)=>prev.map((work)=>work.task=== TaskDone ? {...work,status:work.status==="Done"? "Not Completed" : "Done"} : work))
    }

    function DeleteStatus(todel)
    {
        setArray(prev=>prev.filter((work)=>work.task!==todel));
    }
    function click()
    {
       if (state != null && state.trim() !== "") {
        setArray((prev) => [
            ...prev,
            { task: state, status: "Not Completed" }
        ]);
        alert("Task Added Successfully");
        setState("");
    }
    else
    {
        alert(`Please Enter the Task`)
    }
    }
    return(
        <div className="outer">
            <header><h1>To Do List</h1></header>
            <div className="textdiv">
                <label htmlFor="userlist">
                    <h2 className="heading1">Enter the work  here</h2>
                    <input value={state} type="text" id="userlist" placeholder="Work  Please..." onChange={change}/>
                    <button id="ButtonADD" onClick={click}>Add</button>
                </label>
            </div>
            <div className="output">
                <h3>Work to Do</h3>
                <table>
                {array.sort((a, b) =>a.task.localeCompare(b.task)).map((out) => (
                <tr key={out.task}>
                    <td>{out.task.toUpperCase()}</td>
                    <td>{out.status.toUpperCase()}</td>
                    <td><button className="b11" id="b1" onClick={() => changeStatus(out.task)}>Update Status</button></td>
                    <td><button className="b11" id="b2" onClick={() => DeleteStatus(out.task)}>Delete</button></td>
                    </tr>
                ))}
                </table>

            </div>
        </div>
    )
}
export default App;