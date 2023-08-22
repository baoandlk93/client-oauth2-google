import {GoogleLogin} from "react-google-login";

const clientId = "216393743423-7ra1hjhhr7feaj6r1737vmge3pti5704.apps.googleusercontent.com";
function Login(){
    const onSuccess = (res) =>{
        console.log("Login success! Current user: ",res)
    }
    const onFailure = (res) =>{
        console.log("Login failed! res: ",res)
    }
    return(
        <div id="signInButton">
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn = {true}
            />
                
        </div>
    )
}
export default Login;