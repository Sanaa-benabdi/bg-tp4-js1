const produit = { nom : 'Clavier' , prix :1500 ,  quantitee : 20 } ;
const valeurStock = produit.prix *produit.quantitee ;
console.log('Produit : ' + produit.nom) ;
console.log (' Valeur totale du stock ' + valeurStock + ' DA' ) ;

const catalogue = [
{ nom: "Clavier", prix: 1500,  quantite: 20 },
  { nom: "Souris",  prix: 1200,  quantite: 25 },
  { nom: "Écran",   prix: 18000, quantite: 4  },
  { nom: "Casque",  prix: 4000,  quantite: 8  },
  { nom: "Webcam",  prix: 3500,  quantite: 6  } 
];
const prixMoy = catalogue.reduce( ( somme , p )=> somme+p.prix  , 0 ) /catalogue.lenght  ;

 function filter ( catalogue,p,prixMoy, chers){
  const result=[];
  for ( const p of catalogue){
if(p.prix>prixMoy){
result.push(p);
 }}
return result;} 
 const chers = filter(catalogue,prixMoy);
 console.log("les produit chers sont:") ;
 console.log(chers) ;

 const totalArticles = catalogue.reduce((total, p) => total + p.quantite, 0);
const valeurGlobale = catalogue.reduce((total, p) => total + p.prix * p.quantite, 0);
console.log("\n3. Nombre total d'articles :", totalArticles);
console.log("Valeur globale du stock :", valeurGlobale);

function valeurStock(p) {
  return p.prix * p.quantite;
}
console.log("\n4. Valeur du stock par produit :");
console.log(catalogue[0].nom, ":", valeurStock(catalogue[0]));
console.log(catalogue[1].nom, ":", valeurStock(catalogue[1]));
console.log(catalogue[2].nom, ":", valeurStock(catalogue[2]));
console.log(catalogue[3].nom, ":", valeurStock(catalogue[3]));
console.log(catalogue[4].nom, ":", valeurStock(catalogue[4]));

function appliquerTraitement(liste, traitement) {
  for (const p of liste) {
    traitement(p);
  }
}

console.log("\n5. Noms des produits :");
appliquerTraitement(catalogue, (p) => console.log(p.nom));

console.log("Prix des produits :");
appliquerTraitement(catalogue, (p) => console.log(p.prix));
