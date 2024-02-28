import { FunctionComponent } from "preact";

type UserProps={
    name:string,
    email:string,
    sex:string,
    address:string,
};

const User: FunctionComponent<UserProps> =(props)=>{
    const {name,email,sex,address}=props;
    return(
        
        <div class="userContainer">
            <div class="userName">{name}</div>
            <hr class="userLinea"></hr>
            <div class="userEmail">{email}</div>
            <div class="userSex">{sex}</div>
            <div class="userAddress">{address}</div>
        </div>
    
    );
};

export default User;