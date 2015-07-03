// This code runs on the client and server to enable latency compensation (the security of server code and no round-trip delay). See https://www.meteor.com/tutorials/blaze/security-with-methods for details.
Meteor.methods({
    addPerson: function(name, color) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        else {
            // Wrap the async db method so we can return the result value in the callback.
            var func = Meteor.wrapAsync(function(callback) {
                People.insert({ created: new Date(), user: Meteor.userId(), name: name, color: color }, function(err, id) {
                    callback(err, id);
                });
            });

            return func();
        }
    }
});