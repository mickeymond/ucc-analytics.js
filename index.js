// Conditional Exports
if(typeof exports != "undefined") {
  exports.analytics = Analytics();
} else{    
  var analytics = Analytics();
}

function Analytics() {
  // Private Interface
  let baseUrl = '';
  let initial = {}

  const init = function(data) {
    initial = { ...data }
  }

  const track = function(data) {
    fetch({
      url: baseUrl,
      body: { ...initial, ...data },
      method: 'GET'
    });
  }
  
  // Public Interface
  return {
    init: function(data) {
      init(data);
    },
    track: function(data) {
      track(data);
    }
  }
};
