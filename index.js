// Conditional Exports
if(typeof exports != "undefined") {
  exports.analytics = Analytics();
} else{    
  var analytics = Analytics();
}

function Analytics() {
  // Private Interface
  const BASE_URL = 'https://pmxfwkh2ka.execute-api.eu-central-1.amazonaws.com/default/ucc-web-tracker';
  let CUSTOMER_ID = '';
  let PROJECT_ID = '';
  let API_KEY = '';

  const init = function(customerId, projectId, apiKey) {
    CUSTOMER_ID = customerId;
    PROJECT_ID = projectId;
    API_KEY = apiKey;
  }

  const track = function(event, data, user) {
    const context = {}
    const url = new URL(window.location.href);
    url.searchParams.forEach((value, key) => {
      context[key] = value;
    });

    const reqBody = {
      customerId: CUSTOMER_ID,
      projectId: PROJECT_ID,
      event: event,
      type: 'track',
      context: context,
      properties: data,
      user: user
    }

    fetch(BASE_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY
      },
      body: JSON.stringify(reqBody),
    });
  }
  
  // Public Interface
  return {
    init: function(customerId, projectId, apiKey = 'live_soon_to_be_deprecated') {
      init(customerId, projectId, apiKey);
    },
    track: function(event, data, user = {}) {
      track(event, data, user);
    }
  }
};
