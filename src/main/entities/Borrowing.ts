import {Borrower} from "./Borrower";
import {Media} from "./Media";
import {MediaType} from "./subentities/MediaType";
import {Identifier} from "./subentities/Identifier";

//Classe matérialisant un emprunt
export class Borrowing{
    //Attributes
    private _media: Media<MediaType, Identifier>;
    private borrower: Borrower;
    private borrowingDate: Date;

    //Constructor
    constructor(media: Media<MediaType, Identifier>, borrower: Borrower, borrowingDate: Date) {
        this.borrower = borrower;
        this._media = media;
        this.borrowingDate = borrowingDate;
        //Marquage du media à +1 en pour son attribut exemplaires empruntés
        this._media.exemplariesBorrowed = this._media.exemplariesBorrowed+1;
        //Si le nombre d'exemplaires empruntés dépasse le nombre d'exemplaires du média, lancement d'un exception
        if(this._media.exemplariesBorrowed > this._media.exemplariesNumber){
            throw new Error('Le nombre d\'exemplaires empruntés ne peut dépasser le nombre d\'exemplaires disponibles')
        }
    }

    //Methods

    /**
     * Retourne le statut de l'emprunt, si l'exemplaire est en retard ou pas
     * @return true si il n'y a plus d'exemplaires disponibles et que la date de l'emprunt est > 3 semaines
     * @return false si il y a encore des exemplaires disponibles OU si la date d'emprunt est < 3 semaines
     */
    public getBorrowingStatus(): boolean {
        if(this._media.exemplariesBorrowed === this._media.exemplariesNumber){
            let currentDate: Date = new Date();
            let currentDate30DaysBack = currentDate.setDate(currentDate.getDate() - 22);
            let dateOneMonthBack: Date = new Date(currentDate30DaysBack);
            return this.borrowingDate < dateOneMonthBack;
        }
        return false;
    }

    get media(): Media<MediaType, Identifier> {
        return this._media;
    }
}