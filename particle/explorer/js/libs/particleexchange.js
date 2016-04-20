define('particleexchange',
  ['particle'],
  function(Particle) {


  ParticleExchange = function() {
    if (ParticleExchange.instance) {
      console.log("Singleton!");
      return ParticleExchange.instance;
    }
    ParticleExchange.instance = this;

    // Array Remove - By John Resig (MIT Licensed)
    Array.prototype.remove = function(from, to) {
      var rest = this.slice((to || from) + 1 || this.length);
      this.length = from < 0 ? this.length + from : from;
      return this.push.apply(this, rest);
    };

    var token = null;
    var particle = new Particle();
    var callList = Array();

    function equals(a, b) {
        function check(a, b) {
            for (var attr in a) {
                if (a.hasOwnProperty(attr) && b.hasOwnProperty(attr)) {
                    if (a[attr] != b[attr]) {
                        switch (a[attr].constructor) {
                            case Object:
                                return equal(a[attr], b[attr]);
                            case Function:
                                if (a[attr].toString() != b[attr].toString()) {
                                    return false;
                                }
                                break;
                            default:
                                return false;
                        }
                    }
                } else {
                    return false;
                }
            }
            return true;
        };
        return check(a, b) && check(b, a);
    };

    function init() {
    }

    function addCall(call, params) {
      callList.push(json);
    }

    function callExists(call, params) {
      json = { call : call, params : params };
      for (key in callList) {
        if (equals(callList[key], json)) {
          return true;
        }
      }
      return false;
    }

    function removeCall(call, params) {
      json = { call : call, params : params };
      for (key in callList) {
        if (equals(callList[key], json)) {
          callList.remove(key, key);
          return true;
        }
      }
      return false;
    }

    function dispatch(call, params, data, error) {
      var ev = new CustomEvent("particleexchange." + call + (data) ? ".data" : ".error", { detail : { params : params, data : data, error: error } });
      document.dispatchEvent(ev);
    }

    function callWrap(call, params) {
      if (callExists(call, params)) {
        return false;
      }
      addCall(call, params);
      var promise = particle[call](params);
      promise.then(
        function(data) {
          dispatch(call, params, data, null);
          removeCall(call, params);
        },
        function(error) {
          dispatch(call, params, null, data);
          removeCall(call, params);
        }
      )
    }

    this.getDevice = function(params) {
      callWrap("getDevice", params);
    }

    this.callFunction = function(params) {
      callWrap("callFunction");
    }

    this.publishEvent = function(params) {
      callWrap("publishEvent", params);
    }

    init.apply(this);
  }

  ParticleExchange.prototype = {
    constructor: ParticleExchange,
  }
  return ParticleExchange;
});
