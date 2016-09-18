#Shopping Cart Tutorial from Mindspace
##[Youtube Playlist Link](https://www.youtube.com/watch?v=56TizEw2LgI&list=PL55RiY5tL51rajp7Xr_zk-fCFtzdlGKUp)

##Notes:
 - In video #4 where you create `product-seeder.js`, after running `npm start` I get this error in the terminal:

> DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html

To fix it, before this line:

> mongoose.connect('localhost:27017/shopping');

add the line:

> mongoose.Promise = global.Promise;

[Solution Source](https://github.com/Automattic/mongoose/issues/4291)

##Personal Comments:
 - My first look at routing and creating a Node application from scratch