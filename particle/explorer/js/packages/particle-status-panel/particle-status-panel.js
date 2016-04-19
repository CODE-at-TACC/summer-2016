define('particlestatuspanel',
  ['jquery', 'particle',
    'text!./html/particle-status-panel.html',
    'bootstrapgrowl'],
  function($, Particle, panelHtml) {
  ParticleStatusPanel = function(device_id, access_token) {
    var token = access_token;
    var particle = new Particle();
    var id = device_id;
    this.$particlestatuspanel = $('.particle-status-panel');

    function probeDevice() {
      var devicesPr = particle.getDevice({ deviceId: id, auth: token});
      devicesPr.then(
        $.proxy(function(data) {
          this.$particlestatuspanel.find('[particle-status-panel="device_name"]').html(data.body.name);
          this.$particlestatuspanel.find('[particle-status-panel="device_id"]').val(data.body.id);
          this.$particlestatuspanel.find('[particle-status-panel="connected"]').html(data.body.connected ? "Online" : "Offline");
          this.$particlestatuspanel.find('[particle-status-panel="last_heard"]').val(data.body.last_heard);
          this.$particlestatuspanel.find('[particle-status-panel="status"]').val(data.body.status);
          this.$particlestatuspanel.find('[particle-status-panel="last_ip"]').val(data.body.last_ip_address);
        }, this),
        $.proxy(function(error) {

        }, this)
      );
    }

    function clearPanel() {
      var panel = this.$particlestatuspanel.find('[particle-status-panel="variable_list"]');
      panel.html("");
    }

    function init() {
      this.$particlestatuspanel.html(panelHtml);
      probeDevice.apply(this);

      var ref = this;
      particle.getEventStream({ deviceId: id, auth: token }).then(
        function(stream) {
          stream.on('event', function(data) {
            if (data.data === "online") {
              probeDevice.apply(ref);
              ref.$particlestatuspanel.find('[particle-status-panel="connected"]').html("Online");
            }
            if (data.data === "offline") {
              clearPanel.apply(ref);
              ref.$particlestatuspanel.find('[particle-status-panel="connected"]').html("Offline");
            }
          });
        }
      );
    }

    $('.particle-status-panel').addClass('panel panel-default');
    init.apply(this);
  }

  ParticleStatusPanel.prototype = {
    constructor: ParticleStatusPanel,
  }
  return ParticleStatusPanel;
});
