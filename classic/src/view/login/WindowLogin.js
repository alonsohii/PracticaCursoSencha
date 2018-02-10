Ext.define('app.view.login.WindowLogin',{
	extend: 'Ext.window.Window',

	controller:'windowloginctr',


	 title:'Bievenido',
            width:300,
            height:190,
            draggable:false,
            closable:false,
            modal:true,
            items:[{
                xtype:'form',
                bodyPadding:10,
             //   url:'server/dologin.json'
                reference:'formulario',
                defaults:{
                    xtype:'textfield',
                    allowBlank: false
                },
                items:[{
                    fieldLabel:'Usuario',
                    name:'usuario',
                    vtype:'email'
                },{
                    fieldLabel:'password',
                    name:'password',
                    vtype:'pass'
                }

                ]
            }], // hijos
            buttons:[{
                iconCls:'x-fa fa-user',
                text:'Ingresar',
                handler: 'hacerLogin'
            }]
});