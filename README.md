# Nearest! JavaScript SDK [![npm version](https://badge.fury.io/js/nearest-sdk.svg)](https://badge.fury.io/js/nearest-sdk)

## Setup
Install the NPM Package by using

``` 
npm i nearest-sdk -S
```

Now you can use the SDK by importing it. The code is isomophic ready.

## Init SDK

``` javascript
import { NearestClient } from 'nearest-sdk';

const SDK = NearestClient({
  apiKey: 'your-api-public-key',
  app: 'your-appId',
});
```

## The API
The API works with this schema: `SDK.$topic.$action(options, [callback])`. All methods return a Promise except `callback` is defined. 

## Methods

### App
#### get
##### Request parameters
Parameter           | Description
------------------- | -------------
lang: String        | The language code (de) for translations.

***

### Nodes
#### get
##### Request parameters
Parameter           | Description
------------------- | -------------
id: [String]!       | Required: The node id (`_id`)
lang: String	    | The language code (de) for translated content.

***

#### nearest
#### getByBound
#### getByRegion

### Stats
#### getStats
#### getCountriesNodesAvailable
#### getRegionsNodesAvailable

### Regions
#### get
#### getByPath
#### getByName

### Directions
#### get

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
