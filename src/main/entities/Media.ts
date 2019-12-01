import {MediaType} from "./subentities/MediaType";
import {Identifier} from "./subentities/Identifier"

export class Media<T extends MediaType, U extends Identifier>{
    private mediaType: T; //Le type de media: Livre, CD, DVD
    private identifier: U; //L'identifiant ISBN, DiscId, EIRD
    private _exemplariesNumber: number; //le nombre d'exemplaires disponibles
    private _availableDate: Date; //la date de disponibilité

//Methods

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
}