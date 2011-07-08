/*
 * File: carStore.js
 * Date: Mon Apr 12 2010 22:46:29 GMT-0700 (PDT)
 * 
 * This file was generated by Ext Designer version xds-1.0.0.7c.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

carStore = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        carStore.superclass.constructor.call(this, Ext.apply({
            storeId: 'MyStore',
            url: 'cars/cars.json',
            root: 'data',
            autoLoad: true,
            fields : [
            {
                name: 'manufacturer'
            },
            {
                name: 'model'
            },
            {
                name: 'price'
            },
            {
                name: 'wiki'
            },
            {
                name: 'img'
            }
        ]
        }, cfg));
    }
});
new carStore();