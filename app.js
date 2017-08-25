/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Suppliers.Application',

    name: 'Suppliers',

    requires: [
        // This will automatically load all classes in the Suppliers namespace
        // so that application classes do not need to require each other.

        'Suppliers.*'

    ],

    // The name of the initial view to create.
    mainView: 'Suppliers.view.main.Main'
});
