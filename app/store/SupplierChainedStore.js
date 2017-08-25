/**
 * Created by trainee on 28/7/2017.
 */
Ext.define('Suppliers.store.SupplierChainedStore', {
    extend: 'Ext.data.ChainedStore',
    source:'supplier',
    storeId: 'supplierChainedStore',

    alias: 'store.supplierChainedStore',

    sorters: [{
        property: 'lastName',
        direction: 'desc'
    }]

});