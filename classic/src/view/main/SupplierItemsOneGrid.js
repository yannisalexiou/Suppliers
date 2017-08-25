Ext.define('Suppliers.view.main.SupplierItemsOneGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'SupplierItemsOneGrid',

    store: {
        type: 'supplier'
    },

    columns: [{
        text: 'First Name',
        dataIndex: 'firstName',
        flex: 1,
        hideable: false
    }, {
        text: 'Last Name',
        dataIndex: 'lastName',
        flex: 1,
    }, {
        text: 'Phone Number',
        dataIndex: 'phoneNumber',
        flex: 1
    }],
    width: 750,
    height: 450,
    leadingBufferZone: 8,
    trailingBufferZone: 200,

    //<example>
    otherContent: [{
        type: 'Store',
        path: 'app/store/Companies.js'
    }, {
        type: 'Model',
        path: 'app/model/Company.js'
    }, {
        type: 'Model',
        path: 'app/model/Order.js'
    }],
    //</example>

    plugins: [{
        ptype: 'rowwidget',

        // The widget definition describes a widget to be rendered into the expansion row.
        // It has access to the application's ViewModel hierarchy. Its immediate ViewModel
        // contains a record and recordIndex property. These, or any property of the record
        // (including association stores) may be bound to the widget.
        //
        // See the Order model definition with the association declared to Company.
        // Every Company record will be decorated with an "orders" method which,
        // when called yields a store containing associated orders.
        widget: {
            xtype: 'grid',
            autoLoad: true,
            title: 'Orders',
            bind: {
                store: '{record.items}',
                title: 'Orders for {record.firstName}'
            },
            columns: [{
                text: 'Source File',
                dataIndex: 'src',
                width: 179
            }, {
                text: 'Caption',
                dataIndex: 'caption',
                width: 265
            }]
        }
    }],

    title: "Master - Detail Grid"
});
