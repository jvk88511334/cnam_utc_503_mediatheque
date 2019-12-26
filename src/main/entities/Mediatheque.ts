import {Media} from "./Media";
import {Borrower} from "./Borrower";
import {Borrowing} from "./Borrowing";
import {Identifier} from "./subentities/Identifier";
import {MediaType} from "./subentities/MediaType";
import {filtreTexte} from "../tools/Constants";

export class Mediatheque {
    // attributes
    private mediaList:Media<MediaType, Identifier>[]; // entity une liste de medias vide au chargement
    private borrowersList:Borrower[]; // entity une liste emprunteurs vide au chargement
    private borrowingsList:Borrowing[]; // entity une liste emprunts vide au chargement

    // constructor
    constructor() {
        this.mediaList = new Array<Media<MediaType, Identifier>>();
        this.borrowersList = new Array<Borrower>();
        this.borrowingsList = new Array<Borrowing>();
    }

    // methods

    /**
     * Méthode permettant d'ajouter un emprunteur
     * @param borrower l'objet emprunteur a ajouter
     */
    //TODO faire en sorte que l'identifiant soit unique
    public addBorrower(borrower: Borrower): void{
        this.borrowersList.push(borrower);
    }

    /**
     * Méthode permettant de supprimer un emprunteur
     * @param borrower l'objet emprunteur a supprimer
     */
    public deleteBorrower(borrower: Borrower): void{
        this.borrowersList.splice(this.borrowersList.indexOf(borrower),1);
    }

    /**
     * Méthode permettant de récupérer un ou des emprunteurs par son id dans la liste
     * @param index l'id de l'emprunteur a supprimer
     */
    public getBorrowerById(index: number): Borrower{
        return this.borrowersList.filter(x => index.toString().indexOf(x.id.toString()) > -1)[0];
    }

    /**
     * Méthode permettant d'ajouter un media dans la liste de la médiatheque
     * @param media le media a ajouter
     */
    //TODO faire en sorte qu'on ne puisse pas ajouter un media à la liste l'identifiant existe deja
    public addMedia(media: Media<MediaType, Identifier>): void{
        this.mediaList.push(media);
    }

    /**
     * Méthode permettant de supprimer un média de la liste de la médiathèque
     * @param media le media à supprimer
     */
    public deleteMedia(media: Media<MediaType, Identifier>): void{
        this.mediaList.splice(this.mediaList.indexOf(media), 1);
    }

    /**
     * Méthode permettant d'ajouter un exemplaire à un media
     * @param index l'identifiant unique du média
     */
    public addExemplaryToMediaById(index: number): void{
        let media = this.mediaList.filter(x => index.toString().indexOf(x.identifier.getIdentifier().toString()) > -1)[0];
        media.exemplariesNumber += 1;
    }

    /**
     * Methode permettant de supprimer un exemplaire à un media
     * @param index l'identifiant unique du média
     */
    public deleteExemplaryToMediaFromId(index: number): void{
        //Retour de la fonction anonyme sur l'index 0, sachant que normalement l'identifiant est unique le tableau retourné ne doit contenir qu'un élement
        //Il s'agit d'une protection en cas de doublon sur identifiant (voir sur une v2 pour lancer une exception plutôt
        let media = this.mediaList.filter(x => index.toString().indexOf(x.identifier.getIdentifier().toString()) > -1)[0];
        if(media.exemplariesNumber > 0){
            media.exemplariesNumber -= 1;
        }
    }

    /**
     * Methode permettant d'emprunter un media pour un emprunteur
     * @param index l'identififiant unique du media
     * @param id l'identifiant unique de l'emprunteur
     */
    public borrowExemplaryAttachedToBorrower(index: number, id: number): void{
        let media = this.mediaList.filter(x => index.toString().indexOf(x.identifier.getIdentifier().toString()) > -1)[0];
        let borrower = this.borrowersList.filter(x => index.toString().indexOf(x.id.toString()) > -1)[0];
        //Matérialisation de l'emprunt par instanciation object Borrowing
        let borrowing = new Borrowing(media, borrower, new Date());
        //Ajout de l'emprunt à la liste
        this.borrowingsList.push(borrowing);
    }

    /**
     * Permet de rendre un media pour un emprunteur
     * @param index l'identifiant unique du media a restituer
     * @param id l'identifiant de l'emprunteur
     */
    public returnMediaForABorrower(index: number): void{
        let media = this.mediaList.filter(x => index.toString().indexOf(x.identifier.getIdentifier().toString()) > -1)[0];
        let borrowing = this.borrowingsList.filter(x => index.toString().indexOf(x.media.identifier.getIdentifier().toString()) > -1)[0];
        this.borrowingsList.splice(this.borrowingsList.indexOf(media.identifier.getIdentifier().toString()))
    }
}