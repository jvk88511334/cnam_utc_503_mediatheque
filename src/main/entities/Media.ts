import {MediaType} from "./subentities/MediaType";
import {Identifier} from "./subentities/Identifier"

export class Media<T extends MediaType, U extends Identifier>{
    private mediaType: T; //Le type de media: Livre, CD, DVD
    private identifier: U; //L'identifiant ISBN, DiscId, EIRD
    private _exemplariesNumber: number; //le nombre d'exemplaires disponibles
    private _availableDate: Date; //la date de disponibilité

    constructor(mediaType: T, identifier: U, exemplariesNumber: number, availableDate: Date) {
        this.mediaType = mediaType;
        this.identifier = identifier;
        this._exemplariesNumber = exemplariesNumber;
        this._availableDate = availableDate;
    }

//Methods
    /**
     * Permet de retourner la description de l'exemplaire
     */
    public description(): string{
        return this.identifier.getIdentifier() + this.mediaType.description() + this._exemplariesNumber;
    }

    /**
     * Permet de modifier le nombre d'exemplaires disponibles
     * @param value le nouveau nombre d'exemplaires disponibles
     */
    set exemplariesNumber(value: number) {
        this._exemplariesNumber = value;
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
}