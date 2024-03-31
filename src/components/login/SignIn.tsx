import { UseDispatch, useDispatch } from "react-redux";
import {userLogin} from "../../features/login";
import { useState } from "react";

function SignIn(){
    const [userName, setUserName] = useState(' ')
    const dispatch = useDispatch();

    return (
        <form onSubmit={()=>{}} className="space-x-3 m-12">

        </form>
    )
}