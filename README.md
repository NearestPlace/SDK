# Nearest! SDK

## Setup
Install the NPM Package by using

`` npm i nearest-sdk --save``

Now you can use the SDK by importing it. The code is isomophic ready.

## Init SDK

``` javascript
import NearestSDK from 'nearest-sdk';

const SDK = NearestSDK({
	publicKey: 'your-api-public-key',
});
```

## The API
The API works with this schema: `SDK.$topic.$action()`.

### Nodes
Working with codes provide the following actions:

* get

#### nodes.get
``` javascript
SDK.nodes.get({
	_id: 'a-special-id',
}).then((nodes) => {
	// work with returned nodes objects
}, (err) => {
	// work with the err
});
```
