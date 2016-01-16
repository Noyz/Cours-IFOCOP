(function(){
	angular.module('mesControleurs', ['mesServices']);
	
	angular.module('mesControleurs').config(['objetProviderProvider','$filterProvider',function(objetProviderProvider,$filterProvider){
		$filterProvider.register('test',function(){
			return function(message){
				window.alert(message)
			};
		});
		
		objetProviderProvider.str = 'Mega cool !';
}]);
	
	angular.module('mesControleurs').controller('monControleur', ['$scope','objetProvider',function($scope, objetProvider){
		$scope.monCtrl = { 
			titre: 'Mon Titre de Scope',
			soustitre:objetProvider.soustitre
		};
	}]);

	angular.module('mesControleurs').controller('monAutreControleur', ['$scope','objetProvider','$filter',function($scope, objetProvider, $filter){
		$filter('test')('Coucou');
		$scope.monAutreCtrl = { 
			titre: 'Titre de mon autre contrôleur',
			soustitre:objetProvider.soustitre
		};
	}]);

	angular.module('mesControleurs').controller('encoreUnAutreControleur', ['objetProvider',function(objetProvider){
		this.titre = 'titre d\'encore un autre controleur';
		this.soustitre = objetProvider.soustitre;
}]);	
})();