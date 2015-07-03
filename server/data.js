Meteor.startup(function() {
    Meteor.publish('People', function() {
        return People.find({ $or: [{ user: this.userId }, { user: { $exists: false } }] });
    });

    if (People.find().count() == 0) {
        // Create sample data.
        var people = [
            {
                name: 'Harry',
                color: 'Blue'
            },
            {
                name: 'Jen',
                color: 'Red'
            },
            {
                name: 'Billy',
                color: 'Green'
            }
        ];

        // Insert sample data into db.
        people.forEach(function(person) {
            People.insert(person);
        });
    }
});