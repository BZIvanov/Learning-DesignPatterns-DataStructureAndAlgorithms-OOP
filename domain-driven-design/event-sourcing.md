## Events

Events are stored usually in NoSQL database as object or in SQL database which supports indexing on json objects, because the data is stored as json object.

## Event sourcing

Event sourcing means, that all changes made to the application state are stored as a sequence of events, not a usual database state. An event record states what has changed. And if we want to get the current state we get it by replaying all the events in the correct order.
