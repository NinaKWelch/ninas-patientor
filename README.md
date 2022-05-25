# ninas-patientor

Full Stack Open 2019 Project

## Website

https://cryptic-harbor-34971.herokuapp.com/

## Screenshots

### Mobile

### Desktop

![](https://res.cloudinary.com/ninaw/image/upload/c_scale,w_420/v1653458773/patientor_1_zyqq20.png)
![](https://res.cloudinary.com/ninaw/image/upload/c_scale,w_420/v1653458770/patientor_2_rkggzk.png)
![](https://res.cloudinary.com/ninaw/image/upload/c_scale,w_420/v1653458778/patientor_3_rls9us.png)
![](https://res.cloudinary.com/ninaw/image/upload/c_scale,w_420/v1653458778/patientor_4_syoiuz.png)
![](https://res.cloudinary.com/ninaw/image/upload/c_scale,w_420/v1653458772/patientor_5_xfdhy4.png)

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






