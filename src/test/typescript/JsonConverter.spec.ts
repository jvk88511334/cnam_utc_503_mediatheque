import {Borrower} from "../../main/entities/Borrower";
import {DiscId} from "../../main/entities/subentities/Identifier";
import {MediaTypeCD} from "../../main/entities/subentities/MediaType";
import {GendersCD} from "../../main/entities/subentities/Genders";
import {Media} from "../../main/entities/Media";

describe('Test d\'export de la mediatheque en JSON', () => {
    //Création de deux empruteurs
    let borrower1 = new Borrower(13, 'Luke', 'Lucky', 'luckyluke@yahooOuOu.com');
    let borrower2 = new Borrower(78, 'Lecter', 'Hannibal', 'psycoFromNY@anonymous.org');
    //Création d'un identifiant
    let identifier = new DiscId(56090);
    //Création d'un type de media : CD
    let mediatype1 = new MediaTypeCD('Reworked', 'Snow Patrol', GendersCD.Rock, 'EPIC', 90);
    //Création d'un média
    //TODO continuer..

});