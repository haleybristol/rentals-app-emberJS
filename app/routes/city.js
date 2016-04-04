import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  },
  actions: {
    save3(params) {
    //create a new rental with the information from our parameters, save it to the database and call it "newRental"
      var newRental = this.store.createRecord('rental', params);

    //Refer to the city in those parameters as "city"
      var city = params.city;

    //Retrieve the list of rentals located in "city", and add newRental to that list
      city.get('rentals').addObject(newRental);
      newRental.save().then(function() {
    //Save "newRental", so it remembers what city it belongs in

    //Wait until newRental has finished saving, then save "city" too, so it remembers it contains newRental
        return city.save();
      });

    //Take us to page displaying details for city
      this.transitionTo('city', params.city);
    },
    destroyCity(city) {
    var rental_deletions = city.get('rentals').map(function(rental){
      return rental.destroyRecord();
    });
    Ember.RSVP.all(rental_deletions).then(function(){
      return city.destroyRecord();
    });
    this.transitionTo('index');
    }
  }
});
