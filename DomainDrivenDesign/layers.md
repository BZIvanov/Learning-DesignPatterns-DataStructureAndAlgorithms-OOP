## Layers of the software system

- Presentation layer - user interfaces, our views.

- Application layer - our controllers. It does few things:

  - reports to the presentation by serving ready to use data in the required form
  - orchestrates tasks triggered by presentation elements

- Domain layer - our models and services.

- Infrastructure layer - our database, but not only. Also security, logging, inversion of control, caching, networking, repositories.
