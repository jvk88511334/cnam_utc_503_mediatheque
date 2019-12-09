import {Media} from "./Media";
import {Borrower} from "./Borrower";
import {Borrowing} from "./Borrowing";
import {Identifier} from "./subentities/Identifier";
import {MediaType} from "./subentities/MediaType";

export class Mediatheque {
    // attributes
    private mediaList:Media[]; // entity
    private borrowersList:Borrower[]; // entity les emprunteurs
    private borrowingsList:Borrowing[]; // entity les emprunts

    // constructor

    // methods

    /**
     * Méthode permettant d'ajouter un emprunteur
     */
    public addBorrower(borrower: Borrower){
        this.borrowersList.push(borrower);
    }

    public addMediaToList(media: Media<MediaType, Identifier>){
        this.mediaList.push(media);
    }
}