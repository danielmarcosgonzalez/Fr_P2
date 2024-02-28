import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Dog from "../components/Dog.tsx";

type Dog ={
    image_link:string,
    name:string,
    max_height_male:number,
    max_height_female:number,
    max_weight_male:number,
    max_weight_female:number,
    good_with_strangers:number,
    good_with_children:number,
    good_with_other_dogs:number,
}

type Data ={
    dog?:string,
    results:Dog[]
}

export const handler: Handlers={
    GET: async(req:Request, cxt: FreshContext<unknown,Data>)=>{
        const url = new URL(req.url);
        const dog = url.searchParams.get("dog");
        if(!dog){
            return cxt.render({results:[],dog:""});
        }
        const response = await fetch(`https://api.api-ninjas.com/v1/dogs?name=${dog}`,{ headers: { 'X-Api-Key': 'wJqQo4nBY/LZio5dX2GFEA==kIG3cdrBOUtZbJYP'}});
        if(response.status !==200){
            return cxt.render({results:[],dog});
        }
        const data = await response.json();
        return cxt.render({results:data,dog});
        

    }
};


const Page =(props: PageProps<Data>)=>{
    const rs = props.data;
    if(rs.dog===""||rs.dog===undefined){
        return(
            <body class="fondoDog">
                <form class="dogForm" method="get" action="/dog">
                    Introduce un Perro: <input class="dogInput" type="text" name="dog"></input>
                    <button class="dogButton" type="submit">Buscar</button>
                </form>
            
            </body>
        )
    }else{
        return(
            <body class="fondoDog">
                <form class="dogForm"method="get" action="/dog">
                    Introduce un Perro: <input class="dogInput" type="text" name="dog"></input>
                    <button class="dogButton"type="submit">Buscar</button>
                </form>
            
                <Dog image_link={rs.results.at(0)?.image_link} 
                name={rs.results.at(0)?.name} 
                max_height_male={rs.results.at(0)?.max_height_male}
                max_height_female={rs.results.at(0)?.max_height_female}
                max_weight_male={rs.results.at(0)?.max_height_male}
                max_weight_female={rs.results.at(0)?.max_weight_female}
                good_with_strangers={rs.results.at(0)?.good_with_strangers}
                good_with_children={rs.results.at(0)?.good_with_children}
                good_with_other_dogs={rs.results.at(0)?.good_with_other_dogs}
                />
            
            </body>
        )
    }
};

export default Page;