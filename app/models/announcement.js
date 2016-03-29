import DS from 'ember-data';

export default DS.Model.extend({
  sales: DS.attr(),
  weather: DS.attr(),
  news: DS.attr()
});
