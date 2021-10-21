## Non Events

#### Get Posts

Query Service will return all the posts with their comments

## Events

#### Create Post

Using the client we can create a post.

1. Posts Service:

- receives the request and stores the post in the service database
- sends PostCreated event to the Event Bus Service

2. Event Bus Service:

- receives the request and stores the event in the service database
- notifies the other 4 services for the PostCreate event
  - Posts Service will do nothing with event
  - Comments Service will do nothing with event
  - Query Service will store the post in the service database
  - Moderation Service will do nothing with event

#### Create Comment

Using the client we can create a comment for one of the posts.

1. Comment Service:

- receives the request and stores the comment in the service database with status pending
- sends CommentCreated event to the Event Bus Service

2. Event Bus Service:

- receives the request and stores the event in the service database
- notifies the other 4 services for the CommentCreate event
  - Posts Service will do nothing with event
  - Comments Service will do nothing with event
  - Query Service will store the comment in the service database
  - Moderation Service will check the comment content for the forbidden word and will set the appropriate status and will send CommentModerated event back to the Event Bus Service
  - Event Bus Service will store the event and will send CommentModerated again to all 4 services
  - Posts, Query and Moderation Services will do nothing with event
  - Comment Service will update the service database with the new comment status and will send CommentUpdated event to the Event Bus Service
  - Event Bus Service will store the event and will send CommentUpdated again to all 4 services
  - Posts, Comments and Moderation Services will do nothing with event
  - Query Service will update service database with the new comment status and content
