IONIC
support: UIWebView for iOS 7+, and Android 4.1 and up. Windows Phone and FirefoxOS

Take a look at the Sass docs if you would also like to have ionic serve watch the project's Sass files.

- coffee => https://github.com/StephenGrider/CoffeeScript-Ionic-Starter
- cordova vs phonegap?

- dev & test: this seems important when trying to do some external API requests: http://ionicframework.com/docs/cli/test.html


## Installing

1. you need `npm`
2. `npm install -g cordova`
3. `npm install -g plugman` a plugin manager for cordova
4. `npm install -g ionic`
5. `npm install -g ios-sim` needed to emulate io (using command `ionic emulate ios`)

## Creating a project

Ionic uses javascript by default. To use coffeescript the easiest way is to use this starter template:
(https://github.com/StephenGrider/CoffeeScript-Ionic-Starter)[https://github.com/StephenGrider/CoffeeScript-Ionic-Starter]

```bash
git clone git@github.com:StephenGrider/CoffeeScript-Ionic-Starter.git
ionic start app CoffeeScript-Ionic-Starter
cd app
npm install

```

It will generate this output:

```
Your Ionic project is ready to go! Some quick tips:

 * cd into your project: $ cd app

 * Setup this project to use Sass: ionic setup sass

 * Develop in the browser with live reload: ionic serve

 * Add a platform (ios or Android): ionic platform add ios [android]
   Note: iOS development requires OS X currently
   See the Android Platform Guide for full Android installation instructions:
   https://cordova.apache.org/docs/en/edge/guide_platforms_android_index.md.html

 * Build your app: ionic build <PLATFORM>

 * Simulate your app: ionic emulate <PLATFORM>

 * Run your app on a device: ionic run <PLATFORM>

 * Package an app using Ionic package service: ionic package <MODE> <PLATFORM>

For more help use ionic --help or visit the Ionic docs: http://ionicframework.com/docs
```


## Android dev
https://cordova.apache.org/docs/en/edge/guide_platforms_android_index.md.html
To test on the device, simply plug it in, and run

`ionic run android`

### Random Notes:

* ionic.bundle.js file. Ionic comes with ngAnimate and ngSanitize bundled in, but to use other Angular modules you'll need to include them from the lib/js/angular directory
* Also note that the cordova.js or phonegap.js file must be the last script, and that this file will not be found in your development files, but rather automatically included when running or emulating your app.

## (Simulator testing)[http://ionicframework.com/docs/guide/testing.html]

```bash
ionic build ios
ionic emulate ios
```


### Code examples:
http://ionicons.com/
http://ionicframework.com/examples/
http://codepen.io/ionic/public-list/
tinder cards: http://codepen.io/ionic/pen/nxEdH
http://coenraets.org/blog/2014/08/employee-directory-sample-app-with-ionic-and-node-js/
http://ccoenraets.github.io/ionic-tutorial/
http://coenraets.org/blog/2014/10/ionic-tutorial-and-sample-application/
http://ioconf.herokuapp.com/#/app/sessions
https://github.com/ccoenraets/ioconf
https://github.com/driftyco/ionic-weather/
https://github.com/driftyco/ionic-contrib-firebase-login
https://github.com/driftyco/ionic-contrib-frosted-glass
http://ionicframework.com/demos/frosted-glass/
https://github.com/driftyco/ionic-ion-header-shrink
https://github.com/driftyco/ionic-contrib-firebase-login

quien desarrolla esto?
vale para tablets?
  http://codepen.io/ionic/pen/cDbFg
conseguir emular android con el emulador rápido
terminar de ver lo del routing
  http://learn.ionicframework.com/formulas/navigation-and-routing-part-1/
  http://learn.ionicframework.com/formulas/navigation-and-routing-part-2/
  https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views


###MUST READ:
  https://github.com/angular-ui/ui-router/wiki

### GOTCHAS:

* When you create a new file you need to relaunch gulp
