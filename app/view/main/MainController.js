/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {

        var panel = Ext.create('app.view.clientes.PanelClientes');

        var win = Ext.create('Ext.window.Window',{
            width:800,
            height:700,
            title:'Seleccionar cliente',

            items:panel,

            buttons:[{
                text:'Seleccionar',
                scope: this,
                handler: function (argument) {
                    panel.seleccionar();
                }
            },{
                text:'Cancelar',
                scope: this,
                handler: function (argument) {
                    win.hide();
                }
            }]
        });

        panel.on({
            selectcliente: function (panelclientes,rec) {
                win.hide();
                Ext.Msg.confirm('Confirm', 'El cliente seleccionado fue'+ rec.data.user_k);
            }
        });

        win.show();
     //   
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
