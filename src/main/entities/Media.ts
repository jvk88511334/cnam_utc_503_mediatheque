import {MediaType} from "./subentities/MediaType";
import {Identifier} from "./subentities/Identifier"

export class Media<T extends MediaType, U extends Identifier>{
    private mediaType: T; //Le type de media: Livre, CD, DVD
    private _identifier: U; //L'identifiant ISBN, DiscId, EIRD
    private _exemplariesNumber: number; //le nombre d'exemplaires disponibles
    private _availableDate: Date; //la date de disponibilité (sera un new Date() en cas de nouveau media)
    private _exemplariesBorrowed: number; //le nombre d'exemplaires empruntés

    //Constructor : créer un média

    constructor(mediaType: T, identifier: U, exemplariesNumber: number, exemplariesBorrowed: number, availableDate: Date) {
        this.mediaType = mediaType;
        this._identifier = identifier;
        this._exemplariesNumber = exemplariesNumber;
        this._availableDate = availableDate;
        this._exemplariesBorrowed = exemplariesBorrowed;
    }

    //Methods

    /**
     * Permet de retourner la description de l'exemplaire
     */
    public description(): string{
        return this._identifier.getIdentifier() + this.mediaType.description() + this._exemplariesNumber;
    }

    /**
     * Permet de modifier le nombre d'exemplaires disponibles
     * @param value le nouveau nombre d'exemplaires disponibles
     */
    set exemplariesNumber(value: number) {
        this._exemplariesNumber = value;
    }

    /**
     * Permet de modifier le nombre d'exemplaires empruntés
     * @param value le nombre d'exemplaires empruntés
     */
    set exemplariesBorrowed(value: number) {
        this._exemplariesBorrowed = value;
    }

    /**
     * Permet de connaitre actuellement le nombre d'exemplaires empruntés
     */
    get exemplariesBorrowed(): number {
        return this._exemplariesBorrowed;
    }

    /**
     * Permet de modifier la date de disponibilité d'un exemplaire
     * @param value la nouvelle date de disponibilité de l'exemplaire
     */
    set availableDate(value: Date) {
        this._availableDate = value;
    }

    /**
     * Permet d'obtenir le nombre d'exemplaires disponible pour ce media
     */
    get exemplariesNumber(): number {
        return this._exemplariesNumber;
    }

    /**
     * Permet d'obtenir la date de disponibilité pour ce media
     */
    get availableDate(): Date {
        return this._availableDate;
    }

    /**
     * Permet d'obtenir l'identifiant unique de ce media
     */
    get identifier(): U {
        return this._identifier;
    }

//TODO methode permettant de retourner ce media à partir d'un identifiant
}