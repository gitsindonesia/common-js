# Common JS

Common Library from Gits Indonesia. Purpose to implement reusable code.

## Current Features

- throw Error for HTTP

## Usage
```javascript
try{
	throw new ErrorHTTP(400, "Bad request");
}catch (error){
	console.error(error)
}
```
```javascript
try{
	throw new ErrorHTTPBadRequest("Validation Error");
}catch (error){
	console.error(error)
}
```

Other error exception can be used: 
- ErrorHTTPUnauthorized
- ErrorHTTPForbidden
- ErrorHTTPNotFound
- ErrorHTTPServerError
- ErrorHTTPBadGateway
