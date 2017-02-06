# Setup For Development & Deployment

Pull from git and then run the following:

    $ npm i -g gulp-cli 
      or after installing npm you can just write "$ npm run gulp" so you don't install gulp globally
    $ cd src
    $ npm i
    $ gulp build

Whilst developing, you may use just `gulp` to both do the initial build and watch the files for changes.

Keep in mind NodeJS and NPM have to be installed in the system for gulp to run.


## /htdocs/landing
- Compiled CSS goes to `css/`.
- Compiled JS goes to `js/`.
