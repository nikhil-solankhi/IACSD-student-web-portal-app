import { useLocation } from "react-router-dom";

const StudentDetails = () => {
    const { state } = useLocation();
    const { logarr } = state;

    

    
    const renderList=()=>{
        return logarr.map((stud)=>{
            return <tr key={stud.RollNo}><td>{stud.RollNo}</td><td>{stud.Name}</td><td>{stud.Username}</td></tr>
        });
  }

    return <div>
        <h2>Student Details</h2> 
        <table border="2" cellPadding="5px" cellSpacing="5px"><thead>
        <tr><th>RollNo</th><th>Name</th><th>Email</th></tr>
        </thead>
        <tbody>
            {renderList()}
        </tbody>
        </table>
    </div>
}
export default StudentDetails;