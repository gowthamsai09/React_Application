import { makeStyles, Modal, Input} from "@mui/material";
import React, { useState } from "react";



function getModalStyle(){
    return{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
    };
}
const useStyles = makeStyles((theme) =>({
    paper:{
        position:'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #ABEBC6",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}))
const modalStyle = () =>{
    const classestyles = useStyles()
    const [modalStyle] = useState(getModalStyle)

    const[signup, setsignup] = useState(false)
    const[login, setLogin] = useState(false)

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[email, setEmail] = useState('')
    const[confirmPassword, ConfirmPass] = useState('')

    return(
        <div className="Style">
            <Modal open={signup} onClose={() => {setsignup(false)}}>
                <div style={modalStyle} className={classestyles}>
                    <form>
                        <center>
                        <a href><svg id="logo-85" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2L30 2C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z" fill="#5417D7"></path></svg></a>
                        </center>
                        <Input
                        placeholder="Name"
                        type='text'                  value={username}
                        onChange={(e)=>{setUsername(e.target.value)}}  
                        />
                        <Input
                        placeholder="Email"
                        type='email'                  value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}  
                        />
                        <Input
                        placeholder="Password"
                        type='password'              value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}  
                        />
                        <Input
                        placeholder="Confirm Password"
                        type='password'              value={confirmPassword}
                        onChange={(e)=>{ConfirmPass(e.target.value)}}  
                        />
                    </form>
                </div>
            </Modal>
        </div>
    )

}

export default modalStyle