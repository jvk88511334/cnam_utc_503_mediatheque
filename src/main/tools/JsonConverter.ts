import {Mediatheque} from "../entities/Mediatheque";

export class JsonConverter {
    //methods

    /**
     * Méthode permettant de fabriquer un JSON à partir d'un objet typescript
     * @param object l'objet typescript à transformer en JSON
     * @link https://alligator.io/js/json-parse-stringify/
     */
    public static createJsonFromObject(object: Object): string{
        const myObjectInString = JSON.stringify(object);
        console.log(myObjectInString); //Affichage console du JSON
        return myObjectInString;
    }

    /**
     * Méthode permettant de refabriquer la médiathèque à partir d'un JSON
     * @param json le fichier JSON sous forme de chaine de caractères
     * @param mediatheque l'objet médiathèque à retourner
     */
    public static createMediathequeObjectFromJson(json: string, mediatheque: Mediatheque): Mediatheque{
        //Création d'un objet Mediatheque vide
        mediatheque = JSON.parse(json);
        return mediatheque;
    }
}