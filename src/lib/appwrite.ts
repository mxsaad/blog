import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('655e6a0499db44afa840');

export const account = new Account(client);
export { ID } from 'appwrite';
