import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(announcement) {
      if(confirm('You rull wanna delete this announcement?')) {
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
