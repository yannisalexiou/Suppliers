Ext.define('Suppliers.view.main.supplierDatabase', {
    extend: 'Ext.panel.Panel',
    xtype: 'supplierDatabaseView',
    controller: 'mainview',
    //controller: 'SupplierDatabaseViewController',

    //title: 'Update Record',

    // floating: true,
    // centered: true,
    //modal: true,
    items: [{
        xtype: 'container',
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'begin ',
        },
        items: [{
            xtype: 'toolbar',
            width   : '100%',
            docked: 'top',
            style: 'background-color: #5795CB',
            items: [{
                xtype    : 'textfield',
                itemId: 'searchTextfieldId',
                reference: 'searchTextfieldRef',
                name     : 'field1',
                emptyText: 'enter search term',
                listeners: {
                    specialkey: 'onSearchCriteria'
                }
            }, {
                // xtype: 'button', // default for Toolbars
                text: 'Search',
                iconCls: 'x-fa fa-search',
                listeners: {
                    click: 'onSearchCriteria'
                }
            }, {
                xtype: 'tbfill'
            }, {
                xtype: 'tbseparator'
            }, {
                xtype: 'tbtext',
                text: 'Suppliers',
                style: {
                    'font-weight': 'bold',
                    'color': '#ffffff'

                }
            }, {
                text: 'Config',
                iconCls: 'x-fa fa-cogs ',
                listeners: {
                    click: 'configButtonPressed'
                }
            }
            ]
        }, {
            xtype: 'panel',
            width: '100%',
            autoScroll: true,
            layout: {
                type: 'vbox',
                align: 'begin'
            },
            items: [{
                xtype: 'panel',
                width: '100%',
                autoScroll: true,
                title: 'Panel Records',
                layout: {
                    type: 'hbox',
                    align: 'begin'
                },
                dockedItems: [{
                    xtype: 'toolbar',
                    items: [{
                        text: 'Add',
                        iconCls: 'x-fa fa-plus-circle',
                        handler: 'addNewSupplierButtonPressedWithPlugin'
                    }, '-', {
                        id: 'deleteId',
                        itemId: 'deleteItemId',
                        reference: 'deleteButtonRef',
                        text: 'Delete',
                        iconCls: 'x-fa fa-minus-circle',
                        bind: {
                            disabled: '{!mainGrid.selection}'
                        },
                        //disabled: true,
                        handler: function(){
                            var grid = this.up('app-main').down('#suppliersGridItemId');
                            var store = grid.getStore();
                            var selection = grid.getView().getSelectionModel().getSelection()[0];

                            if (selection) {
                                console.log('Inside Selection from Delete Button');
                                // var store = Ext.getStore('supplier');
                                store.remove(selection);

                                console.log(store.getCount());
                                if (store.getCount() > 0) {
                                    console.log('Inside getCount');
                                    grid.getSelectionModel().select(0, true);
                                }
                            }
                        }
                    },'-','-', {
                        id: 'toInventoryButtonId',
                        itemId: 'toInventoryButtonItemId',
                        text: 'Supplier&apos;s Inventory',
                        bind: {
                            disabled: '{!mainGrid.selection}',
                            text: '{mainGrid.selection.firstName} {mainGrid.selection.lastName} Inventory'
                        },
                        iconCls: 'x-fa fa-shopping-basket',
                        //disabled: true,
                        handler: function(){
                            var supplierGrid = this.up('app-main').down('#suppliersGridItemId');
                            var store = supplierGrid.getStore();
                            var selection = supplierGrid.getView().getSelectionModel().getSelection()[0];
                            console.log(selection);

                            if (selection) {
                                console.log('Inside Selection from Inventory Button');
                                //Move to 5th tab
                                this.up('app-main').setActiveItem(4);

                                //Get the Grid of there
                                var gridWithItems = Ext.getCmp('suppliersWithItemsGridId');

                                //Recieve the selected record and row of the supplierGrid
                                var selectedRecord = supplierGrid.getSelectionModel().getSelection()[0];
                                var row = supplierGrid.store.indexOf(selectedRecord);

                                if (store.getCount() > 0) {
                                    gridWithItems.getSelectionModel().select(row, true);
                                }
                            }
                        }
                    }]
                }],
                items: [{
                    xtype: 'grid',
                    reference: 'mainGrid',
                    itemId: 'suppliersGridItemId',
                    id: 'suppliersGridId',
                    width: '50%',
                    height: 350,
                    margin: '5 4 5 0',

                    title: 'List of Suppliers',
                    //id: 'gridTitle',
                    autoScroll: true,
                    listeners: {
                        //rowclick: 'onSelectRow',
                        //rowclick: 'addNewMarker'

                        // select: 'addNewMarker'
                        select: 'onSelectFunction'
                        //(grid, record, index, eOpts)
                    },
                    store: {
                        type: 'supplier',
                        autoLoad: {start: 0, limit: 5},
                        sorters: [ 'firstName', 'lastName', 'phoneNumber'],
                        grouper: 'firstName'
                    },
                    columns: [{
                        text: 'First Name',
                        dataIndex: 'firstName',
                        flex: 1,
                        editor: 'textfield'
                    }, {
                        text: 'Last Name',
                        dataIndex: 'lastName',
                        flex: 1,
                        editor: 'textfield'
                    }, {
                        text: 'Phone Number',
                        dataIndex: 'phoneNumber',
                        flex: 1,
                        editor: {
                            xtype: 'textfield',
                            allowBlank: false
                        }
                    }, {
                        xtype: 'actioncolumn',
                        width: 25,
                        iconCls: 'x-fa fa-cog ',
                        items: [{
                            iconCls: 'x-fa fa-trash-o',
                            tooltip: 'Delete',
                            handler: function(grid, rowIndex, colIndex){
                                //var rec = grid.getStore().getAt(rowIndex);
                                //var selection = grid.getSelectionModel().select(rec );
                                console.log('Row Index:' + rowIndex);
                                var grid = this.up('app-main').down('#suppliersGridItemId')
                                var store = grid.getStore();

                                var selection = grid.getView().getSelectionModel().getSelection()[0];

                                console.log('Selection: ' + grid.getSelectionModel().getSelected().generation);
                                var rec = grid.getStore().getAt(rowIndex);
                                grid.getSelectionModel().select(rec);
                                console.log('Inside Delete from Icon');
                                console.log(grid.getSelectionModel().getSelected());

                                if (selection) {
                                    console.log('Inside Selection');
                                    //var store = Ext.getStore('supplier');
                                    store.remove(selection);
                                    grid.getSelectionModel().select(0, true);
                                    grid.getSelectionModel().select(rowIndex, true);
                                }
                            }
                        }]
                    } ],

                    selModel: 'rowmodel',
                    plugins: [{
                        ptype: 'rowediting',
                        clicksToEdit: 2
                    }],

                }, {
                    xtype: 'form',
                    itemId: 'moreInfo',
                    reference: 'moreInfoReference',

                    width: '50%',
                    height: 350,
                    margin: '5 0 5 5',
                    border: '1px solid #DCDCDC',
                    autoscroll: true,
                    handler: function(){
                        system.log('More Info Handler');
                    },

                    title: 'More Info ',
                    bind : {
                        title: '{mainGrid.selection.firstName} {mainGrid.selection.lastName}, {mainGrid.selection.debt}€'
                    },


                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'First Name',
                        bind: '{mainGrid.selection.firstName}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Last Name',
                        bind: '{mainGrid.selection.lastName}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Office Location',
                        bind: '{mainGrid.selection.officeLocation}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Phone Number',
                        bind: '{mainGrid.selection.phoneNumber}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Email',
                        bind: '{mainGrid.selection.email}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Latitude',
                        bind: '{mainGrid.selection.latitude}',
                        allowBlank: true
                    }, {
                        fieldLabel: 'Longitude',
                        bind: '{mainGrid.selection.longitude}',
                        allowBlank: true
                    }],
                }
                ]

            }, {
                xtype: 'panel',
                title: 'Google Map',

                width: '100%',
                layout: 'fit',
                height: 360,
                itemId: 'googleMapId',
                id: 'googleMapId',
                /*
                 * Method to add a new marker.  This could come from a form and could also use the geocode function
                 * */
                addMarker: function (marker) {
                    marker = Ext.apply({
                        map: this.up('app-main').down('gmappanel').gmap
                    }, marker);
                    if (!marker.position) {
                        marker.position = new google.maps.LatLng(marker.lat, marker.lng);
                    }
                    console.log('YOLO MAPS');
                    this.up('app-main').down('gmappanel').gmap.setZoom(4);
                    this.up('app-main').down('gmappanel').gmap.setCenter(marker.position);

                    var m = new google.maps.Marker(marker);
                    return m;
                },

                items: [{
                    xtype: 'gmappanel',
                    //width: '100%',
                    //height: '500px',
                    gmapType: 'map',
                    center: {
                        geoCodeAddr: "Αχιλλέως 8, Καλλιθέα 176 74",
                        marker: {
                            title: 'SoftOne'
                        }
                    },

                    mapOptions : {
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        scrollwheel: false
                    }
                }]
            }]
        }]
    }]

});
