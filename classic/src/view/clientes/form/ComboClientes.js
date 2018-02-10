Ext.define('app.view.clientes.form.ComboClientes',{
	extend: 'Ext.form.ComboBox',

	xtype: 'comboclientes',

	queryMode: 'remote',
	displayField: 'email',
	valueField:'abbr',

	pageSize:25,

	//hideTrigger:true,

	initComponent:function (){

		Ext.apply(this , { 
			store: Ext.create('app.store.clientes.StoreClientes'),

			tpl: Ext.create('Ext.XTemplate',
			    '<ul class"x-list-plain"><tpl for=".">',
			    	'<li class"x-boundlist-item"> {email} - {role_k} </li>',
			    '</tpl></ul>' 
			    ),

			displayTpl: Ext.create('Ext.XTemplate',
				'<tpl for=".">',
					'{nombre} - {role_k}',
				'</tpl>'
				)
		});

		this.callParent();
	}
});