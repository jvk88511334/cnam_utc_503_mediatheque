import {MediaType, MediaTypeBook, MediaTypeCD, MediaTypeDVD} from "../../entities/subentities/MediaType";
import {GendersBook, GendersCD, GendersDVD} from "../../entities/subentities/Genders";
import {DiscId, EIRD, Identifier, ISBN} from "../../entities/subentities/Identifier";
import {Media} from "../../entities/Media";
import {Mediatheque} from "../../entities/Mediatheque";

/**
 * Classe permettant de créer des Medias, avec un nombre d'exemplaires déterminés et une date de disponiblité
 * Permettant d'ajouter les exemplaires crées à la médiathèque
 */
export class MediaFactory {

    /**
     * Permet de créer un ouvrage de type livre en connaissant le nombre d'exemplaires disponibles et la date de disponibilité
     * @param title titre du livre
     * @param author auteur du livre
     * @param gender genre du livre
     * @param publishingCompagny editeur
     * @param pageCount nombre de pages
     * @param identifier identifiant
     * @param exemplariesNumber nombre d'exemplaires
     * @param availableDate date de disponibilité
     */
    public createTypeMediaBook(title: string, author: string, gender: GendersBook, publishingCompagny: string,
                               pageCount: number, identifier: number, exemplariesNumber: number, availableDate: Date): Media<MediaType, Identifier>{
        return new Media(new MediaTypeBook(title, author, gender, publishingCompagny, pageCount), new ISBN(identifier), exemplariesNumber, availableDate);
    }

    /**
     * Permet de créer un ouvrage de type CD en connaissant le nombre d'exemplaires disponibles et la date de disponibilité
     * @param title
     * @param group
     * @param gender
     * @param productionCompagny
     * @param durationInMinutes
     * @param identifier
     * @param exemplariesNumber
     * @param availableDate
     */
    public createTypeMediaCD(title: string, group: string, gender: GendersCD, productionCompagny: string,
                               durationInMinutes: number, identifier: number, exemplariesNumber: number, availableDate: Date): Media<MediaType, Identifier>{
        return new Media(new MediaTypeCD(title, group, gender, productionCompagny, durationInMinutes), new DiscId(identifier), exemplariesNumber, availableDate);
    }

    /**
     * Permet de créer un ouvrage de type DVD en connaissant le nombre d'exemplaires disponibles et la date de disponibilité
     * @param title
     * @param filmDirector
     * @param gender
     * @param productionCompagny
     * @param durationInMinutes
     * @param identifier
     * @param exemplariesNumber
     * @param availableDate
     */
    public createTypeMediaDVD(title: string, filmDirector: string, gender: GendersDVD, productionCompagny: string,
                             durationInMinutes: number, identifier: number, exemplariesNumber: number, availableDate: Date): Media<MediaType, Identifier>{
        return new Media(new MediaTypeDVD(title, filmDirector, gender, productionCompagny, durationInMinutes), new EIRD(identifier), exemplariesNumber, availableDate);
    }

    //voir si on ne peut pas directement ajouter le media dans la mediatheque au moment de sa création
    public addMediaToMediatheque(mediatheque: Mediatheque, media: Media<MediaType, Identifier>){
        mediatheque.addMediaToList(media);
    }

}