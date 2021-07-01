## Microservices

#### Data consistency

- Two phase commit
- Saga pattern
- Eventual consistency - suitable for long running tasks (seconds) where the data will be inconsistent while the long running task is finished, but is good for performance, because we will run the tasks in background
