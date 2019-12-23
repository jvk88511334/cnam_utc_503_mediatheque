import {Media} from "./Media";
import {Borrower} from "./Borrower";
import {Borrowing} from "./Borrowing";
import {Identifier} from "./subentities/Identifier";
import {MediaType} from "./subentities/MediaType";
import {filtreTexte} from "../tools/Constants";

export class Mediatheque {
    // attributes
    private mediaList:Media<MediaType, Identifier>[]; // entity une liste de medias
    private borrowersList:Borrower[]; // entity une liste emprunteurs
    private borrowingsList:Borrowing[]; // entity une liste emprunts

    // constructor
    constructor() {
        this.mediaList = new Array<Media<MediaType, Identifier>>();
        this.borrowersList = new Array<Borrower>();
        this.borrowingsList = new Array<Borrowing>();
    }

    // methods

    /**
     * Méthode permettant d'ajouter un emprunteur
     */
    public addBorrower(borrower: Borrower): void{
        this.borrowersList.push(borrower);
    }

    /**
     * Méthode permettant de supprimer un emprunteur
     */
    public deleteBorrower(borrower: Borrower): void{
        this.borrowersList.splice(this.borrowersList.indexOf(borrower),1);
    }

    /**
     * Méthode permettant de récupérer un ou des emprunteurs par son id dans la liste
     */
    public getBorrowerById(index: number): Borrower{
        return this.borrowersList.filter(x => index.toString().indexOf(x.id.toString()) > -1)[0];
    }

    /**
     * Méthode permettant d'ajouter un media dans la liste de la médiatheque
     * @param media
     */
    public addMediaToList(media: Media<MediaType, Identifier>){
        this.mediaList.push(media);
    }



}