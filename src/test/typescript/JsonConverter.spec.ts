import {Borrower} from "../../main/entities/Borrower";
import {DiscId} from "../../main/entities/subentities/Identifier";
import {MediaTypeCD} from "../../main/entities/subentities/MediaType";
import {GendersCD} from "../../main/entities/subentities/Genders";
import {Media} from "../../main/entities/Media";
import {Mediatheque} from "../../main/entities/Mediatheque";
import {JsonConverter} from "../../main/tools/JsonConverter";

describe('Test d\'export de la mediatheque en JSON', () => {
    //Création de deux empruteurs
    let borrower1 = new Borrower(13, 'Luke', 'Lucky', 'luckyluke@yahooOuOu.com');
    let borrower2 = new Borrower(78, 'Lecter', 'Hannibal', 'psycoFromNY@anonymous.org');
    //Création d'un identifiant
    let identifier = new DiscId(56090);
    //Création d'un type de media : CD
    let mediatype1 = new MediaTypeCD('Reworked', 'Snow Patrol', GendersCD.Rock, 'EPIC', 90);
    //Création d'un média
    let media1 = new Media(mediatype1, identifier, 4, 0, new Date());

    //Creation de la mediatheque
    let mediatheque = new Mediatheque();

    //Ajout d'un emprunteur à la médiathèque
    mediatheque.addBorrower(borrower1);
    mediatheque.addBorrower(borrower2);
    //Ajout d'un media
    mediatheque.addMedia(media1);
    mediatheque.borrowExemplaryAttachedToBorrower(56090, 13);

    //Export en JSON de la mediatheque
    let jsonMediatheque = JsonConverter.createJsonFromObject(mediatheque);//Va afficher dans la console le JSON
    //Chargement d'une mediatheque en objet a partir d'une string JSON
    JsonConverter.createMediathequeObjectFromJson(jsonMediatheque, new Mediatheque());

});