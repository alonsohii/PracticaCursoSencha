Ext.define('app.view.clientes.PanelClientesController',{
	extend: 'Ext.app.ViewController',

	alias: 'controller.panelclientectr',

	showClienteDetalle:function (grid,rec) {
	
		var panel = this.lookupReference('paneldetalle');
		panel.update(rec);
	},

	agregarCliente:function(){
    		var windows = Ext.create('Ext.Window',{
    			modal:true,
    			title:'Agregar nuevo cliente',
    			height: 500,
    			width: 400,
    			//html:'Este debe ser el cuerpo de un formulario', Quire el html para agreagr el FormCliente.js
    			layout:'fit',
    			items:[{
    				xtype: 'formcliente'
    			}],
    			buttons:[
    			{
    				text:'Submit',
    				handler: function (){
    					var form = this.up('window').down('formcliente');
    					form.doSubmit();
    				}
    			},
    			{
    				text:'Load',
    				handler: function (){
    					var form = this.up('window').down('formcliente');
    					form.doLoad();
    				}
    			},
    			{
    				text:'Cerrar',
    				handler: function (){
    					windows.close();
    				}
    			}]
    		});
    		windows.show();
    	}

});