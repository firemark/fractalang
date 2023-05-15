Why?
====

Why haven't I written a library in any language or made a domain-specific language
(like the LOGO_ language) to make simple fractals?

1. Because I'm in love with many variations of mathematician symbols or ancient manuscripts.
   Many symbols are mysterious and have an interesting history. Other modern symbols have
   great readability and can be universal in many cultures. Instead of words or
   artificial/programming languages I decided to create a language with many symbols
   (like Chinese characters) to prove it is possible to make code with various symbols
   without sentences (and is still not the APL_).
2. The advantage of symbols is speed-up of reading (in e.g. :tut:token:`DRAW_CIRCLE` :tut:token:`COUNT_5`
   :tut:token:`DRAW_LINE` :tut:token:`COUNT_2` means *Draw a circle of size 5 units and after that
   draw a line of width 2 units* - did you notice the difference in size between text and tokens?), but
   the main disadvantage is a higher linear curve (You need to learn these symbols instead of sentences).
3. The `L-System`_ which is possible to generate from simple, 1d fractals to complex 3d
   models very similar to trees or plants; but the format of "code" is mostly understood for
   students from high schools. So instead of *axioms*, *variables* and *rules* I decided to
   make *staves* (a place where are tokens), *actions* (like draw/move) and *values*
   (five, 90°, etc.).
4. LOGO_ can make very advanced figures and of course influence the Fractalang, but the syntax is
   not standardized and a little hard for beginners. Of course, is possible to use the `Python turtle module`_
   but it's not my goal.
5. Honestly, I'm upset about modern art in many museums - many paintings are understandable, primitive, or just meaningless.
   Without a description or author (Have you seen some sketches of Picasso?) it's very hard to rate the art.
   Of course, some arts are nice and beautiful, but it's difficult for me to rate a red painting with three lines as great art.
   So I decided to make an "art generator" with "code" which describes abstract/mathematical art.
6. This style of coding is based on the first versions of `Game Maker`_. It was the first experience of programming
   with moving blocks with actions and I remembered it as great fun. So I tried to create a similar tool,
   but not for making games but for drawing abstract images.


.. _APL: https://computerhistory.org/blog/the-apl-programming-language-source-code/
.. _Game Maker: http://www.multiwingspan.co.uk/old/gm/tutorials/breakout/br5.htm
.. _LOGO: https://en.wikipedia.org/wiki/Logo_(programming_language)
.. _L-System: https://en.wikipedia.org/wiki/L-system
.. _Python turtle module: https://docs.python.org/3/library/turtle.html
