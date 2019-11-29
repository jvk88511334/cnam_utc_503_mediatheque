import {Media} from "./Media";
import {Borrower} from "./Borrower";
import {Borrowing} from "./Borrowing";

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
    public addBorrower(){
        this.borrowersList.push();
    }
}