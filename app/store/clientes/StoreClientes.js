Ext.define('app.store.clientes.StoreClientes',{
	extend:'Ext.data.Store',

	model:'app.model.clientes.ClienteModel',
	
	proxy:{
		type:'ajax',
		url: 'server/listcustomers.json',

		reader:{
			type: 'json',
			rootProperty:'data',
			totalProperty:'numFilas'
		}
	}
});