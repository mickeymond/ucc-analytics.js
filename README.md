# ucc-analytics.js

## UnchainedCarrot Analytics JavaScript Client Library

Installation and Usage
----------------------

For Websites

    <script src="https://unpkg.com/ucc-analytics.js"></script>
    <script>
        analytics.init("customerId", "projectId"); // Initialize UCC Analytics
    </script>

Everywhere else in your website

    <script>
	const eventData = { property1: 1, property2: 2 }
	const user = { id: "5asd6yjkabsdba" } // optional => defaults to empty Object
        analytics.track("event", eventData, user);
    </script>
