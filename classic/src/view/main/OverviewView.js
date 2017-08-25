Ext.define('Suppliers.view.main.OverviewView', {
    extend: 'Ext.panel.Panel',
    xtype: 'overviewView',
    //controller: 'mainview',
    //title: 'Update Record',

    // floating: true,
    // centered: true,
    //modal: true,

    layout : {
        type : 'vbox',
        align : 'stretch'
    },

    items: [{
        xtype: 'grid',
        reference: 'overviewGrid',
        itemId: 'overviewSuppliersGridItemId',
        id: 'overviewSuppliersGridId',
        //width: '100%',
        //height: 350,
        //margin: '5 4 5 0',

        flex : 1,

        title: 'List of Suppliers',
        autoScroll: true,
        listeners: {
            select: 'onSelectRow'
        },
        store: {
            type: 'supplier',
            autoLoad: {start: 0, limit: 5},
            sorters: ['firstName', 'lastName', 'officeLocation', 'phoneNumber', 'email', 'latitude', 'longitude', 'debt'],
            grouper: 'firstName'
        },
        columns: [{
            text: 'First Name',
            dataIndex: 'firstName',
            flex: 1
        }, {
            text: 'Last Name',
            dataIndex: 'lastName',
            flex: 1
        }, {
            text: 'Phone Number',
            dataIndex: 'phoneNumber',
            flex: 1
        }, {
            text: 'Office Location',
            dataIndex: 'officeLocation',
            flex: 1

        }, {
            text: 'Email',
            dataIndex: 'email',
            flex: 1

        },  {
            text: 'Debt',
            dataIndex: 'debt',
            flex: 1

        } ]

    }, {
        xtype: 'panel',
        reference: 'panelGaugeChartReference',

        items: [
            {
                xtype: 'polar',
                height: 350,
                itemId: 'polarItemId',
                id: 'polarItemId',
                reference: 'polarGaugeChartReference',
                padding: '0 0 0 0',
                insetPadding: 30,
                store: {
                    fields: ['test']
                },
                axes: {
                    title: 'Supplier debt',
                    type: 'numeric',
                    position: 'gauge',
                    maximum: 1100,
                    majorTickSteps: 2,
                    renderer: 'onSupplierAxisLabelRender'
                },
                series: {
                    type: 'gauge',
                    angleField: 'test',
                    // bind: {
                    //     angleField: '{overviewGrid.selection.debt}'
                    // },
                    donut: 50,
                    colors: ['#1F6D91', '#90BCC9'],
                    needle: true
                }
            }]
    }]
});
