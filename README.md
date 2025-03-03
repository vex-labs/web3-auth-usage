This is a messy example implementation of how we will use Web3Auth to login to our app.

Most of the meat is in the `src/context/Web3AuthContext.js` file.

Basically we are using web3auth to login. When a new login happens we create a new account on the blockchain and store public key and account id in the database. When a user logs in again we find the account by the public key and use that account. We also create a new account in the database if a user is using a wallet but we don't store the public key as this could cause duplicates.

The code also needs to check whether the account name is going to be valid for near and check the database for existing accounts with that name.

.env

```env
USERS_ACCOUNT_PRIVATE_KEY=
MONGODB_URI=
WEB3AUTH_CLIENT_ID=
RELAYER_PRIVATE_KEY=
```
