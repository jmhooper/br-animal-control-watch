# About

This web application allows you to view animal control incidents that have occurred in East Baton Rouge Parish.
Incidents can be filtered by date and by whether the incident involved a cat or a dog.

This app uses [Baton Rouge Open Data](https://data.brla.gov/) to download animal control incidents.
This data is only as accurate as the data provided by Baton Rouge Open Data.
Additionally, there may be some delay between when incidents occur and when they appear here because it takes some time for animal control incidents to propagate into the open data system.

The idea for this application was inspired by the final project of a student in [The Futures Fund](http://thefuturesfund.org") program.

This app was developed using [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/).

# Getting Started

Install dependencies with `npm`.

```shell
npm install
```

Use `webpack-dev-server` to build the JS into the `dist/` directory and serve them on `localhost:8080`.
The `server` script in `package.json` can be run to make this happen.

```shell
npm run server
```

# Deploy

Build the assets with an npm script. The assets will be built to `dist/bundle.js`.

```shell
npm run build
```

Once the assets are built, you can upload the contents of the `dist/` directory to your webserver.
