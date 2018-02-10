Ext.define('app.model.clientes.ClienteModel',{
	extend:'Ext.data.Model',


	fields:[
		{name:"user_k" , type: 'int' },
		"email",
		"user",
		"role_k",
		{name:"fecha_nacimiento" , type: 'date' , format: 'Y-m-d' }
	],

	nombreToHtml:function () {
		return '<strong>' + this.data.email+ '</strong>';
	}

});