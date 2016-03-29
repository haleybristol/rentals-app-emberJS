import Ember from 'ember';


export default Ember.Route.extend({
  model() {
      return this.store.findAll('announcement');
  },
  actions: {
    addAnnouncement(newNews) {
     var newAnnouncement = this.store.createRecord('announcement', newNews);
     newAnnouncement.save();
      this.transitionTo('announcement');
    },

    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('announcement');
    }
  }
});
