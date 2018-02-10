Ext.define('app.view.clientes.GridClientes',{
	extend: 'Ext.grid.GridPanel',

	xtype:'gridclientes',

	initComponent: function () {

		var mistore = Ext.create('app.store.clientes.StoreClientes',{
			autoLoad: true
		});

		Ext.apply(this ,{

			store:mistore,

			columns:[
				{text:'Nombre' , dataIndex: 'role_k' , flex: 1},
				{text:'Email' , dataIndex: 'email' , width: 160 , menuDisabled:true , 
					renderer: function (val,meta,rec) {
						return rec.nombreToHtml();
					} 
				},
				{text:'Nivel' ,dataIndex: 'user' } ,
				{text:'alias' ,dataIndex: 'role_k'},
				{text:'Fecha nacimiento' ,dataIndex: 'fecha_nacimiento' , width: 160 , menuDisabled:true ,
					renderer: Ext.util.Format.dateRenderer('d-m-Y') 
					},
				{
            xtype:'actioncolumn',
            width:50,
            items: [{
                iconCls: 'x-fa fa-cog',
                tooltip: 'Edit',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    alert("Edit " + rec.get('email'));
                }
            },{
                icon: 'x-fa fa-cog',
                tooltip: 'Delete',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                            Ext.Msg.confirm("Confirmation", "Do you want delete this?", function(btnText) {
					            if (btnText === "no") {
					               // Ext.Msg.alert("Alert", "You have clicked 'No'.");
					            } else if (btnText === "yes") {
					                grid.store.remove(rec)
					            }
					        }, this);
                }
            }]
        } ],

			dockedItems:[{
				xtype:'pagingtoolbar',
				store: mistore,
				dock:'bottom',
				displayInfo:true				
			}]

		});

		this.callParent();
	}
});