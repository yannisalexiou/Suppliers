/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.define('Suppliers.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    controller: 'mainview',

    reference: 'root',
    name: 'mainView',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.container.Container',
        'Ext.toolbar.*',

        'Ext.ux.GMapPanel',

        'Suppliers.view.main.MainModel',
        'Suppliers.view.main.List',

        'Suppliers.model.SupplierModel',
        'Suppliers.store.SupplierChainedStore',

        'Ext.chart.Chart'
    ],

    //stores: ['Suppliers.store.Supplier', 'Suppliers.store.SupplierChainedStore'],

    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretch'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    initComponent: function() {
        this.callParent(arguments);
        var me = this;

        //Ext.create('Suppliers.store.Supplier',{id:'supplier'});
        //     //console.log(Ext.data.StoreManager.lookup('supplier'));

        // refresh the dataview when name is changed.
        // this.getViewModel().bind('{name}', function() {
        //     var dataview = me.down('#empList');
        //     dataview.refresh();
        // });
    },

    items: [{
            title: 'Overview',
            iconCls: 'fa-home',
            xtype: 'overviewView'

    }, {
            title: 'Suppliers Database',
            iconCls: 'x-fa fa-address-card -o',
            autoScroll: true,
            xtype: 'supplierDatabaseView'

    }, {
            title: 'Supplier Debt Chart',
            iconCls: 'fa-area-chart',
            xtype: 'supplierDebtChartView',

    }, {
            title: 'Compare Suppliers',
            iconCls: 'x-fa fa-balance-scale -o',
            autoScroll: true,
            xtype: 'compareSuppliersView'
    },
    //     {
    //     title: 'New Tab',
    //     iconCls: 'x-fa fa-times -o',
    //     autoScroll: true,
    //     xtype: 'dataViewViewTest'
    // },
        {
            title: 'Suppliers With Items',
            iconCls: 'x-fa fa-shopping-cart -o',
            autoScroll: true,
            xtype: 'supplierWithItems',
    }, {
            title: 'Customer - Orders',
            iconCls: 'x-fa fa-shopping-basket -o',
            autoScroll: true,
            xtype: 'customerOrderView',
    },{
            title: 'Supplier - Items in One Grid',
            iconCls: 'x-fa fa-shopping-basket -o',
            autoScroll: true,
            xtype: 'SupplierItemsOneGrid',
        }]
});
