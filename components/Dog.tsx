import { FunctionComponent } from "preact";

type DogProps ={
    image_link?:string,
    name?:string,
    max_height_male?:number,
    max_height_female?:number,
    max_weight_male?:number,
    max_weight_female?:number,
    good_with_strangers?:number,
    good_with_children?:number,
    good_with_other_dogs?:number,
};

const Dog: FunctionComponent<DogProps> =(props) =>{
    const {image_link,name,max_height_male,max_height_female,max_weight_male,
        max_weight_female,good_with_strangers,good_with_children,
        good_with_other_dogs} = props;

    return(
        <div class="dogContainer">
            <div class="dogImgCon">
                <img class="img-dog" src={image_link}/>
            </div>
            <div class="dogLisCon">
                <ul class="dogLis">
                    <li>Nombre: {name}</li>
                    <li>Max altura macho: {max_height_male} cm</li>
                    <li>Max altura hembra: {max_height_female} cm</li>
                    <li>Max peso macho: {max_weight_male} kg</li>
                    <li>Max peso hembra: {max_weight_female} kg</li>
                    <li>Ranking bueno con estraños: {good_with_strangers}</li>
                    <li>Ranking bueno con niños: {good_with_children}</li>
                    <li>Ranking bueno con perros: {good_with_other_dogs}</li>

                </ul>
            </div>

        </div>
    );
};

export default Dog;