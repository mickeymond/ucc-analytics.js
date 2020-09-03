// Conditional Exports
if(typeof exports != "undefined") {
  exports.analytics = Analytics();
} else{    
  var analytics = Analytics();
}

function Analytics() {
  // Private Interface
  let baseUrl = 'https://pmxfwkh2ka.execute-api.eu-central-1.amazonaws.com/default/ucc-web-tracker';
  let custId = '';
  let srcId = '';

  const init = function(customerId, sourceId) {
    custId = customerId;
    srcId = sourceId;
  }

  const track = function(event, data) {
    fetch({
      url: baseUrl,
      body: {
        customerId: custId,
        sourceId: srcId,
        event: event,
        type: 'track',
        context: {},
        properties: data,
        user: {}
      },
      method: 'POST'
    })
    .then(res => res.json())
    .then(console.log)
    .catch(console.log);
  }
  
  // Public Interface
  return {
    init: function(customerId, sourceId) {
      init(customerId, sourceId);
    },
    track: function(event, data) {
      track(event, data);
    }
  }
};
