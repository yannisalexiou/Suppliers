Ext.define('Suppliers.view.addNewSupplier.AddNewSupplierView', {
    extend: 'Ext.form.Panel',
    //title: 'Simple Form',
    bodyPadding: 5,
    width: 350,

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'First Name',
        name: 'firstName',
        allowBlank: false
    },{
        fieldLabel: 'Last Name',
        name: 'lastName',
        allowBlank: false
    }, {
        fieldLabel: 'Office Location',
        name: 'officeLocation',
        allowBlank: false
    },{
        fieldLabel: 'Phone Number',
        name: 'phoneNumber',
        allowBlank: false
    }, {
        fieldLabel: 'Email',
        name: 'email',
        allowBlank: false
    },{
        fieldLabel: 'Latitude',
        name: 'latitude',
        allowBlank: true
    }, {
        fieldLabel: 'Longitude',
        name: 'longitude',
        allowBlank: true
    }],

    buttons: [{
        text: 'Reset',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Submit',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        handler: function() {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                console.log('YOLO');
                var store = Ext.getStore('supplier');
                console.log("SWAG initializing");
                store.on('load', function(store) {

                    // if the store is correctly loaded show the view
                    console.log('SWAG Store Loaded');

                });

                var values = form.getFieldValues ();
                store.add({
                    firstName : values.firstName,
                    lastName : values.lastName,
                    officeLocation : values.officeLocation,
                    phoneNumber : values.phoneNumber,
                    email : values.email,
                    latitude : values.latitude,
                    longitude : values.longitude
                });

                //store.load();
                //var grid = view.up('app-main').down('#suppliersGrid')
                //console.log(grid);

                //Κρατάει το store οπως το είχα και προσθέτει και τι νέα εγγραφή στη κορυφή του grid
                Ext.getCmp('suppliersGridId').getView().refresh();

                //Ξανα φορτώνει το store από την αρχη, δε θα φανούν οι εγγραφές που έκανα submit
                //Ext.getCmp('suppliersGridId').getStore().load();

                //Close window after submit
                this.up('window').close();
            }
        }
    }]
});