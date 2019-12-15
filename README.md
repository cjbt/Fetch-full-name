
# Fetch Fullname

This is a Full stack app that fetches full name in order. This project uses Node.js/express.js for the backend using sqlite3 for local database instance and React.js on the front end.

## Local development

### server
```
start local server running on http://localhost:8000

npm install
npm run server
```

### client
```
cd client

npm install
npm start
```

## Server endpoints
### url
`http://localhost:8000`
### firstname
`/firstname   [GET] 200`
```js
{
  firstname: "Jane"
}
```
### middlename
`/middlename   [GET] 200`
```js
{
  middlename: "Smith"
}
```
### lastname
`/lastname   [GET] 200`
```js
{
  lastname: "Doe"
}
```

## Test
### testing local server

```
npm test __tests__
```

### testing client webapp
```
cd client
npm test __tests__
```
