import {GendersBook} from "./Genders";
import {GendersCD} from "./Genders";
import {GendersDVD} from "./Genders";

export interface MediaType {
    description(): string;
}

export class MediaTypeBook implements MediaType{
    private readonly title: string;
    private readonly author: string;
    private readonly gender: GendersBook;
    private readonly publishingCompany: string;
    private readonly pageCount: number;

    public constructor(title: string, author: string, gender: GendersBook, publishingCompany: string, pageCount: number) {
        this.title = title;
        this.author = author;
        this.gender = gender;
        this.publishingCompany = publishingCompany;
        this.pageCount = pageCount;
    }

    public description(): string {
        return this.author + this.gender + this.publishingCompany + this.pageCount;
    }
}

export class MediaTypeCD implements MediaType{
    private readonly title: string;
    private readonly group: string;
    private readonly gender: GendersCD;
    private readonly productionCompany: string;
    private readonly durationInMinutes: number;

    public constructor(title: string, group: string, gender: GendersCD, productionCompany: string, durationInMinutes: number) {
        this.title = title;
        this.group = group;
        this.gender = gender;
        this.productionCompany = productionCompany;
        this.durationInMinutes = durationInMinutes;
    }

    public description(): string {
        return this.group + this.gender + this.productionCompany + this.durationInMinutes;
    }
}

export class MediaTypeDVD implements MediaType{
    private readonly title: string;
    private readonly filmDirector: string;
    private readonly gender: GendersDVD;
    private readonly productionCompany: string;
    private readonly durationInMinutes: number;

    public constructor(title: string, filmDirector: string, gender: GendersDVD, productionCompany: string, durationInMinutes: number) {
        this.title = title;
        this.filmDirector = filmDirector;
        this.gender = gender;
        this.productionCompany = productionCompany;
        this.durationInMinutes = durationInMinutes;
    }

    public description(): string {
        return this.filmDirector + this.gender + this.productionCompany + this.durationInMinutes;
    }
}
