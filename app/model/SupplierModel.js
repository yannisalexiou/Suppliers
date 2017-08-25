/**
 * Created by trainee on 13/7/2017.
 */
Ext.define('Suppliers.model.SupplierModel', {
    extend: 'Ext.data.Model',

    // schema: {
    //     namespace: 'Suppliers.model',
    //     //id: 'schema4',
    //     proxy: {
    //         autoSave: true,
    //         autoSync:true,
    //         type: 'rest',
    //         //url: 'https://api.myjson.com/bins/mw4pn',
    //         url: 'data/suppliers.json',
    //         //url: 'https://api.myjson.com/bins/15rsaz',
    //         reader: {
    //             type: 'json',
    //             rootProperty: 'suppliers'
    //         },
    //         success: function(response){
    //             console.log(response.responseText);
    //             console.log("Test");
    //         }
    //     },
    // },

    fields: ['firstName', 'lastName', 'officeLocation', 'phoneNumber', 'email', 'latitude', 'longitude', {name :'debt', type: 'int'}, 'items' ]
});