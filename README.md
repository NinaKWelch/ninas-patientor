# ninas-patientor

Full Stack Open 2020 Project

This repository contains server files, the client files are at [ninas-patientor-client](https://github.com/NinaKWelch/ninas-patientor-client)

## Website

https://cryptic-harbor-34971.herokuapp.com/

## Frontend integration

1. Add a proxy for production to package.json (front-end)

```
"proxy": "http://localhost:3001",
```

2. Change the base url in _constants.ts_ file (front-end)

```
export const apiBaseUrl = "/api";
```

## Production

1. Remove previous build with `rm -rf ./build/` (backend)

2. Run `npm run tsc` to create a new build (backend)

3. Run `npm run build` to create a new build (front-end)

4. Change the name of front-end _build_ folder to _react-app_ and move it to the backend _build_ folder 

5. Commit changes to git

6. Run `git push heroku main` to push the new build to heroku

4. Any issues, check logs with `heroku logs -t`

## Built with

* [create-react-app](https://github.com/facebook/create-react-app)
* [TypeScript](https://github.com/microsoft/TypeScript)
* [formik](https://github.com/jaredpalmer/formik)
* [yup](https://github.com/jquense/yup)
* [material-ui](https://github.com/mui/material-ui)
* [axios](https://github.com/axios/axios)
* [expressjs](https://github.com/expressjs)
* [heroku](https://github.com/heroku)

## To do
* Make this a Progressive Web App



