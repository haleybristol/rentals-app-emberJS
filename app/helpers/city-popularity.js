import Ember from 'ember';

export function cityPopularity(params/*, hash*/) {
  var city = params[0];
  //Taking first item from parameters (a city object) and assigning it the variable name city

  if(city.get('rentals').get('length') >= 5) {
  //check if the number of rentals in the city is over five
  //if so we display a glyphicon      if not nothing happens
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
  //Ember.String.htmlSafe() renders the html
}

export default Ember.Helper.helper(cityPopularity);
