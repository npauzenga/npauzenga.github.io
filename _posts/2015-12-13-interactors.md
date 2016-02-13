---
layout: post
title: Interactors
---
A couple weeks ago I started work on a new project called <a href="https://github.com/npauzenga/meet_meeples-server" target="_blank">Meet Meeples</a>. The elevator pitch is "Social network and Meetup alternative for your local board game community". It's super nerdy and I'm really excited.

The project will be split into two parts -- the server-side Rails app and the client-side AngularJS (or potentially Ember) app. I've just started writing the Rails app and I'm trying something slightly different for my models and controllers. I've been reading about a design pattern called <a href="http://www.sitepoint.com/dci-the-evolution-of-the-object-oriented-paradigm/" target="_blank">"Data Context Interaction"</a> as a compliment to the tried and true MVC pattern most Rails apps require and my instructor at Bloc pointed me to a really cool gem that starts to implement those ideas.

The gem is called <a href="https://github.com/collectiveidea/interactor" target="_blank">Interactor</a> and it's super easy to use and immediately observe cleaner code. Here's an example of one of my controller actions using two interactors:

<script src="https://gist.github.com/npauzenga/e9220ca640b4ceeed1b7.js"></script>

And here's one of the interactors being called. Each is located in a directory I've called <code>/app/interactors</code>:

<script src="https://gist.github.com/npauzenga/1724b0d815ff2fad80ef.js"></script>

The first thing you may notice is that this is a lot more code than you might otherwise write. In this particular case, and any time you have relatively simple methods you're trying to abstract, that's true. So what's the benefit?
My favorite thing about writing functionality in this way is the organization. If most of your controller logic is moved into interactors you end up with an <code>/app/interactors</code> directory that looks like this:
<p style="text-align: center;"><code>
/app/interactors/
create_auth_token.rb
create_user.rb
delete_user.rb
show_user.rb
update_user.rb
</code></p>

I can now see, at a glance, everything my application does just by looking at this folder.

Another benefit is re-usability. If I'm careful about validating my interactors appropriately (hence the <code>validate_input, execute, validate_output</code> pattern) I can reuse any of these interactors anywhere. It's even possible to chain Interactors together in <code>contexts</code>, thereby making it possible to call any combination of interactors using one class called a <code>context</code>.

Testing is also mostly straightforward. The only slight hitch is testing your organizers. More details coming up.
