import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  save4() {
    var params = {
      name: this.get('name'),
      country: this.get('country'),
    };
    this.sendAction('save5', params);
  }
}
});
