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
  let projId = '';

  const init = function(customerId, projectId) {
    custId = customerId;
    projId = projectId;
  }

  const track = function(event, data, user) {
    const context = {}
    const url = new URL(window.location.href);
    url.searchParams.forEach((value, key) => {
      context[key] = value;
    });

    const reqBody = {
      customerId: custId,
      projectId: projId,
      event: event,
      type: 'track',
      context: context,
      properties: data,
      user: user
    }

    fetch(baseUrl, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(reqBody),
    });
  }
  
  // Public Interface
  return {
    init: function(customerId, projectId) {
      init(customerId, projectId);
    },
    track: function(event, data, user = {}) {
      track(event, data, user);
    }
  }
};
