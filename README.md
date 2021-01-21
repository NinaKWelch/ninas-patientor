# ninas-patientor

## Development 

1. Run `npm start` to 

## Production

1. Remove previous build with `rm -rf ./build/` (backend)

2. Run `npm run tsc` to create a new build (backend)

3. Create a directory for the React front-end with `mkdir -p ./build/public/react/`


2. Aun `git push heroku main` to push the new build to heroku

4. Any issues, check logs with `heroku logs -t`

## Frontend integration

1. Add a proxy for production to package.json (front-end)

```
"proxy": "http://localhost:3001",
```

2. Change the base url in _constants.ts_ file (front-end)

```
export const apiBaseUrl = "/api";
```

3. Run `npm run build` (front-end)



