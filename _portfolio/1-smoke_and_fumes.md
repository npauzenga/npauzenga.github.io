---
layout: post
title: Smoke & Fumes
thumbnail-path: "img/smoke_mb.png"
short-description: An incredible project and the centerpiece of a national news story

---

{:.center}
![]({{ site.baseurl }}/img/smoke_mb.png)

## Check it Out

The site is live at [smokeandfumes.org](https://www.smokeandfumes.org/)

## Project Description

The Center for International Environmental Law (CIEL) is a Washington, DC-based non-profit
committed to environmental justice and defending human rights.

smokeandfumes.org transformed a trove of documents on the deep history of the oil industry into an interactive online portal and database that exposes what the oil industry knew about climate change, when they knew it, and what they did with that information.

CIEL needed a simple, compelling way to organize and display hundreds of documents from a wide array of sources. The content needed to be easily accessible to both lay-people that may not know where to start and industry experts that would use the site for research, reporting, and potentially legal purposes.

The project required an accelerated timeline and needed to support hundreds of concurrent users without production hiccups or downtime.


## Results

The initial launch of the app, and subsequent updates, has been a huge success. Smoke and Fumes has been featured in dozens of news outlets, including on the front page of the Huffington Post, in The Guardian, the New York Times, Grist, Vice, and MSNBC.

Analytics show thousands of page views per month and hundreds of concurrent users at peak hours.

## Process, Technologies & Techniques

After just a couple short meetings we decided on the "timeline" approach. Rather than
including every document on a linear plane though, we opted to group documents together and
attach them to "moments" that would summarize important periods and make for a more succinct,
browsable experience.

Once the basic format was set the technology decisions came easily. AngularJS was a natural
fit because of it's simple, declarative structure. Sorting and filtering large datasets is a
breeze with this framework.

Because the turnaround was relatively tight and I was the sole developer on this project,
I made the call to use Firebase's backend-as-a-service model for our document database. In my experience, using a NoSQL database can be a bit of a gamble, should complex data relationships materialize down the road, but the ease of setup meant that I could focus more time on the front-end, where the brunt of the complexity would be.

In order to speed up load times and reduce potential dependency issues down the road, I've kept the app relatively simple and light. There are only a couple, small external dependencies. No jQuery, no Bootstrap or other CSS framework, just Angular, Firebase, and a couple small, utility modules.
