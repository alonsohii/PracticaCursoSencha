Ext.define('app.view.clientes.form.FormCliente', {
	extend:'Ext.form.Panel',

	xtype:'formcliente', // Puede ser un apodo de la clase
	bodyPadding:10,

	//layout:'anchor', ya viene por default
//	height:500,
	initComponent: function(){

		Ext.apply(this,{
			fieldDefaults:{
				labelAlign: 'right',
				labeWidth:110,
				msgTarget: 'under',
				anchor:'100%',
				allowBlank:false
			},
			defaultType:'textfield',
			items : [{
				fieldLabel:'* Nombre',
				emptyText: 'Este campo es obligatorio',
				name:'txt_nombre'
			},{
			//	xtype:'textfield',
				fieldLabel:'* Correo',
				vtype:'email',
				emptyText:'demo@gmail.com',
				name:'txt_correo'
			},{
				xtype:'displayfield',
				fieldLabel: 'Apodo',
				name: 'home_score',
				value: 'Por asignar...'
			},
			{
				xtype:'numberfield',
				fieldLabel: 'Edad',
				name: 'txt_edad',
				maxValue:99,
				minValue:0,
				allowDecimals: false,
				value: 'Por asignar...'
			},
			{
				xtype:'datefield',
				maxValue: new Date(),
				fieldLabel: 'Fecha de nacimiento',
				name: 'txt_fnacimiento',
				format: 'd-m-Y',
				allowBlank: true
			},
			{
				xtype:'radiogroup',
				maxValue: new Date(),
				fieldLabel: 'Genero',
				vertical:true,
				items:[
					{ boxLabel:'Hombre', name: 'txt_genero', inputValye : '1'},
					{ boxLabel:'Mujer', name: 'txt_genero', inputValye : '2'}
				]
			},{
				xtype:'checkboxgroup',
				fieldLabel: 'Idiomas',
				columns:2,
				vertical:true,
				items:[
					{ boxLabel:'Frances', name: 'txt_idioma', inputValye : '1'},
					{ boxLabel:'Espanol', name: 'txt_idioma', inputValye : '2'}
				]
			}]
		});

		this.callParent();

	},

	doSubmit: function () {
		this.getForm().submit({
			url:'server/doformpost.json',
			success:function (form, result) {
				console.log(result);
			},
			failure:function (form, result) {
				console.log(result);
			}
		});
	
	},

	doLoad: function () {
		this.getForm().load({
			url:'server/doformload.json',
			success:function (form , result) {
				console.log(result.result);
			},
			failure:function (form, result) {
				console.log(result);
			}
		});
	}
});