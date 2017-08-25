Ext.define('Suppliers.view.main.compareSuppliersView', {
    extend: 'Ext.panel.Panel',
    xtype: 'compareSuppliersView',
    //controller: 'mainview',
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
                title: 'Primary Store',
                layout: {
                    type: 'hbox',
                    align: 'begin'
                },
                items: [{
                    xtype: 'grid',
                    reference: 'mainGrid',
                    itemId: 'suppliersGridItemId',
                    id: 'suppliersGridId',
                    width: '50%',
                    height: 350,
                    margin: '5 4 5 0',

                    title: 'List of Suppliers',
                    id: 'gridTitle',
                    autoScroll: true,
                    listeners: {
                        //rowclick: 'onSelectRow',
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
                width: '100%',
                autoScroll: true,
                title: 'Chained Store',
                layout: {
                    type: 'hbox',
                    align: 'begin'
                },
                items: [{
                    xtype: 'grid',
                    reference: 'secondaryGrid',
                    itemId: 'suppliersSecondaryGridItemId',
                    //id: 'suppliersGridId',
                    width: '50%',
                    height: 350,
                    margin: '5 4 5 0',

                    title: 'List of Suppliers',
                    //id: 'gridTitle',
                    autoScroll: true,
                    listeners: {
                        //rowclick: 'onSelectRow',
                    },

                    //store: 'store.supplierChainedStore',
                    //store: 'supplierChainedStore',
                    //store: Ext.create('Suppliers.store.SupplierChainedStore'),

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
                        title: '{secondaryGrid.selection.firstName} {secondaryGrid.selection.lastName}, {secondaryGrid.selection.debt}€'
                    },


                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'First Name',
                        bind: '{secondaryGrid.selection.firstName}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Last Name',
                        bind: '{secondaryGrid.selection.lastName}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Office Location',
                        bind: '{secondaryGrid.selection.officeLocation}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Phone Number',
                        bind: '{secondaryGrid.selection.phoneNumber}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Email',
                        bind: '{secondaryGrid.selection.email}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Latitude',
                        bind: '{secondaryGrid.selection.latitude}',
                        allowBlank: true
                    }, {
                        fieldLabel: 'Longitude',
                        bind: '{secondaryGrid.selection.longitude}',
                        allowBlank: true
                    }],
                }
                ]

            }, {
                xtype: 'panel',
                id: 'panelForFacebook',
                width: '300px',
                height: '200px',
                items : [{
                    xtype: 'panel',
                    //renderTo: Ext.getElementById("facebookDivId"),
                    //renderTo: document.body,
                    //renderTo: Ext.get('content'),
                    //autoCreateViewPort: false,
                    height: '300px',
                    width: '150px',
                    iconCls: 'x-fa fa-info-circle',
                    itemId: 'facebookItemId',
                    id: "facebookId",
                    layout: {
                        type: "hbox",
                        align: "stretch"
                    },
                    //html: '<div class="fb-login-button" data-width="100" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="true" data-auto-logout-link="false" data-use-continue-as="true">YOLO</div>',
                    listeners: {
                        // beforerender: function (panel, eOpts) {
                        //     Ext.getCmp("facebookId").setHeight(Ext.get("facebookDivId").getHeight());
                        //     Ext.getCmp("facebookId").updateLayout();
                        //
                        //     Ext.on('resize', function () {
                        //         Ext.getCmp("facebookId").setHeight(Ext.get("facebookDivId").getHeight());
                        //         Ext.getCmp("facebookId").updateLayout();
                        //     });
                        //
                        //     panel.update('');
                        //     console.log('before render');
                        // },
                        //
                        // render: function(panel) {
                        //     console.log('render');
                        //     panel.body.update('<script src="http://docs.sencha.com/ext-js/4-0/extjs/examples/window/window.js"></script>', true);
                        // },
                        //
                        // afterrender	: function(p) {
                        //     console.log('afterrender');
                        // }
                    }
                }],

            }
            ]
        }]
    }]

});
