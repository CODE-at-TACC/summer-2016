define('particlefunctionpanel',
  ['jquery',
    'text!./html/particle-function-panel.html',
    'text!./html/particle-function-input-group.html',
    'particleexchange',
    'bootstrapgrowl'],
  function($, panelHtml, inputGroupHtml) {
  ParticleFunctionPanel = function(device_id, access_token) {
    var token = access_token;
    var exchange = new ParticleExchange();
    var id = device_id
    var that = this;

    that.$particlefunctionpanel = $('.particle-function-panel');

    function callFunction(eventSource) {
      var group = $(eventSource.target).parents('[particle-function-input-group="group"]');
      var functionname = group.find('[particle-function-input-group="function"]').html();
      var param = group.find('[particle-function-input-group="parameter"]').val();
      var fnPr = exchange.callFunction({ deviceId: id, name: functionname, argument: param, auth: token});
    }

    function probeDevice(event, data) {
      clearPanel();
      if (data.params.deviceId === id) {
        if (data.body.functions) {
          var panel = that.$particlefunctionpanel.find('[particle-function-panel="function_list"]');
          var functions = data.body.functions;
          that.$particlefunctionpanel.find('[particle-function-panel="status"]').html(functions.length + " functions found");
          for (var key in functions) {
            var inputGroup = $($(inputGroupHtml));
            inputGroup.attr('particle-function-funcname', key);
            inputGroup.find('[particle-function-input-group="function"]').html(functions[key]);
            inputGroup.find('[particle-function-input-group="call"]').click(callFunction);
            panel.append(inputGroup);
          }
        } else {
          that.$particlefunctionpanel.find('[particle-function-panel="status"]').html("No functions");
        }
      }
    }

    function clearPanel() {
      var panel = that.$particlefunctionpanel.find('[particle-function-panel="function_list"]');
      panel.html("");
    }

    function init() {
      that.$particlefunctionpanel.html(panelHtml);

      $(document).on('particleexchange.getDevice.data', probeDevice);
      $(document).on('particleexchange.callFunction.data', function(event, data) {
        if (data.params.deviceId === id) {
          $.bootstrapGrowl(data.params.name + " returned " + data.body.return_value, { type : "success"} );
        }
      });
      $(document).on('particleExchange.callFunction.error', function(event, data) {
        if (data.params.deviceId === id) {
          $.bootstrapGrowl(data.params.name + " was unsuccessful");
        }
      });

      exchange.getDevice({deviceId : id, auth: token});

/*
      particle.getEventStream({ deviceId: id, auth: token }).then(
        function(stream) {
          stream.on('event', function(data) {
            if (data.data === "online") {
              probeDevice.apply(ref);
            }
            if (data.data === "offline") {
              clearPanel.apply(ref);
              ref.$particlefunctionpanel.find('[particle-function-panel="status"]').html("Offline");
            }
          });
        }
      );
*/
    }

    $('.particle-function-panel').addClass('panel panel-default');
    init.apply(this);
  }

  ParticleFunctionPanel.prototype = {
    constructor: ParticleFunctionPanel,
  }
  return ParticleFunctionPanel;
});
