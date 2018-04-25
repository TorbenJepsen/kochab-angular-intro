console.log('client.js has been loaded');

// creating our angular application
let app = angular.module('MyApp', []);
// dependencies will eventually go into the empty array

app.controller('WelcomeController', function () {
    var self = this;
    self.message = 'Hello World';
    // self.something in the controller will be vm.something in html
    self.greet = function (username) {
        console.log('Hello' + username);
    };
    self.names = [
        { name: 'Kris', greeting: 'Yo' },
        { name: 'Ally', greeting: 'Hi', github: 'Lysautumn' },
        { name: 'Luke', greeting: 'Hey there', github: 'lukeschlangen' },
        { name: 'Mary', greeting: "Howdy" },
        { name: 'Dev', greeting: 'Sup' }
    ]
});