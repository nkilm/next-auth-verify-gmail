# Next-Auth Example

> minimal example showing how 'sign-in via X' is implemented in websites

### Live Demo

- [https://next-auth-gmail.vercel.app/](https://next-auth-gmail.vercel.app/)

### Prerequisites

- Google Credentials - `CLIENT_ID` and `CLIENT_SECRET`

> You can get them from [here](https://console.cloud.google.com/apis/credentials)

- `SECRET` which is just random _hex_ string, generate using the below command.

```bash
# in your terminal
openssl rand -hex 64
```

### Running Locally

```bash
yarn
yarn dev

# build
yarn build
```
