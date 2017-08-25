/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Suppliers.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Suppliers',
        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    formulas : {

        selection : {
            bind : {
                overview: '{overviewGrid.selection}',
                firstGrid : '{mainGrid.selection}',
                secondGrid : '{secondaryGrid.selection}',
                thirdGrid : '{forItems.selection}'
            },
            get : function (selection) {
                //debugger;
                console.log('Compined Selection');
                console.log(selection);
                //console.log(selection.overview.get('debt'));
                return selection;//.overview.get('debt');
            }
        }
    },

    //TODO - add data, formulas and/or methods to support your view
});
