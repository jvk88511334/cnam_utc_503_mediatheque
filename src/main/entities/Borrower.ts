import {Borrowing} from "./Borrowing";

export class Borrower{
    // Attributes
    private _id: number;
    private _name: string;
    private firstname: string;
    private email: string;

    private  _borrowingList: Borrowing[];

    // Constructor
    constructor(id: number, name: string, firstname: string, email: string) {
        this._id = id;
        this._name = name;
        this.firstname = firstname;
        this.email = email;
        this._borrowingList = []; //A la creation de l'emprunteur, sa liste est vide
    }

    // Getters and setters
    get borrowingList(): Borrowing[] {
        return this._borrowingList;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

// Methods

    /**
     * Methode permettant d'ajouter un emprunt à l'emprunteur
     */
    addBorrowing(paramBorrowing: Borrowing){
        this._borrowingList.push(paramBorrowing);
    }


}