import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    addAnnouncement() {
      var newNews = {
        sales: this.get('sales')? this.get('sales'): 'unknown',
        weather: this.get('weather')? this.get('weather'): 'unknown',
        news: this.get('news')? this.get('news'): 'unknown'
      };
      debugger;
      this.set('addNewAnnouncement', false);
      this.sendAction('addAnnouncement', newNews);
    }
  }
});
