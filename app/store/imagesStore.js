Ext.define('Suppliers.store.imagesStore', {
    extend: 'Ext.data.Store',
    id: 'imagesStore',
    alias: 'store.imagesStore',
    storeId: 'imagesStore',

    model: 'Suppliers.model.Image',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'app/Data/SuppliersWithItems.json',
        // reader: {
        //     type: 'json',
        //     rootProperty: 'suppliers.items',
        //     //rootProperty:
        // }
        reader: {
            type  : 'json',
            rootProperty  : function (obj) {
                // I can't reproduce your problem
                // so you should check in your console collection.id is right
                console.log('Inside rootProperty');
                console.log(obj);
                console.log('All items from suppliers');
                console.log(obj.suppliers.items);
                return obj.suppliers[0].items
            }
        }
    }

    //Use this way to load data hardcoded
    // data: [{
    //     src: 'http://www.sencha.com/img/20110215-feat-drawing.png',
    //     caption: 'Drawing & Charts'
    // }, {
    //     src: 'http://www.sencha.com/img/20110215-feat-data.png',
    //     caption: 'Advanced Data'
    // }, {
    //     src: 'http://www.sencha.com/img/20110215-feat-html5.png',
    //     caption: 'Overhauled Theme'
    // }, {
    //     src: 'http://www.sencha.com/img/20110215-feat-perf.png',
    //     caption: 'Performance Tuned'
    // }]
});