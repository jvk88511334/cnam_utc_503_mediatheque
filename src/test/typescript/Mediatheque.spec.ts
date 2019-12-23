import {Mediatheque} from "../../main/entities/Mediatheque";
import {Borrower} from "../../main/entities/Borrower";
import { expect } from 'chai';
import 'mocha';

describe('ajouter des emprunteurs', () => {
    //Création d'une médiathèque
    let mediatheque = new Mediatheque();

    //Construction de deux emprunteurs
    let borrower1 = new Borrower(24, 'talon', 'achille', 'achilletalon@gmail.com');
    let borrower2 = new Borrower(67, 'fogg', 'phileas', 'phileasfogg@yahoo.com');

    //Test de la méthode d'ajout d'emprunteurs à la médiathèque
    mediatheque.addBorrower(borrower2);
    mediatheque.addBorrower(borrower1);

   let localBorrower =  mediatheque.getBorrowerById(67);
   console.log(localBorrower);

   mediatheque.deleteBorrower(borrower1);
   console.log(mediatheque);
});