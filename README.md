# REACT EXERCISE

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

CryptoCurrency Tracker

# The objective

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

## Browser Support

-   Not for IE and Opera Mini

## Versions

##### 1.00

-   initial version

##### 1.1

-   fully with redux
-   partially with thunk
-   responsive

##### 1.2

-   initial coin list fetched with thunk
-   new background and some colors
-   corrected error handling in getcurrentprice

##### 1.3

-   restyled

##### 1.4

-   fully thunked

##### 1.5

-   lazy and suspense for DataDisplay

#### 1.6

-   prevention against very long numbers
-   focusable inputs
-   tooltip saying that INEWESTUJ is not yet implemented

#### 1.7

-   fixed bug which didn't stop attempts to get current crypto price after failure
-   when returning to choice window, the forms are cleared

#### 2.0

-   Totally rewritten logic, now with Axios hooks

## TODO

003 implementation for INWESTUJ

006 crypto selection form should clearly show that is drop-down

007 there is GetListOfCryptos Hook but we use uselazyAxios, why?

008 selection of currency and crypto: too much ifs. Why not useEffect?

010 results table shows with considerable delay. Spinner?

historical data z dziwnym opóxnieniem przenosi się na historical crypto i to jest problem. Nie wiem czy state
nie był szybszy wbre wpozorom
