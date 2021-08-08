const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
//Host (root domain)
console.log(myUrl.host);
//Hostname (does not have port )
console.log(myUrl.hostname);
//pathname
console.log(myUrl.pathname);
//Serialized query
console.log(myUrl.search);
//params object
console.log(myUrl.searchParams);
//add param
myUrl.searchParams.append(' bsq', '123');
console.log(myUrl.searchParams);
//loop througs params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));