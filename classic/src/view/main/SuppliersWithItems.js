Ext.define('Suppliers.view.main.supplierWithItems', {
    extend: 'Ext.panel.Panel',
    xtype: 'supplierWithItems',
    controller: 'mainview',
    //controller: 'SupplierWithItemsViewController',

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
                items: [{
                    xtype: 'grid',
                    reference: 'forItems',
                    itemId: 'suppliersWithItemsGridItemId',
                    id: 'suppliersWithItemsGridId',
                    //width: '50%',
                    flex: 1,
                    height: 350,
                    margin: '5 4 5 0',

                    title: 'List of Suppliers',
                    //id: 'gridTitle',
                    autoScroll: true,
                    listeners: {
                        //rowclick: 'onSelectRow',
                        select : function(grid, record, index, eOpts){
                            var view  = Ext.getCmp('dataviewRef'),
                                store = view.getStore();

                            store.loadData([record]);
                        }
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

                    //width: '50%',
                    flex: 1,
                    height: 350,
                    margin: '5 0 5 5',
                    border: '1px solid #DCDCDC',
                    autoscroll: true,
                    handler: function(){
                        system.log('More Info Handler');
                    },

                    title: 'More Info ',
                    bind : {
                        title: '{forItems.selection.firstName} {forItems.selection.lastName}, {forItems.selection.debt}€'
                    },


                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'First Name',
                        bind: '{forItems.selection.firstName}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Last Name',
                        bind: '{forItems.selection.lastName}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Office Location',
                        bind: '{forItems.selection.officeLocation}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Phone Number',
                        bind: '{forItems.selection.phoneNumber}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Email',
                        bind: '{forItems.selection.email}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Latitude',
                        bind: '{forItems.selection.latitude}',
                        allowBlank: true
                    }, {
                        fieldLabel: 'Longitude',
                        bind: '{forItems.selection.longitude}',
                        allowBlank: true
                    }],
                }
                ]

            }, {
                xtype: 'panel',
                //title: 'Supplier Item',

                width: '100%',
                layout: 'fit',
                height: 360,
                itemId: 'itemsDataView',

                items: [{
                    xtype: 'panel',
                    title: 'Supplier Item',
                    layout: 'fit',
                    alias:'widget.imageview',
                    id: 'itemsImageViews',
                    frame: true,
                    collapsible: true,
                    width: 1000,
                    //store: Ext.data.StoreManager.lookup('imagesStore'),
                    emptyText: 'No images available',
                    items: Ext.create('Ext.view.View', {
                        scrollable : true,
                        store: Ext.create('Suppliers.store.Supplier'),
                        reference : 'dataviewRef',
                        id : 'dataviewRef',
                        tpl: new Ext.XTemplate(
                            '<tpl for=".">',
                            '   <div class="selector" style="padding-bottom: 200px">',
                            '       <span>{firstName}</span><br>',
                            '       <tpl for="items">',
                            //'&nbsp;&nbsp;&nbsp;<span>{caption}</span><br>',
                            //'&nbsp;&nbsp;&nbsp;<img src="{src}" /><br>',
                            '       <div class="thumb-wrap"><img width="100" height="100" src="{src}"><br>{caption}</div>',
                            '       </tpl>',
                            '   </div>',
                            '</tpl>',
                            '<div class="x-clear"></div>'),
                        itemSelector: 'div.selector',
                        trackOver: true,
                        overItemCls: 'x-item-over',
                        height: 500,
                        emptyText: 'No images available',

                        //This method used to append data to view
                        prepareData: function( data, recordIndex, record) {
                            console.log('prepareData Sample');
                            //debugger;
                            console.log(record);
                            return data;
                        },
                    }),
                }]
            }]
        }]
    }]
});
