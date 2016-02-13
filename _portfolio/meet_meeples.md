---
layout: post
title: Meet Meeples
thumbnail-path: "img/blocipedia.png"
short-description: A social network for board game geeks.

---

{:.center}
![]({{ site.baseurl }}/img/blocipedia.png)

## Explanation

The goal of the app is to connect users to a focused community of local gamers. Users can create a profile, join and create groups, and schedule Game Nights within their groups.

The back-end Rails API is up and running. The front-end is currently in the planning phase.

## Technologies & Techniques Used

Rails, [JSON-Schema](http://json-schema.org/) & [JSON-API](http://jsonapi.org/), The [Interactor design pattern](http://eng.joingrouper.com/blog/2014/03/03/rails-the-missing-parts-interactors), Continuous Integration with [Travis](https://travis-ci.org/npauzenga/meet_meeples-server), and Test-Driven Development

## Problems

Using service objects ([Interactors](https://github.com/collectiveidea/interactor) in this case) is beneficial in a lot of ways. One interesting concern this exposes, however, is the handling of errors in our API. We now have these small, isolated classes that handle our business logic and can either return a successful or unsuccessful "context" based on the success of the contained logic.

## Solutions


## The Future

Bacon ipsum dolor amet filet mignon meatball spare ribs fatback bacon shankle. Kielbasa andouille fatback salami, boudin bresaola pig alcatra turkey spare ribs jerky. Corned beef bresaola leberkas salami alcatra beef landjaeger venison shank bacon meatloaf beef ribs picanha. Leberkas sausage brisket porchetta shankle prosciutto chicken picanha kielbasa pig kevin t-bone turducken filet mignon jowl.
