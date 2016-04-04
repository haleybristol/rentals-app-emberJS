import Ember from 'ember';

export default Ember.Component.extend({
  //declaring new computed property called fullLocation
  //Tell Ember to combine both the name and country properties when fullLocation is called
  fullLocation: Ember.computed('city.name', 'city.country', function() {
    return this.get('city.name') + ', ' + this.get('city.country');
  //Anytime we call {{fullLocation}} in city-tile.hbs, our city's full address will be displayed as a single property
  }),

  sortBy: ['cost:asc'], //sorty by cost in ascending order
  sortedRentals: Ember.computed.sort('city.rentals', 'sortBy'), //now we can call sortedRentals in city-tile template to view new order
  actions: {
    delete(city) {
      if(confirm('Are you sure you want to delete this city?')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
