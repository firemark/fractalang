Definitions
===========

Before we start, we should describe basic terms.

.. figure:: images/definitions.png
   :alt: definitions
   :align: center

   Definitions

Editor
  A program/GUI to make fractals.

Plane
  A rendered image/figure.

Token
  An atom of fractalang - in the editor, it's a block with a symbol.

  A token can describe numbers, and colors, or execute an action like drawing or rotating.

  A token is a *word* in fractalang. Like a *word* - token connected with other tokens
  can create sentences that making nice figures or fractals.

Stave
  Stave like in music notation which is

Action
  Token with action/command/order. Examples are drawing line (:tut:token:`DRAW_LINE`)
  or rotating (:tut:token:`ROTATE_LEFT` or :tut:token:`ROTATE_RIGHT`)

Value
  Token with specified value - often a number (e.g. Three :tut:token:`COUNT_3`), fractions
  (e.g. One third :tut:token:`FRACT_1_3`) but it could be as color or stroke width.
