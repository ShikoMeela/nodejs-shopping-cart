#Shopping Cart Tutorial from Mindspace
##[Youtube Playlist Link](https://www.youtube.com/watch?v=56TizEw2LgI&list=PL55RiY5tL51rajp7Xr_zk-fCFtzdlGKUp)

##Process/Notes:

###Video #4
 - When you create `product-seeder.js`, after running `npm start` I get this error in the terminal:

> DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html

To fix it, before this line:

> mongoose.connect('localhost:27017/shopping');

add the line:

> mongoose.Promise = global.Promise;

[Solution Source](https://github.com/Automattic/mongoose/issues/4291)

 - Around 11:40 when you're running `./mongo`, `./mongod` also has to be running in the background, otherwise you get this error on the terminal:

 > MongoDB shell version: 3.2.9
 > connecting to: test
 > 2016-09-18T11:01:41.672-0700 W NETWORK  [thread1] Failed to connect to 127.0.0.1:27017, reason: errno:61 Connection refused
 > 2016-09-18T11:01:41.672-0700 E QUERY    [thread1] Error: couldn't connect to server 127.0.0.1:27017, connection attempt failed :
 > connect@src/mongo/shell/mongo.js:229:14
 > @(connect):1:6

 *Sometimes it's unclear when certain things have to be running in the background*

 ###Video #5
 - When connecting the database to the view, I found that the contents of my `product.js` were outputting twice.
 
 Troubleshooting:
  - In the terminal I went to my `mongodb/bin` directory and ran `./mongo`
  - I looked at the data inside my database using:
  > use shopping
  > db.products.find()  
  (in Video #4)

  And realized that I ran `node product-seeder.js` twice... Oops.

  I manually removed the contents of the database using:

  > db.dropDatabase();

  Note: updating the contents of `product-seeder.js` will not update the contents of the database automatically. `product-seeder.js` has to be run in the terminal again using `node product-seeder.js`


##Personal Comments:
 - My first look at routing and creating a Node application from scratch