import {Borrower} from "./Borrower";
import {Media} from "./Media";
import {MediaType} from "./subentities/MediaType";
import {Identifier} from "./subentities/Identifier";

export class Borrowing{
    //Attributes
    private borrower: Borrower;
    private media: Media<MediaType, Identifier>;
    private borrowingDate: Date;

    //Constructor
    constructor(borrower: Borrower, media: Media<MediaType, Identifier>, borrowingDate: Date) {
        this.borrower = borrower;
        this.media = media;
        this.borrowingDate = borrowingDate;
    }

    //Methods
    public getBorrowingStatus(): boolean {
        let currentDate: Date = new Date();
        //TODO retirer 30 jours a la date en cours
        //if(this.borrowingDate < )
        return false;
    }
}