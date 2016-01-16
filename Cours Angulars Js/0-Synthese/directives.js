(function(){
	angular.module('mesDirectives', []);
	
	angular.module('mesDirectives').directive('maDirectiveMagique', function(){ //en HTML ma-directive-magique
		var objetDeDefinitionDirective = { //défini dans la documentation
			restrict:'EA',
			template:'<div><h5>{{ maDirectiveMagiqueCtrl.titre }}</h5><p>Lorem Ipsum</p><input type="text" ng-model="maDirectiveMagiqueCtrl.saisie"</div>',
			controller:function(){
				this.titre = 'titre du chapitre généré par ma directive';
			},
			controllerAs:'maDirectiveMagiqueCtrl',
			link:function(scope, element, attrs){
				scope.$watch('maDirectiveMagiqueCtrl.saisie', function(){
					if(scope.maDirectiveMagiqueCtrl.saisie=='Shazam'){
						window.alert('Bonjour Sami !');	
					};
				});
				
				element.on('mouseover',function(){
						element.css({'color':'red'});
				});
			}
		};
		
		return objetDeDefinitionDirective;
	});

	angular.module('mesDirectives').directive('survolator', function(){
		return {
			restrict:'A',
			link:function(scope, element, attrs){
				element.on('mouseover',function(){
					element.css({'color':'yellow','border-bottom':'1px solid green'});
				});
				element.on('mouseout',function(){
					element.css({'color':'','border-bottom':''});
				});
				
			}
		};
	});
})();