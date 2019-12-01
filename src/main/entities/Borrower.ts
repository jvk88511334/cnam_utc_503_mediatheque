import {Borrowing} from "./Borrowing";

export class Borrower{
    // Attributes
    private id: number;
    private name: string;
    private firstname: string;
    private email: string;

    private readonly _borrowingList: Borrowing[];

    // Constructor
    constructor(id: number, name: string, firstname: string, email: string) {
        this.id = id;
        this.name = name;
        this.firstname = firstname;
        this.email = email;
        this._borrowingList = []; //A la creation de l'emprunteur, sa liste est vide
    }

    // Getters and setters
    get borrowingList(): Borrowing[] {
        return this._borrowingList;
    }

    // Methods

    /**
     * Methode permettant d'ajouter un emprunt à l'emprunteur
     */
    addBorrowing(paramBorrowing: Borrowing){
        this._borrowingList.push(paramBorrowing);
    }
}