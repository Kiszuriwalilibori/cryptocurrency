# REACT EXERCISE

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

CryptoCurrency Tracker

## The objective

-   demonstrate knowledge of React, Router, Redux, Styled Components, Material UI
-   act as playground for new techs and skills

## Description

-   The app gets data from external API
-   Afterwards it prompts to choose crypto- and basic- currency
-   displays its current price and some historical prices
-   updates results every 5 seconds

## Technologies

-   React
-   Redux
-   Styled Components
-   Material UI
-   JS
-   TypeScript

## Installation

-   Not required, just open HTML file in your browser
-   That site is hosted on GH Pages and Netlify

## Steps to create local copy:

1. Fetch/clone repo to newly created directory
2. Run npm install (note ready for yarn).
3. Obtain your own api key from https://www.cryptocompare.com
4. In project main directory add .env file with the following content

REACT_APP_API_KEY ={your api key}.

5. In "node_modules" directory find "axios" directory, then file index.d.ts. In this file find export interface AxiosRequestConfig object and add property "Apikey?: string"

6. Start app with npm run
7. Enjoy app

## Browser Support

-   Not for IE and Opera Mini

## Versions

### 1.00

-   initial version

### 1.1

-   fully with redux
-   partially with thunk
-   responsive

### 1.2

-   initial coin list fetched with thunk
-   new background and some colors
-   corrected error handling in getcurrentprice

### 1.3

-   restyled

### 1.4

-   fully thunked

### 1.5

-   lazy and suspense for DataDisplay

### 1.6

-   prevention against very long numbers
-   focusable inputs
-   tooltip saying that INEWESTUJ is not yet implemented

### 1.7

-   fixed bug which didn't stop attempts to get current crypto price after failure
-   when returning to choice window, the forms are cleared

### 2.0

-   Totally rewritten logic, now with Axios hooks

### 2.0.1

-   006 done Crypto description component added
-   007 done page with data is persistent

### 2.1.0

-   besides many changes of rather formal type (var's names) cryptocurrencyform is visible from the very beginning but is not active

### 2.1.1

-   besides many invisible or formal changes, the bug which caused long cryptocurrency names to overfill its container is fixed. Also, the event when crypto has no price is better handled

### 2.1.2

Mui version 5 applied
Some deps moved to devdependencies in package.json
new hook gathers all logic for confirming selection

### 2.1.3

fetching and keeping available listof all cryptos now with react-query, so redux and useAxios are removed from deps

### 4.0.1

Fetching current crypto price with Web Sockets

### 4.0.2

Simplified in many aspects. No more Aggregated Results. Now current price goes to final component directly from store and not through aggregated.

## TODO

001 implementation for INWESTUJ

----003 selection of currency and crypto: too much ifs. Why not useEffect?

004 formatCurrentPrice zawiera helpera tworzącego obiekty albo zastosowac wszędzie albo usunąć w każdym razie
zdecydować nie jest to palące bo taki obiekt tworzę tpoza tym tylko raz

005 timestamps opisać każdą po kolei

--006 Opis crypto dodać

--007 persistent

008 nowy wzorzec contextu może

009 kółko postępu pokazujące czas do nowego pobrania

010 z unsplasha tło zmienne dołożyć

011 do rozważenia semantyka typu section zamiast MUI Box itp.

npm-check-unused to komenda do zależności

wydzielić media query do osobnego pliku i wczytywać ten plik warunkowo. Ale, co sie stanie kiedy zrobimy resize?

renderowanie Resultspage jest wymuszane przez useQuery, to jest sprawdzone
