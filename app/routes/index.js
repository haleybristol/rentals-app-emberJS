import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      rentals: this.store.findAll('rental')
    });
  },

  actions: {
    // saveRental(userInput) {
    //   var newRental = this.store.createRecord('rental', userInput);
    //   newRental.save();
    //   this.transitionTo('index');
    // },
    save6(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    },
  }
});
