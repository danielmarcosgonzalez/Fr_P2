import { FunctionComponent } from "preact";

type CityProps ={
    name?:string,
    latitude?:number,
    longitude?:number,
    country?:string,
    population?:number,
    is_capital?:string
}

const City: FunctionComponent<CityProps>=(props)=>{
    const {name, latitude,longitude,country,population,is_capital} = props;
    return(
        <div class="cityContainer">
            
            <div class="cityName">Name: {name}</div>
            <hr class="cityLinea"></hr>
            <div class="cityLatitude">Latitude: {latitude}</div>
            <div class="cityLogitude">Longitude: {longitude}</div>
            <div class="cityCountry">Country: {country}</div>
            <div class="cityPopulation">Population: {population}</div>
            <div class="cityCapital">Is Capital: {is_capital}</div>
            
        </div>
    );
};

export default City;