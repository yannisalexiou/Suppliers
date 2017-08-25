/**
 * Created by trainee on 14/7/2017.
 */
Ext.define('Suppliers.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainview',

    //Called when the view is created
    init: function() {

    },


    config: {
        listen: {
            // The fireEvent() is coming from a component so we listen on the component event domain
            component: {
                // The component we are listening to is alias : map
                'map': {
                    // The fireEvent() from the map component
                    markerClick: function (marker) {
                        /*
                         * This will create and open a window with a zoomed in street map as well
                         * as open the WikiPedia page from the url on the marker
                         * */
                        Ext.create('Ext.window.Window', {
                            title: marker.title, // Marker title
                            height: 600,
                            width: 1000,
                            modal: true,
                            layout: 'border',
                            maximizable: true,
                            items: [
                                {
                                    xtype: 'gmappanel',
                                    region: 'west',
                                    split: true,
                                    width: 300,
                                    center: {
                                        lat: marker.lat, // Marker latitude
                                        lng: marker.lng // Marker longitude
                                    },
                                    mapOptions: {
                                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                                        zoom: 10
                                    }
                                },
                                {
                                    xtype: 'container',
                                    region: 'center',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'uxiframe',
                                            src: marker.url // Marker URL
                                        }
                                    ]
                                }
                            ]
                        }).show()
                    }
                }
            }
        }
    },

    onSelectRow: function (grid, record, index, eOpts)  {
        console.log('onSelectRow Fired');

        //var grid = view.up('app-main').down('#overviewSuppliersGridItemId');
        //var selection same as record from parameters.
        //var selection = grid.getView().getSelectionModel().getSelection()[0];

        //console.log('Selection:');
        //console.log(record.get('debt'));
        var debtFromRecord = record.get('debt');

        //console.log('End of selection');

        var polar = Ext.getCmp('polarItemId');
        var obj = {
            test : debtFromRecord
        };

        //console.log(obj);
        var thisRecordDebtArray = [obj];

        //polar.getStore().add(obj);
        polar.getStore().loadData(thisRecordDebtArray);
    },

    onSearchCriteria: function(cmp, e, eOpts ) {
        console.log('SWAG Method Called');
        // if (e.getKey() == e.ENTER ) {
        //     console.log('ENTER')
        //     Ext.Msg.alert('Success!', 'Enter Key Event');
        // }
        // else if (cmp.xtype == 'button') {
        //     console.log('button')
        //     Ext.Msg.alert('Success!', 'Click Event');
        // }

        if (e.getKey() == e.ENTER || cmp.xtype == 'button')
        {
            //Ext.Msg.alert('Success!', 'Swag');

            var textfieldRef = this.lookupReference('searchTextfieldRef');
            var textfieldText = textfieldRef.getValue();

            var store = Ext.getStore('supplier');
            var records = store.data.items; // get All data

            //filter with a single field
            store.filter('firstName', textfieldText);

            // store.filterBy(function(records, textfieldText) {
            //     //console.log('Inside filterBy');
            //     //console.log(textfieldText);
            //     if(records.get('firstName') ===   'Kostas' || records.get('firstName') ===   'Kostas')  {
            //         console.log('filterBy True');
            //         return true;
            //     }
            //     else {
            //         console.log('filterBy False');
            //         return false;
            //     }
            // });
        }

    },

    legacyWayToDisableViewButtons: function () {
        var deleteButton  = Ext.getCmp('deleteId');
        var intentoryButton =  Ext.getCmp('toInventoryButtonId');

        //The following two lines needs view argument
        //var intentoryButton = view.up('app-main').down('#toInventoryButtonItemId')
        //var deleteButton = view.up('app-main').down('#deleteId')

        console.log(deleteButton);

        intentoryButton.setDisabled(false);
        deleteButton.setDisabled(false);
    },

    /*
     * Method to add a new marker.  This could come from a form and could also use the geocode function
     * */
    addNewMarker: function (record) {

        var map = Ext.getCmp('googleMapId'),
            marker = {
                lat: record.data.latitude,
                lng: record.data.longitude,
                title: record.data.officeLocation,
                //position: record.data.officeLocation,
                animation: google.maps.Animation.DROP
            };
        map.addMarker(marker)
    },

    onSelectFunction : function (grid, record, index, eOpts) {
        //The old way to disable buttons with events
        //this.legacyWayToDisableViewButtons();
        console.log('MainView On Select');
        //Add new marker to google map
        this.addNewMarker(record);

    },

    addNewSupplierButtonPressedWithPlugin: function (view, index, item, record) {
        var grid = view.up('app-main').down('#suppliersGridItemId');

        console.log(grid);
        var plugin = grid.findPlugin('rowediting');
        plugin.cancelEdit();

        var record = new Suppliers.model.SupplierModel({
            firstName : 'John',
            lastName : 'AppleSeed',
            officeLocation : 'Athens, Greece',
            phoneNumber : '2101234567',
            email: 'john@softone.gr',
            latitude: '44.968046',
            longitude : '-94.420307',
            debt: 100
        });
        var store = Ext.getStore('supplier');
        grid.getStore().insert(0, record);
        plugin.startEdit(record, 0);
    },

    addNewSupplierButtonPressed: function(view, index, item, record) {
        //Ext.Msg.alert('Success!', 'Add Menu Clicked');
        var form = Ext.create('Suppliers.view.addNewSupplier.AddNewSupplierView', {
            //height : 400
        });
        var win = Ext.create('Ext.window.Window', {
            title: 'Add New Supplier',
            width: 500,
            //height: 300,
            layout : 'fit',
            items: [form],
            modal: true
        });
        win.show();
    },
    closePopup: function(cmp) {
        cmp.close();
    },

    configButtonPressed: function() {
        Ext.Msg.alert('Error', 'Currently Unavailable');
    },

    onPreview: function() {
        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
            return;
        }
        var chart = this.getChart();

        chart.preview();
    },

    onStackGroupToggle: function (segmentedButton, button, pressed) {
        var chart = this.lookup('chart'),
            series = chart.getSeries()[0],
            value = segmentedButton.getValue();

        series.setStacked(value === 0);
        chart.redraw();
    },

    // The 'target' here is an object that contains information
    // about the target value when the drag operation on the column ends.
    onEditTipRender: function (tooltip, item, target, e) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), target.yField),
            browser = item.series.getTitle()[fieldIndex];

        tooltip.setHtml(
            browser + ' on ' + item.record.get('debt') + ': ' +
            target.yValue.toFixed(1) + '%');
    },

    onBarTipRender: function (tooltip, record, item) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            browser = item.series.getTitle()[fieldIndex];

        tooltip.setHtml(browser + ' on ' +
            record.get('debt') + ': ' +
            record.get(item.field).toFixed(1) + '%');
    },

    onGridMonthRender: function (value) {
        return value;
    },

    onGridValueRender: function (value) {
        return value + '%';
    },

    onAxisLabelRender: function (axis, label, layoutContext) {
        return label.toFixed(label < 10 ? 1: 0) + '%';
    },

    onSupplierAxisLabelRender: function (axis, label, layoutContext) {
        if (label === 0) return 'solvent';
        if (label === 400) return 'Comfortable';
        if (label === 800) return 'EFCC';




        return ' ';
    },

    onRefresh: function () {
        var r = Math.random;

        if (this.store) {
            this.store.setData([{
                temp: r() * 800
            }]);
        }
    },

    onAfterRender: function () {
        var me = this,
            gauges = me.getView().query('polar'),
            i, gauge;

        me.store = Ext.create('Ext.data.JsonStore', {
            fields: ['temp'],
            data: [
                { temp: 150 }
            ]
        });

        for (i = 0; i < gauges.length; i++) {
            gauge = gauges[i];
            gauge.setStore(me.store);
        }
    }

});