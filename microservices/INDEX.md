## Microservices

With microservices our application is split into smaller pieces where each piece has it's own logic and database. It is important to know that the microservices don't exchange data between using requests. This is important because we want our services to be independent from one another.

#### Data consistency

- Two phase commit
- Saga pattern
- Eventual consistency - suitable for long running tasks (seconds) where the data will be inconsistent while the long running task is finished, but is good for performance, because we will run the tasks in background

#### Resilient microservices architecture

We can achieve resilience by using the following patterns:

- timeouts design pattern
- circuit breaker design pattern
- retry design pattern
- bulkheads design pattern

#### Contract

A microservice can have one or multiple contracts. If it is RESTful contract it will include the resource url, the http verb and data in json format for example. Contract is something like documentation of how we can interact with the microservice.

#### Cloud based approaches for microservices

- IAAS - infrastructure as a service.
- PAAS - platform as a service.
- SAAS - software as a service.
- Hybrid approach
