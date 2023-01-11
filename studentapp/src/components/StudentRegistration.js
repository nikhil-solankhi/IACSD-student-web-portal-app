import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentRegistration = () => {
    const navigate=useNavigate();
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Name, setName] = useState("");
    const [RollNo, setRollNo] = useState("");
    var Student;
    var StudentArr= JSON.parse(sessionStorage.getItem("studentdata"));
    

    





    const submitFun=(event)=>{
        event.preventDefault();
        if(StudentArr==null){
            StudentArr=[];
        }
        Student={Name:Name,Username:Username,Password:Password,RollNo:RollNo};     
        console.log(Student);
        StudentArr.push(Student);
        console.log(StudentArr);
        sessionStorage.setItem("studentdata",JSON.stringify(StudentArr));
        var myarr = JSON.parse(sessionStorage.getItem("studentdata")) ;
        console.log("myarr");
        console.log(myarr);

        navigate("/loginform",{state:{regarr:StudentArr}});
    }
    
    return (
        <div className="Registration">
            <form>

                <div>
                <label>Name: </label>
                <input type="text"value={Name} onChange={e => setName(e.target.value)}></input>
                </div>
                <div>
                <label>Username: </label>
                <input type="email" value={Username} onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div>
                <label>Password: </label>
                <input type="password" value={Password} onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div>
                <label>RollNo: </label>
                <input type="text" value={RollNo} onChange={e => setRollNo(e.target.value)}></input>
                </div>
                <div>
                <button type="submit" onClick={submitFun}>Submit</button>
                </div>
                
                
                
               
               
            </form>
        </div>
    )
}
export default StudentRegistration;