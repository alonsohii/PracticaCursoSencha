Ext.define('app.view.login.WindowLoginController',{
	extend: 'Ext.app.ViewController',

	alias:'controller.windowloginctr',
	// Que hacer con los Listeners Handlers y referencias se hace en los controller
	// la logica de un handler estara definida aqui.
	hacerLogin: function(){
	///	debugger;
	   var datos = this.lookupReference('formulario').getValues();
		//var formulario = this.lookupReference('formulario');
      

      /* formulario.getForm().submit({
		     url: 'server/dologin.json',
		     scope:this,

		     success: function(response, opts) {

	        	 this.getView().close();
		     //    Ext.Msg.alert('Hola', 'Welcome to the Jungle:'+opts.result.role_k);
		     },

		     failure: function(response, opts) {

		         console.log('server-side failure with status code ' + response.status);
		     }
		 });*/


	 Ext.Ajax.request({
		     url: 'server/dologin.json',
		     scope:this,
		     params:datos,
		     success: function(response, opts) {
		         var obj = Ext.decode(response.responseText);
		         //console.dir(obj);
	        	 
		         Ext.Msg.alert('Hola', 'Welcome to the Jungle:'+obj.role_k, function(){
		         	this.getView().close();
		         }, this);
		     },

		     failure: function(response, opts) {
		         console.log('server-side failure with status code ' + response.status);
		     }
		 });




	}
});