Ext.define('app.view.clientes.PanelClientes',{
    
    extend: 'Ext.Panel',
    xtype:'panelclientes',
   // layout: 'border',

    controller:'panelclientectr',

    tbar:[{
    	// xtype:'button' opcional esta implicito
    	text:'Agregar Cliente',
    	iconCls:'x-fa fa-plus',
    	handler: 'agregarCliente'
    },'->',{// el topbar de da alineacion  a la derecha
    	xtype:'comboclientes',
    	emptyText:'Buscar cliente',
     	width:300 
    }],

    items:[{
    	region:'center',
    	layout:'fit',
    	xtype:'tabpanel',

    	items:[{
    		title:'Listado de clientes',
    		xtype:'gridclientes',
            reference:'gridlistado',
            listeners:{
                itemclick:'showClienteDetalle'
            }
    	}],
    	bbar:['Bottom bar(Zona baja)','-',{
    		text:'Agregar un nuevo contenido',
    		scale:'large',
    		handler: function(){
    			var num= Ext.id(),
    			    panel = Ext.create('Ext.Panel',{
    			    	title:'Detalle cliente' + num,
    			    	html:'Info cliente'+num,
    			    	closable: true,
    			    	layout:{
    			    		type:'hbox',
    			    		align:'stretch'
    			    	},

    			    	items:[{
    			    		title:'detalle del cliente'+num,
    			    		xtype:'panel',
    			    		flex:3,
    			    		layout:'card',
    			    		items:[{
    			    			bodyStyle:'background-color: #ABC;font-size:30px; color:#765',
    			    			html:'detalle 1'
    			    		},{
    			    			bodyStyle:'background-color: #cba;font-size:30px; color:#765',
    			    			html:'detalle 2'
    			    		}],

    			    		buttons:[{
    			    			text:'Panel 1',
    			    			scale:'large',
    			    			handler: function(){
    			    				this.up('panel').layout.setActiveItem(0);
    			    			}
    			    		},{
    			    			text:'Panel 2',
    			    			scale:'large',
    			    			handler: function(){
    			    				this.up('panel').layout.setActiveItem(1);
    			    			}
    			    		}]

    			    	},{
    			    		text:'al seleccionar panel 2',
    			    		flex:1,
    			    		bodyStyle:'background-color: #FED;font-size:30px; color:#765'
    			    	}]

    			});

    			this.up('tabpanel').add(panel);
    			this.up('tabpanel').setActiveItem(panel);
    		}

    	}]
    },{
    	height:100,
    	region:'south',
    	layout:'fit',
    	html:'border sur',
    //	bodyStyle:'background-color: red ; font-zice 30 px; color:#fff',
        bodyPadding:10,
        reference:'paneldetalle',
        tpl:'<div><div style="float; left; margin-right:20px;">'+ 
          '<h2>{email}</h2>'+
        +'</div>'
    }],

    seleccionar: function (argument) {
       // debugger;
       var rec = this.lookupReference('gridlistado').getSelectionModel().getSelection();

       this.fireEvent('selectcliente', this , rec[0]);

    }
});