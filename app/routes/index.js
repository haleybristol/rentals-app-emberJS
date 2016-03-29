import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },

  actions: {
    saveRental(userInput) {
      var newRental = this.store.createRecord('rental', userInput);
      newRental.save();
      this.transitionTo('index');
    }

  }
});
