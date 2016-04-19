define('particlepublishpanel',
  ['jquery', 'particle',
    'text!./html/particle-publish-panel.html',
    'bootstrapgrowl'],
  function($, Particle, panelHtml, inputGroupHtml) {
  ParticlePublishPanel = function(access_token) {
    var token = access_token;
    var particle = new Particle();

    this.$particlepublishpanel = $('.particle-publish-panel');

    function init() {
      this.$particlepublishpanel.html(panelHtml);
      this.$particlepublishpanel.find('[particle-publish-panel="publish"]').click($.proxy(publish, this));
    }

    function publish() {
      var eventname = this.$particlepublishpanel.find('[particle-publish-panel="event"]').val();
      var datatext = this.$particlepublishpanel.find('[particle-publish-panel="data"]').val();
      var data = { };
      var ok = true;
      if (!(eventname && eventname.length > 0)) {
        ok = false;
      }
      if (datatext && datatext.length > 0) {
        try {
          data = JSON.parse(datatext);
        } catch(e) {
          $.bootstrapGrowl("Invalid JSON data", {type : "warning"});
          ok = false;
        }
      }
      if (ok) {
        var publishEventPr = particle.publishEvent({ name : eventname, data : data, auth: token });
        publishEventPr.then(
          $.proxy(function(data) {
            $.bootstrapGrowl(eventname + " published", {type : "success"});
            console.log(data);
          }, this),
          $.proxy(function(error) {
            $.bootstrapGrowl(eventname + " was not published", {type : "warning"});
          }, this)
        );
      }
    }

    $('.particle-publish-panel').addClass('panel panel-default');
    init.apply(this);
  }

  ParticlePublishPanel.prototype = {
    constructor: ParticlePublishPanel,
  }
  return ParticlePublishPanel;
});
