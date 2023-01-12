import { Link, useLocation, useNavigate } from "react-router-dom";

const StudentDetails = () => {
    const { state } = useLocation();
    const { logarr } = state;
    const navigate=useNavigate();

    

    
    const renderList=()=>{
        return logarr.map((stud)=>{
            return <tr key={stud.RollNo}><td>{stud.RollNo}</td><td>{stud.Name}</td><td>{stud.Username}</td></tr>
        });
  }

    return <div>
        <h2>Student Details</h2> 
       <li className="NavLi">
                    <Link to={"/loginform"}>Logout</Link>
                </li>
        <table border="2" cellPadding="5px" cellSpacing="5px"><thead>
        <tr><th>RollNo</th><th>Name</th><th>Email</th></tr>
        </thead>
        <tbody>
            {renderList()}
        </tbody>
        </table>
        
                    <Link to={"/register"}><button type="button">Add new student</button>  </Link>
               
    </div>
}
export default StudentDetails;