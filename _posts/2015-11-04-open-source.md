---
layout: post
title: Open Source
---
I've been excited about the idea of contributing to open source projects for a while. They're great opportunities for experience in foreign codebases, meeting of other humans, and feeling smug about your contribution to society. The trick is figuring out where to start and then, you know, starting. Big, somewhat obvious projects like Firefox (and everything else wrapped up in the <a href="https://developer.mozilla.org/en-US/docs/Introduction" target="_blank">Mozilla Developer Network</a>) seem like excellent introductions but they may not be using a language you have experience with or it might be tough to find a bug/feature that you feel confident working on.

The advice I kept hearing goes something like this -- "contribute to projects you actually use". Turns out that works! As I've become acquainted with more and more Ruby gems, APIs, command line tools, etc., I've started to find opportunities for little modifications that could make the tool better or improve my workflow in some way. The cool thing is that these modifications don't have to be all that significant. An example: I recently made a contribution to the <a href="https://github.com/stympy/faker" target="_blank">Faker gem</a> that only required an afternoon of my time and a lot of other people's hard work.

The Faker gem is a Ruby library that allows the user to generate placeholder text in the form of Lorem Ipsum for their project (useful for mocking webpages without actually writing pages of content). Conversely, <a href="http://hipsum.co/" target="_blank">Hipster Ipsum</a> is Lorem Ipsum plus a case of Natty Boh and a banjo. I wanted some Hipster from my Faker gem so I went ahead and added it. A few minutes of research lead to the <a href="http://hipsterjesus.com/" target="_blank">Hipster Lorem API</a>. I forked the Faker gem on GitHub, wrote a <a href="https://github.com/npauzenga/Hipster_nonsense_parser" target="_blank">quick script</a> to parse the JSON returned by the Hipster API, added a new class with just a bit of new logic, a couple tests, some documentation and that's it. Aside from documentation my whole contribution probably amounted to less than 20 lines of code. I submitted a pull request on the GitHub repo and it was merged really quickly.

My takeaways --

1. Instead of searching for open source projects, keep an eye on the tools you actually use and take note of anything that bugs you.

2. Contributions don't have to be super significant. Keep the scope of work small. Any minor improvement or additional feature will likely be appreciated.

Other ideas for getting started --

1. Updating a project's documentation. It may not be the most exciting contribution but it'll get you familiar with the codebase and serve as a handy introduction to the team.


2. Updating a project's dependencies. Open source projects will rely on gems, APIs, or frameworks that might be out-of-date. Updating these and fixing any bugs that come up would likely be a great help to just about any team. <a href="https://gemnasium.com/?utm_source=Tumblr&utm_medium=integrated-link&utm_campaign=GemnasiumBlog" target="_blank">There are even tools that will automate some of the process.</a>
