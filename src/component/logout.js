import {GoogleLogout} from "react-google-login";

const clientId = "216393743423-7ra1hjhhr7feaj6r1737vmge3pti5704.apps.googleusercontent.com";

function Logout(){
    const onSuccess = ()=>{
        console.log("Logout successful ! ")
    }
    return(
        <div id="sigOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;