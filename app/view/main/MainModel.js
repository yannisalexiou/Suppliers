/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Suppliers.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Suppliers',
        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        // overviewDetail: '',
        // mainGridDetail : '',
        // secondGridDetail: '',
        // thirdGridDetail: ''
    },

    formulas : {

        overviewGridRecord: {
            bind: {
                bindTo: '{overviewGrid.selection}',
                deep: true
            },
            get: function(record) {
                return record;
            },
            set: function(record) {
                if(!record.isModel) {
                    record = this.get('records').getById(record);
                }
                this.set('overviewGridRecord', record);
            }
        },

        mainGridRecord: {
            bind: {
                bindTo: '{mainGrid.selection}',
                deep: true
            },
            get: function(record) {
                return record;
            },
            set: function(record) {
                if(!record.isModel) {
                    record = this.get('records').getById(record);
                }
                this.set('currentRecord', record);
            }
        },

        secondGridRecord: {
            bind: {
                bindTo: '{secondaryGrid.selection}',
                deep: true
            },
            get: function(record) {
                return record;
            },
            set: function(record) {
                if(!record.isModel) {
                    record = this.get('records').getById(record);
                }
                this.set('secondGridRecord', record);
            }
        },

        thirdGridRecord: {
            bind: {
                bindTo: '{forItems.selection}',
                deep: true
            },
            get: function(record) {
                return record;
            },
            set: function(record) {
                if(!record.isModel) {
                    record = this.get('records').getById(record);
                }
                this.set('thirdGridRecord', record);
            }
        },

        selection : {
            bind : {
                // overview: '{overviewGrid.selection}',
                // firstGrid : '{mainGrid.selection}',
                // secondGrid : '{secondaryGrid.selection}',
                // thirdGrid : '{forItems.selection}'
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
