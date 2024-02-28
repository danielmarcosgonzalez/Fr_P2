import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import City from "../components/City.tsx";

type City ={
    name:string,
    latitude:number,
    longitude:number,
    country:string,
    population:number,
    is_capital:boolean,
}

type Data ={
    city?:string,
    results:City[]
}

export const handler: Handlers={
    GET: async(req:Request, cxt: FreshContext<unknown,Data>)=>{
        const url = new URL(req.url);
        const city = url.searchParams.get("city");
        if(!city){
            return cxt.render({results:[],city:""});
        }
        const response = await fetch(`https://api.api-ninjas.com/v1/city?name=${city}`,{ headers: { 'X-Api-Key': 'wJqQo4nBY/LZio5dX2GFEA==kIG3cdrBOUtZbJYP'}});
        if(response.status !==200){
            return cxt.render({results:[],city});
        }
        const data = await response.json();
        return cxt.render({results:data,city});
        

    }
};

const Page =(props: PageProps<Data>)=>{
    const rs = props.data;
    if(rs.city===""||rs.city===undefined){
        return(
            <body class="fondoCity">
                <form class="cityForm" method="get" action="/city">
                    Introduce una Ciudad: <input class="cityInput" type="text" name="city"></input>
                    <button class="cityButton" type="submit">Buscar</button>
                </form>
            </body>
        )
    }else{
        return(
            <body class="fondoCity">
                <form class="cityForm" method="get" action="/city">
                    Introduce una Ciudad: <input class="cityInput" type="text" name="city"></input>
                    <button class="cityButton" type="submit">Buscar</button>
                </form>
                <City name={rs.results.at(0)?.name} 
                        latitude={rs.results.at(0)?.latitude}
                        longitude={rs.results.at(0)?.longitude}
                        country={rs.results.at(0)?.country}
                        population={rs.results.at(0)?.population}
                        is_capital={rs.results.at(0)?.is_capital ? "Yes" : "No"}
                    />
    
                
            </body>
        )
    }

};

export default Page;