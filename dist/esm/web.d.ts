import { WebPlugin } from '@capacitor/core';
import type { CapacitorContactsPlugin, CountContactsResult, CreateContactOptions, CreateContactResult, CreateGroupOptions, CreateGroupResult, DeleteContactByIdOptions, DeleteGroupByIdOptions, DisplayContactByIdOptions, DisplayCreateContactOptions, DisplayCreateContactResult, DisplayUpdateContactByIdOptions, GetAccountsResult, GetContactByIdOptions, GetContactByIdResult, GetContactsOptions, GetContactsResult, GetGroupByIdOptions, GetGroupByIdResult, GetGroupsResult, IsAvailableResult, IsSupportedResult, PermissionStatus, PickContactOptions, PickContactResult, PickContactsOptions, PickContactsResult, RequestPermissionsOptions, UpdateContactByIdOptions } from './definitions';
export declare class CapacitorContactsWeb extends WebPlugin implements CapacitorContactsPlugin {
    countContacts(): Promise<CountContactsResult>;
    createContact(_options: CreateContactOptions): Promise<CreateContactResult>;
    createGroup(_options: CreateGroupOptions): Promise<CreateGroupResult>;
    deleteContactById(_options: DeleteContactByIdOptions): Promise<void>;
    deleteGroupById(_options: DeleteGroupByIdOptions): Promise<void>;
    displayContactById(_options: DisplayContactByIdOptions): Promise<void>;
    displayCreateContact(_options?: DisplayCreateContactOptions): Promise<DisplayCreateContactResult>;
    displayUpdateContactById(_options: DisplayUpdateContactByIdOptions): Promise<void>;
    getAccounts(): Promise<GetAccountsResult>;
    getContactById(_options: GetContactByIdOptions): Promise<GetContactByIdResult>;
    getContacts(_options?: GetContactsOptions): Promise<GetContactsResult>;
    getGroupById(_options: GetGroupByIdOptions): Promise<GetGroupByIdResult>;
    getGroups(): Promise<GetGroupsResult>;
    isAvailable(): Promise<IsAvailableResult>;
    isSupported(): Promise<IsSupportedResult>;
    openSettings(): Promise<void>;
    pickContact(_options?: PickContactOptions): Promise<PickContactResult>;
    pickContacts(_options?: PickContactsOptions): Promise<PickContactsResult>;
    updateContactById(_options: UpdateContactByIdOptions): Promise<void>;
    checkPermissions(): Promise<PermissionStatus>;
    requestPermissions(_options?: RequestPermissionsOptions): Promise<PermissionStatus>;
    getPluginVersion(): Promise<{
        version: string;
    }>;
}
