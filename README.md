# Nearest! node.js SDK [![npm version](https://badge.fury.io/js/nearest-sdk.svg)](https://badge.fury.io/js/nearest-sdk)

## Setup
Install the NPM Package by using

`` npm i nearest-sdk --save``

Now you can use the SDK by importing it. The code is isomophic ready.

## Init SDK

``` javascript
import { NearestClient } from 'nearest-sdk';

const SDK = NearestClient({
	apiKey: 'your-api-public-key',
});
```

## The API
The API works with this schema: `SDK.$topic.$action()`.

### Server
Information from the server. Could be used for testing.

* **info**: Get info of Endpoint Server

#### server.version
``` javascript
SDK.server.info({}).then((serverInfo) => {
	const { version } = serverInfo;
	// do smth with it
}, (err) => {
	// work with the err
});
```
