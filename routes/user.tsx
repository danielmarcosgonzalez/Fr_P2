import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import User from "../components/User.tsx";

type User ={
    name:string,
    email:string,
    sex:string,
    address:string,
}

export const handler: Handlers={
    GET: async(req:Request, cxt:FreshContext<unknown,User>)=>{
        const response = await fetch(`https://api.api-ninjas.com/v1/randomuser`,{ headers: { 'X-Api-Key': 'wJqQo4nBY/LZio5dX2GFEA==kIG3cdrBOUtZbJYP'}});
        const data = await response.json();
        return cxt.render(data);
    }
};

const Page =(props:PageProps<User>)=>{
    const user = props.data;
    return(
        <body class="fondoUser">
        <User name={user.name} email={user.email} sex={user.sex} address={user.address}/>
        </body>
    )
};
export default Page;

