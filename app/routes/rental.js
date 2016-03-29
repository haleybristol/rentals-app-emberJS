import Ember from 'ember';

export default Ember.Route.extend({
  model(userInput) {
    return this.store.findRecord('rental', userInput.rental_id);
    //using findRecord() instead of findAll()//
    //takes two arguments: The type of object('rental'), and the object's specific id (userInput.rentals_id)
  },
  actions: {
    update(rental, userInput) {
      Object.keys(userInput).forEach(function(key){
        if(userInput[key]!==undefined) {
          rental.set(key,userInput[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
