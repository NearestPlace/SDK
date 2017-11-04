# Nearest! JavaScript SDK [![npm version](https://badge.fury.io/js/%40nearest%2Fnearest-sdk.svg)](https://badge.fury.io/js/%40nearest%2Fnearest-sdk)

## Setup
Install the NPM Package by using

```
npm i @nearest/nearest-sdk -S
```

Now you can use the SDK by importing it. The code is isomophic ready.

## Init SDK

``` javascript
import { NearestClient } from 'nearest-sdk';

const nearest = NearestClient({
  apiKey: 'your-api-public-key',
  app: 'your-appId',
});
```

## The API
The API works with schema `SDK.$topic.$action(options, [callback])`. All methods return a Promise except `callback` is defined.

## Methods

### App
#### get (options, [callback])
##### Request parameters
Parameter           | Description
------------------- | -------------
lang: String        | The language code (de) for translations.

***

### Nodes
#### get (options, [callback])
##### Request parameters
Parameter           | Description
------------------- | -------------
id: [String]!       | Required: The node id (`_id`)
lang: String	    | The language code (de) for translated content.

***

#### nearest (options, [callback])
##### Request parameters
Parameter           | Description
------------------- | -------------
lat: Float          | A latitude for specifying a center point. Requires lng and radius.
lng: Float	        | A longitude for specifying a center point. Requires lat and radius.
radius: Int         | Max. distance in meters a node is located from the center. Refuires lat and lng.
lang: String        | The language code (de) for translated content.
limit: Int          | Limit amount of nodes.

***

#### getByBound (options, [callback])
##### Request parameters
Parameter           | Description
------------------- | -------------
bound: [[Float]]!   | Required: Array of coordinates, representing a bounding box.
limit: Int	        | Limit amount of nodes. Default 10.

***

#### getByRegion (options, [callback])
##### Request parameters
Parameter           | Description
------------------- | -------------
regionId: [Int]!    | Required: Array of regionIds (osm_ids)
limit: Int	        | Max. amount of nodes. Default 10.

***

### Stats
#### getStats (options, [callback])
##### Request parameters
Parameter           | Description
------------------- | -------------
regions: [Int]!     | Required: Ids of the region

***

#### getCountriesNodesAvailable (options, [callback])
##### Request parameters
Parameter           | Description
------------------- | -------------

***

#### getRegionsNodesAvailable (options, [callback])
##### Request parameters
Parameter           | Description
------------------- | -------------
region: Int!        | Required: Array of region ids (osm_id).

***

### Regions
#### get (options, [callback])
##### Request parameters
Parameter           | Description
------------------- | -------------
id: [Int]!          | Required: Array of regionIds (osm_id)
lang: String        | The language code (de) for translated content.

***

#### getByPath (options, [callback])
##### Request parameters
Parameter           | Description
------------------- | -------------
path: String!       | Required: Path of a region (Germany/Berlin/Kreuzberg)
lang: String        | The language code (de) for translated content.

***

#### getByName (options, [callback])
##### Request parameters
Parameter           | Description
------------------- | -------------
name: String!       | Required: Name of a region (Bologna)
lang: String        | The language code (de) for translated content.

***

### Directions
#### get (options, [callback])
##### Request parameters
Parameter           | Description
------------------- | -------------
steps: [[Float]]!   | Required: The steps of a direction in lng,lat order. [[Lng,Lat],...,[Lng,Lat]]
mode: String        | Mode of the direction (car or foot)

***

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
