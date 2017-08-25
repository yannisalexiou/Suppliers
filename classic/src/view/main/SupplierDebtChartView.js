Ext.define('Suppliers.view.main.supplierDebtChartView', {
    extend: 'Ext.panel.Panel',
    xtype: 'supplierDebtChartView',
    //controller: 'mainview',
    //title: 'Update Record',

    // floating: true,
    // centered: true,
    //modal: true,

    items: [{
        xtype: 'container',
        items: [{
            xtype: 'panel',
            //width: 650,
            flex: 1,
            layout: {
                type: 'vbox'
            },
            items: [{
                xtype: 'cartesian',
                reference: 'chart',

                width: '100%',
                height: 600,

                store: {
                    type: 'supplier'
                },

                captions: {
                    title: 'Supplier Debt Chart',
                    credits: {
                        text: 'SoftOne Technologies',
                        align: 'left'
                    }
                },

                insetPadding: {
                    top: 40,
                    left: 40,
                    right: 40,
                    bottom: 40
                },

                legend: {
                    type: 'sprite',
                    docked: 'bottom'
                },
                axes: [{
                    type: 'numeric',
                    position: 'left',
                    title: {
                        text: 'Supplier Debt in Euros',
                        fontSize: 10
                    },
                    fields: 'debt'
                }, {
                    type: 'category',
                    position: 'bottom',
                    title: {
                        text: 'Supplier: Last Name',
                        fontSize: 10
                    },
                    fields: 'lastName'
                }],
                series: {
                    type: 'bar',
                    title: 'Value in Euros',
                    subStyle: {
                        fill: ['#388FAD'],
                        stroke: '#1F6D91'
                    },
                    stacked: true,
                    style: {
                        opacity: 0.80
                    },
                    highlight: {
                        fillStyle: 'yellow'
                    },
                    xField: 'lastName',
                    yField: 'debt'
                }
            }]
        }]
    }]


});
