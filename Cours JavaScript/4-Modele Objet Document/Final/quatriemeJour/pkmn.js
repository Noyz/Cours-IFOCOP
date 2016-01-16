var createHuman = function(){
	
	function Organe () {
		this.cerveau = true;
		this.coeur = true;
		this.foie = true;
		this.intestin = true;
		this.areYouOkay = function(){
			alert('Tout est ok !');
		};
	};

	function human (a, b, c, d){
		this.sexe = a;
		this.couleur = b;
		this.taille = c;
		this.nom = d;
	};

	human.prototype = new organ();
	var nouvelleHumain = new human(mâle, noir, '182cm', 'Julian');
	return nouvelleHumain;
};

createHuman();