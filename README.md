# Owler App

Owler is a React Native app that helps users to be aware of the variation in the prices of major cryptocurrencies.

By identifying patterns in market movements, candlesticks and indexes, Owler is able to notify the user so that he can effectively use the information when it is actually required.

## Technical Aspects:

The application is built with React Native (with Expo) and relies mainly on three (3) APIs: 
- [Coingecko API](https://www.coingecko.com/en/api/documentation) (Icons and pricing).
- [Binance API](https://data.binance.vision/) (Intertemporal pricing)
- [Taapi](https://taapi.io) (RSI information)

## Usage:

1) Set Up:

 Clone the repository in your local enviroment and install the dependencies:
	
```
	git clone "https://github.com/santiellena/owler-app.git"
	cd owler-app
	npm install
	
``` 
	
2) Run it in your local enviroment:

```
	npm start

```


### Additional Comments:

You will probably be ready to go but if you want the app to run locally without issues, you will have to use a compatible Node version.

