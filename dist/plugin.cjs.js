'use strict';

var core = require('@capacitor/core');

const CapacitorContacts = core.registerPlugin('CapacitorContacts', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.CapacitorContactsWeb()),
});

class CapacitorContactsWeb extends core.WebPlugin {
    async countContacts() {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async createContact(_options) {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async createGroup(_options) {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async deleteContactById(_options) {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async deleteGroupById(_options) {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async displayContactById(_options) {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async displayCreateContact(_options) {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async displayUpdateContactById(_options) {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async getAccounts() {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async getContactById(_options) {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async getContacts(_options) {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async getGroupById(_options) {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async getGroups() {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async isAvailable() {
        return { isAvailable: false };
    }
    async isSupported() {
        return { isSupported: false };
    }
    async openSettings() {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async pickContact(_options) {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async pickContacts(_options) {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async updateContactById(_options) {
        throw this.unavailable('Contacts API not available on the web implementation.');
    }
    async checkPermissions() {
        return { readContacts: 'denied', writeContacts: 'denied' };
    }
    async requestPermissions(_options) {
        return { readContacts: 'denied', writeContacts: 'denied' };
    }
    async getPluginVersion() {
        return { version: 'web' };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorContactsWeb: CapacitorContactsWeb
});

exports.CapacitorContacts = CapacitorContacts;
//# sourceMappingURL=plugin.cjs.js.map
