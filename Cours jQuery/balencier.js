var pas = 1;
var valeur = 0;
function changement(){
  console.log(valeur);
  valeur = valeur + pas;
  if(valeur == 10 || valeur == 0){
    pas = -pas;
  }
};

setInterval(changement,1000);