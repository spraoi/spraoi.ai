---
datePublished: 2019-06-21
dateModified: 2019-06-21
title: Supercharging Our UI Iterations with GraphQL & AWS AppSync
author: cade-scroggins
description: >-
  How we are reducing friction as our applications evolve.
---

If there’s one thing about “Agile” software development that resonates, it would
be its iterative nature. Incorrect assumptions are inevitable when building
complex products—so let’s give ourselves the ability to quickly update a system
based on them.

For any significant product feature developed by Spraoi, three things happen:

1. We define feature requirements.
2. A backend developer creates endpoints to expose some data.
3. A frontend developer creates a UI to display and/or modify the data.

This process is great for an initial version, but...

> Incorrect assumptions are inevitable.

What happens when a significant change is required, or another feature request
comes through that requires data from a different endpoint? Assuming a backend
change isn’t strictly required, a frontend developer will be forced to repurpose
various endpoints, designed based on the initial requirements, in a decidedly
suboptimal way:

- Additional API calls will be added, increasing page load time.
- Ad hoc data parsing/normalization/caching code will be added, increasing app
  complexity, time spent coding, and overall bundle size.

How can these pitfalls be prevented?

## GraphQL

Taken from the [GraphQL homepage](https://graphql.org):

> GraphQL is a query language for APIs and a runtime for fulfilling those
> queries with your existing data. GraphQL provides a complete and
> understandable description of the data in your API, gives clients the power to
> ask for exactly what they need and nothing more, makes it easier to evolve
> APIs over time, and enables powerful developer tools.

With GraphQL, our frontend code only has to declare the specific data it needs;
it *doesn’t care* where data comes from or how it’s fetched. No matter how
complex the orchestration of our backend endpoints get, our UI is only concerned
with the well-defined data models determined by a
[GraphQL schema](https://graphql.org/learn/schema/).

Now, you might be wondering, where _does_ all of this complex orchestration
exist?

## AWS AppSync

Taken from the [AppSync homepage](https://aws.amazon.com/appsync/):

> AWS AppSync simplifies application development by letting you create a
> flexible API to securely access, manipulate, and combine data from one or more
> data sources. AppSync is a managed service that uses GraphQL to make it easy
> for applications to get exactly the data they need.

So, AppSync provides a “serverless” layer where we can mold our data into the
structure defined by our GraphQL schema before sending it off to a client.

Moving this complexity away from the UI immediately solves the aforementioned
pitfalls. If a feature requires additional data, we simply add the structure of
the data we need to the existing
[GraphQL query](https://graphql.org/learn/queries/). _That’s it_. A single HTTP
request is sent to AppSync with this query, and we receive all of the data we
need in one go. 🎉

## Links

- [GraphQL documentation](https://graphql.org)
- [AWS AppSync documentation](https://aws.amazon.com/appsync/resources/)
- [Apollo documentation (GraphQL client used at Spraoi)](https://www.apollographql.com/docs/)
- [Spraoi’s shared App component (sets up Apollo with AWS AppSync)](https://github.com/spraoi/common-ui/blob/master/packages/base/App/index.js)
