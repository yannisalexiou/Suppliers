/**
 * Created by trainee on 14/7/2017.
 */
Ext.define('Suppliers.view.addNewSupplier.AddNewSupplierViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addnewsupplierview',

    /**
     * Called when the view is created
     */
    init: function() {

    },

    cancelUpdate: function () {
        var view = this.getView(),
            record = view.getRecord();

        view.destroy();
        record.reject();
    },

    submitUpdate: function(me) {
        var view = this.getView(),
            record = view.getRecord();

        view.destroy();
        record.commit();
    }
});