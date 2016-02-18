---
layout: post
title: bundle open
---

When working on a Rails app, you sometimes need to dig into a gem. Maybe you've got a failing test that __really seriously__ shouldn't be failing or maybe you would just like to know what's going on behind the scenes. In either case wouldn't it be nice to open up any given gem right there, with a simple command rather than diving into that gem's full local path?

## the shortcut

{% highlight bash %}
$bundle open <gem-name>
{% endhighlight %}

Boom. The gem's source directory will open in your editor. No more copying and pasting long paths or trying to navigate through 30 subdirectories to the gem you want.

## configure the $EDITOR environment variable

For `bundle open` to work you must set your `$EDITOR` environment variable. To do this (and have your shell remember the change when you restart), simply add

{% highlight bash %}
export EDITOR=vim
{% endhighlight %}

to your `.bash_profile` (assuming you're using OS X), substituting vim for your editor of choice (but hopefully it's vim).

Then run

{% highlight bash %}
source ~/.bash_profile
{% endhighlight %}

so that your shell re-builds the script and applies the changes to your currently running session.

You can check that it worked by running
{% highlight bash %}
echo $EDITOR
{% endhighlight %}
and you should see the editor you've set.
