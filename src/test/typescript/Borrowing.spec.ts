import {Borrowing} from "../../main/entities/Borrowing";
import {Borrower} from "../../main/entities/Borrower";
import 'mocha';
import {Media} from "../../main/entities/Media";
import {ISBN} from "../../main/entities/subentities/Identifier";
import {MediaTypeBook} from "../../main/entities/subentities/MediaType";
import {GendersBook} from "../../main/entities/subentities/Genders";


describe('test du contrôle d\'une date en retard', () => {
    //Création d'un emprunteur
    let borrower = new Borrower(3, 'Stoker', 'Braham', 'dracula@yandex.ru');
    //Création d'un identifiant
    let identifier = new ISBN(5372988744253);
    //Création d'un type de media : livre
    let book = new MediaTypeBook('Into the wild', 'Jon Krakauer', GendersBook.Roman, 'Random House', 224);
    //Création d'un média
    let media = new Media(book, identifier, 4, 0, new Date());

    //Création d'un emprunt
    let borrowing = new Borrowing(media, borrower, new Date());
    //Création d'un emprunt et recule de 30j sa date d'emprunt
        let currentDate = new Date();
        let currentDate30DaysBack = currentDate.setDate(currentDate.getDate() - 30);
        let dateTwoMonthBack = new Date(currentDate30DaysBack);
    let borrowing2 = new Borrowing(media, borrower, dateTwoMonthBack);

    console.log(borrowing.getBorrowingStatus()); //doit afficher false car pas en retard
    console.log(borrowing); //affiche l'emprunt

    console.log(borrowing2.getBorrowingStatus()); //doit afficher true car en retard date reculée de 30j (21j max tolérés)
    console.log(borrowing2); //affiche le deuxième emprunt
    //le toString semble implicite en Typescript

    //TODO probleme avec le module jasmine avec npm : voir pour le debugguer si temps disponible, sinon utiliser des console.log
    //le module jasmine ne fonctionnant pas, je n'ai pas plus faire fonctionner les TU classiques

    /*it('doit retourner false car daté du jour', () => {
        expect(borrowing.getBorrowingStatus()).toBeFalse();
    });*/
    }
);