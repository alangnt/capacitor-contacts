import { registerPlugin } from '@capacitor/core';
const CapacitorContacts = registerPlugin('CapacitorContacts', {
    web: () => import('./web').then((m) => new m.CapacitorContactsWeb()),
});
export * from './definitions';
export { CapacitorContacts };
//# sourceMappingURL=index.js.map