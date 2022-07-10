Invoking staves and recursion
=============================

Drawing lines is pretty boring.
For move advanced fractals we should use
recursion and invoking another staves.

In previous examples we used a single stave :tut:token:`CALL_F`. But we can use more staves.
In example we can put in *helper stave* tokens as part of fractal and *invoke* them in main stave :tut:token:`CALL_F`.

.. note::
   Each invoked stave on the begging increases an interation counter and on finishing decrease it.
   Remember about it when you invoke *helper stave* with small iterations limit.

.. tut:animation:: Two Staves with recursion.
   :staves: F G
   :iterations: 2
   :start: 1

   G@DRAW_LINE, G@COUNT_2      # Let's start with stave on line "G".
   G@DRAW_TRIANGLE, G@COUNT_5  # Draw a triangle.
   G@DRAW_ARCLINE_R_1_4        # Draw an arc. I think, stave "G" is done.
   F@CALL_G, F@ARGUMENT        # On line "F" we can invoke stave "G". Don't worry about Argument (Triangle) token. We will explain this later.
   F@MOVE_FORWARD, F@COUNT_2   # Add simple forward.
   F@CALL_F, F@ARGUMENT        # Repeat itself.
   G@DRAW_SQUARE, G@COUNT_5, G@COUNT_5  # We can still modifing stave "G". Next steps are increment iterations.
   !IT_INC
   !IT_INC

Arguments
---------

At last, we can talk about token-value Argument :tut:token:`ARGUMENT`.
Each invoked stave has argument. It's a dynamic value set on invoking token in previous stave.
It's very similiar to function's variable - if stave :tut:token:`CALL_G` was invoked with
:tut:token:`COUNT_2`, then :tut:token:`DRAW_LINE` :tut:token:`ARGUMENT` :tut:token:`COUNT_3`
draws line of `5` units.

First iteration used stave :tut:token:`CALL_F` with default argument `1.0`

See an example:

.. tut:animation:: Argument
   :staves: F
   :iterations: 3
   :start: 1

   F@DRAW_LINE, F@ARGUMENT     # Draw a line with an argument. Argument value is determined by value of invoking stave.
   F@DRAW_TRIANGLE, F@COUNT_3  # Draw a triangle.
   F@ROTATE_LEFT, F@ANGLE_90   # Rotate a cursor.
   F@CALL_F, F@ARGUMENT        # Repeat itself. We should get a square when we pass value as "argument".
   F@FRACT_3_4                 # And now try to reduce a value of invoking staff. Each next line it's smaller than previous. It's a nice spiral! Next steps are increment iterations.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC

Argument can be used for any token-action, like in rotating:

.. tut:animation:: Argument in rotating
   :staves: F
   :iterations: 3
   :start: 1

   F@DRAW_LINE                            # Draw a line.
   F@DRAW_TRIANGLE, F@COUNT_3             # Draw a triangle.
   F@ROTATE_LEFT, F@ANGLE_45, F@ARGUMENT  # Rotate a cursor with argument.
   F@CALL_F, F@ARGUMENT                   # Repeat itself.
   F@COUNT_3, F@FRACT_1_2, F@FRACT_3_4    # Increase an argument.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC

Argument can be used for invoking another staves:

.. tut:animation:: Argument in another staves
   :staves: F G
   :iterations: 3
   :start: 1

   G@DRAW_CIRCLE, G@ARGUMENT, G@ARGUMENT, G@MOVE_FORWARD, G@FRACT_1_5, G@ARGUMENT  # Draw circle and move on.
   F@CALL_G, F@COUNT_2     # First invoking of stave "G"
   F@CALL_G, F@COUNT_5     # Second invoking of stave "G"
   F@CALL_G, F@COUNT_3     # Third invoking of stave "G"
   F@REPLAY, F@COUNT_3     # Repeat last action three times.
   G@ROTATE_LEFT, G@ANGLE_15, G@DRAW_ARCLINE_L_1_4, G@ARGUMENT, G@REVERSE # draw fancy arcline

Dynamic Arguments
^^^^^^^^^^^^^^^^^

Sometimes we need shortcut of *half of argument* or *one third of argument*.
We can do that with *dynamic arguments* like :tut:token:`CALL_DIAMOND` or :tut:token:`CALL_INV_TRIANGLE`.

These arguments are declared as another staves with one rule - without recurrency and without token values.

.. tut:animation:: Dynamic Argument
   :staves: F DIAMOND INV_TRIANGLE
   :iterations: 3
   :start: 1

   DIAMOND@ARGUMENT, DIAMOND@FRACT_1_3    # Set "Diamond argument" as one third of argument.
   INV_TRIANGLE@COUNT_2, INV_TRIANGLE@COUNT_5, INV_TRIANGLE@ARGUMENT  # Set "Inverse triangle argument" as 10 * argument
   F@MOVE_FORWARD, F@FRACT_1_5                 # Go forward.
   F@DRAW_CIRCLE, F@CALL_INV_TRIANGLE     # Draw a circle with "Inverse triangle argument".
   F@CALL_F, F@CALL_DIAMOND               # Repeat stave with "Diamond argument". Next circles should be smaller than previous.
   F@CALL_F, F@COUNT_3, F@CALL_DIAMOND    # Do it again! Next steps are increase an interations.
   !IT_INC
   !IT_INC
   !IT_INC

Special Staves
--------------

Stave can be specialized to invoke on special conditions:

* When iteration number is odd.
* When iteration number is even.
* When is the last iteration.

Parity Staves
^^^^^^^^^^^^^

.. tut:animation:: Parity staves
   :staves: F G::ODD G::EVEN
   :iterations: 3
   :start: 1

   F@DRAW_LINE, F@FRACT_1_3, F@CALL_G, F@CALL_F  # Draw line and invoke *G* and *F* staves.
   G::ODD@DRAW_SQUARE, G::ODD@COUNT_5            # On odd iterations draw a square.
   G::EVEN@DRAW_CIRCLE, G::EVEN@COUNT_3          # On even iterations draw a circle.

End Staves
^^^^^^^^^^

.. tut:animation:: End staves
   :staves: F F::END G
   :iterations: 3
   :start: 1

   F@CALL_G, F@DRAW_LINE, F@FRACT_1_3, F@CALL_F # Just draws line and invokes *G* and *F* staves.
   G@DRAW_SQUARE, G@COUNT_5                     # Draw square in *G* stave.
   F::END@DRAW_TRIANGLE, F::END@COUNT_3         # Draw triangle on the last iteration.

I think, thats all with staves, arguments and recursion. On next section I tell how to generate common fractals.
