if (Meteor.isClient) {
    // Setup database access.
    Meteor.subscribe('People');

    // Setup routing.
    Router.configure({
        layoutTemplate: 'layout'
    });
    Router.route('/', function() {
        this.render('home');
    });
    Router.route('/about');

    // Access methods for html templates.
    Template.people.helpers({
        people: People.find()
    });
}