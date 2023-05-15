Between a word and a symbol
===========================

The main goal of the project is of course the use of symbols instead of
programming code, but why have I decided to use symbols? Many questions about
the project are "Why don't you use words?" or "Why don't you implement custom language"?

I thought about that, and I have some conclusions.

Advantages
----------

First, as I mentioned on the previous page, I like symbols :-)

Second, symbols (if you know what they mean) are more practice and (usually) faster
to read. Let's see the figure below this paragraph - The whole paragraph in the figure means
``x² + 10 = 8x`` - so we compress the whole text into 7 symbols in one line. Other examples
are diagrams like circuit diagrams or UML - without symbols, it would be hard to draw any diagram.

Because I'm in love with many variations of symbols and ancient manuscripts.
I love mathematical symbols too - many equations are very hard to write as a poetic poem.
I think without simple symbols and simpler syntax in math formulas it wouldn't be possible
to make advanced equations. In other scientific/engineering branches it would be
too hard to make something without symbols.

.. figure:: images/medieval.png
  :alt: medieval notations
  :align: center

  `Medieval formulas`_ in the text was a little *"too big"*.

.. figure:: images/circuit-diagram.png
  :alt: circuit diagram
  :align: center

  Each `Circuit Diagram`_ has many symbols. I can't imagine how would work without diagrams.

.. figure:: images/road_sign.jpg
  :alt: road sign in Poland
  :align: center

  `Road sign`_ is a code for drivers. This sign means *"no entry in both ways"*.
  Each driver can recognize a red ring with a white circle very fast.

Third, Using symbols still need a kind of *language* (like the `Chinese characters`_
or the `Maya script`_ still need a language to write sentences).  So I thinking about
making a "language" to draw simple and little advanced figures and fractals with symbols.
But not a typical *computer language* - this lang have custom symbols (*tokens*)
and split by staves (similar to computer functions/procedures). Each symbol
tries to avoid common mathematical symbols (but it was too hard to achieve that -
some tokens have mathematical symbols like :tut:token:`CALL_F`) and Arabic numerals
(Roman numerals are still in my heart :code:`<3`).

I wish to make language with "sentences". Each sentence has tokens order
:code:`action (value1, value2, …)` (in e.g. :tut:token:`DRAW_CIRCLE` :tut:token:`COUNT_5`
:tut:token:`COLOR_MAX` means *Draw circle of size 5 units and second color*).
You can imagine that *action token* is similar to a verb, and *value token* is similar
to a noun or adjective. So I think it allows treating the fractalang as a simple language.

Disadvantages
-------------

But symbols can be very unclear if a reader is not familiar with a specific set of symbols.
It's very nice if somebody knows that, but most people don't know specific languages.
To achieve that, they need documentation, courses, or worse - scientific degree
(let him who doesn't fail the exam of derivations cast the first :math:`e` constant)!

A second disadvantage is a limited number of symbols - many languages (natural and computer)
have advanced grammar (`Chomsky hierarchy`_) and `morphology`_ to describe
(almost) any situation. My language unfortunately doesn't have advanced grammar
and has a small set of symbols - because I think it would be too difficult
to remember bigger constructs in this language. I suppose, for now, is enough
to make very fancy fractals (but in the future it'll be very hard to add new symbols
and I'm scared about transforming simple language to very-like Chinese characters).

.. figure:: images/heisenberg.svg
  :alt: heisenberg picture
  :align: center

  `Heisenberg equation`_ is only understand only for people which
  know advanced mathematic and quantum mechanics.
  For mortals looks like a black magic spell.

.. figure:: images/mensural_notation.jpg
  :alt: mensural notation
  :align: center

  `Mensural notation`_ from 16th-century - If you aren't similar with music notation
  then this manuscript would be unreadable.

It's very similar situations in computer languages. Symbols contra keywords:

.. figure:: images/cobol.png
  :alt: cobol
  :align: center

  Cobol_ has tried to be english-friendly language.

.. figure:: images/APLSC_matrix.jpg
  :alt: APL
  :align: center

  APL_ has many symbols - only who knew these all symbols and gramar can write programs in APL language.

.. figure:: images/game_maker.png
  :alt: game maker
  :align: center

  `Game Maker`_ in early versions has tokens too. It was very nice to learn programming
  computer games but not enough to make a bigger game.

.. _Circuit diagram: https://en.wikipedia.org/wiki/Circuit_diagram
.. _Cobol: https://en.wikipedia.org/wiki/COBOL
.. _Road sign: https://en.wikipedia.org/wiki/Road_signs_in_Poland#/media/File:Zakaz_wjazdu_-_nie_dotyczy_rowerów.JPG
.. _APL: https://computerhistory.org/blog/the-apl-programming-language-source-code/
.. _Game Maker: http://www.multiwingspan.co.uk/old/gm/tutorials/breakout/br5.htm
.. _Medieval formulas: https://www.researchgate.net/publication/266977181_Polynomials_and_equations_in_medieval_Italian_algebra
.. _Heisenberg equation: https://en.wikipedia.org/wiki/Heisenberg_picture
.. _LOGO: https://en.wikipedia.org/wiki/Logo_(programming_language)
.. _Mensural notation: https://en.wikipedia.org/wiki/Mensural_notation#/media/File:Barbireau_illum.jpg
.. _Chomsky hierarchy: https://en.wikipedia.org/wiki/Chomsky_hierarchy
.. _morphology: https://en.wikipedia.org/wiki/Morphology_(linguistics)#Examples
.. _Chinese characters: https://en.wikipedia.org/wiki/Traditional_Chinese_characters
.. _Maya script: https://en.wikipedia.org/wiki/Maya_script
