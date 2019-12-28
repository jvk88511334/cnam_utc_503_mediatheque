import {Mediatheque} from "../entities/Mediatheque";

export class JsonConverter {
    //methods

    /**
     * Méthode permettant de fabriquer un JSON à partir d'un objet typescript
     * @param object l'objet typescript à transformer en JSON
     * @link https://alligator.io/js/json-parse-stringify/
     */
    public createJsonFromObject(object: Object): string{
        const myObjectInString = JSON.stringify(object);
        console.log(myObjectInString); //Affichage console du JSON
        return myObjectInString;
    }

    public createMediathequeObjectFromJson(json: string, mediatheque: Mediatheque): void{
        JSON.parse(json, (key, value) => {
            //TODO construire l'objet JSON en parsant les keys du JSON récupéré : faire un TU
        })
    }
}