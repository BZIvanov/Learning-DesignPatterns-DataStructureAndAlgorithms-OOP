## Microservices

With microservices our application is split into smaller pieces where each piece has it's own logic and database. It is important to know that the microservices don't exchange data between using requests. This is important because we want our services to be independent from one another.

#### Data consistency

- **Two phase commit** - The first phase is the _prepare_ phase, where every service is preparing the transaction. The second phase is the _voting_ phase where every service has to vote with _yes_ in order the entire transaction to be commited. If _no_ vote is received from one of the services, the transaction manager will ask all the services to rollback the transaction.
- **Saga pattern** - with saga, the transaction is splitted into multiple requests and the saga tracks those requests.
- **Eventual consistency** - suitable for long running tasks (seconds) where the data will be inconsistent while the long running task is finished, but is good for performance, because we will run the tasks in background

#### Centralized access to microservices

This can be achieved by using API Gateway.

The benefits of using API gateway are multiple, some of them are:

- we don't need to keep credentials for all the services
- we can easily implement versioning

#### Resilient microservices architecture

We can achieve resilience by using the following patterns:

- timeouts design pattern - after some time of waiting, timeout exception is thrown
- circuit breaker design pattern - it is based on an object which wraps calls. This pattern monitors for failures.
- retry design pattern
- bulkheads design pattern

#### Contract

A microservice can have one or multiple contracts. If it is RESTful contract it will include the resource url, the http verb and data in json format for example. Contract is something like documentation of how we can interact with the microservice.

#### Centralized logging

When implementing microservices what we usually want is to have centralized logging system across all services so we can easily track what is happening with our services.

Common logging levels are info, error and debug.

#### Cloud based approaches for microservices

- IAAS - infrastructure as a service.
- PAAS - platform as a service.
- SAAS - software as a service.
- Hybrid approach
