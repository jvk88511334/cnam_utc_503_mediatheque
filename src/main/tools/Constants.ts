export const filtreTexte = (arr: any[], requete: string) => {
    return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
};