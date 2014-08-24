salaries
========

An node.js based app that plays with a [small set](http://www.roberthalf.com/creativegroup/marketing-salaries) of salaries data I cleaned, and Backbone. Still in the early stages, so it doesn't have front-end ops (Grunt, caching) in place, and it's also very ugly.

There are two main problems I'm trying to solve here:

1) How to get people interested in salaries. This is one of those cases where a huge chart doesn't usually cut it. So I've been playing with a slider (and eventually color) to make interaction more fun.

2) The dreaded pop-up, the interaction that users love and everyone else hates. Philosophically, it's correct to hate it, since it's content that both is and isn't there, and so it has to be shown and hidden by JS and CSS. So, I thought, what if we just make the popup a Backbone view, and use it as the detail view for an item. That way, it's only there when it's supposed to be there. There's no "toggle modal" JS or "active modal" CSS, it's either there or it isn't.

