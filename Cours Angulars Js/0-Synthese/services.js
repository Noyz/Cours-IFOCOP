(function(){
	angular.module('mesServices', []);
	
	/*angular.module('mesServices').factory('objetFactory',function(){
		return {
			soustitre:'Ceci est un sous titre partagé'
		};
	});*/

	/*angular.module('mesServices').service('objetService', function(){
		this.soustitre ='Ceci est un sous titre partagé';
	});*/
	
	angular.module('mesServices').provider('objetProvider', function(){
		this.str = 'Ceci est un sous titre partagé';
		this.$get = function(){
			return {
				soustitre:this.str
			};
		};
		
	});
})();