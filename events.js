if (Meteor.isClient) {
    // Event handlers.
    Template.helloForm.events({
        'submit': function(event, template) {
            Meteor.call('addPerson', template.find('#txtName').value, template.find('#txtColor').value, function(err, id) {
                console.log('Inserted record id ' + id);

                template.find('#txtName').value = '';
                template.find('#txtColor').value = '';                
            });

            // Prevent actual form submisson.
            return false;
        }
    });
}