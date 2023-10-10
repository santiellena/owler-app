# Owler App <img src="https://github.com/santiellena/owler-app/blob/development/assets/icon.png?raw=true" alt="Owler Icon" width="50"/>

Owler is a React Native app that helps users to be aware of the variation in the prices of major cryptocurrencies.

By identifying patterns in market movements, candlesticks and indexes, Owler is able to notify the user so that he can effectively use the information when it is actually required.

The latest version of the app only supports handling _ETH, BTC, XRP, LTC and XMR_ information.

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

3) Open Android Studio or use the Expo App to run the application on a mobile device.


## Additional Comments:

You will probably be ready to go but if you want the app to run locally without issues, you will have to use a compatible Node version.

The version of Node that I noticed that works best with the project is 18.17.1. I recommend you to use [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) to improve your experience working with Node.


## Android Installer: 

A development version (0.0.1) is listed as [release](https://github.com/santiellena/owler-app/releases/tag/latest).


## Manual Of Use:

For this application to be ready to run, you will need to provide it with your personal Taapi API key in order to access indexes information.

With your API key, you will be able to log in and start using the application.


