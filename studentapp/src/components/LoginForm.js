import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [Username, setUsername] = useState();
    const [Password, setPassword] = useState();
    const navigate = useNavigate();
    // const { state } = useLocation();
    // const { regarr } = state;
    var regarr=JSON.parse(sessionStorage.getItem("studentdata"));
 


    const auth = (event) => {
        
        event.preventDefault();
        for (let index = 0; index < regarr.length; index++) {
            if (regarr[index].Username == Username && regarr[index].Password == Password) {
                navigate("/studetails",{state:{logarr:regarr}});
                // sessionStorage.setItem("loginflag",true);
                break;
            }
            // sessionStorage.setItem("loginflag",false);
            document.getElementById("authdiv").innerHTML="wrong credential"

        }


    }

    return (
        <div className="loginContainer">
            <h3>Login Window</h3>
            <br></br>
            <form>
                <div>
                    <label>Username</label>
                    <input type="email" onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)}></input>
                </div>
                <button type="submit" onClick={auth}>Login</button>
            </form>
            <div id="authdiv"></div>
        </div>
    )
}
export default LoginForm;