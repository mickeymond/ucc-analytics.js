# ucc-analytics.js

## UnchainedCarrot Analytics JavaScript Client Library

Installation and Usage
----------------------

For Websites

    <script src="https://unpkg.com/ucc-analytics.js"></script>
    <script>
        // Initialize UCC Analytics
        analytics.init("customerId", "projectId");
        // Initialize User Object If Applicable
		analytics.setUser({});
    </script>

Everywhere else in your website

    <script>
        analytics.track("event", { property1: 1, property2: 2 });
    </script>
