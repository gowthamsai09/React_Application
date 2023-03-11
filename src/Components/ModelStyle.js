import { makeStyles, Modal, Paper} from "@mui/material";
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
    const classes = useStyles()
    const [modalStyle] = useState(getModalStyle)

    const[signup, setsignup] = useState(false)
    const[login, setLogin] = useState(false)

    return(
        <div>
            <Modal></Modal>
        </div>
    )

}

export default modalStyle