Ext.define('QuickStart.view.main.OverviewViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.OverviewViewController',

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

        //Add new marker to google map
        this.addNewMarker(record);

    },

});