Token Values
============

Counters
^^^^^^^^^^^^^

They're used basically in any action.

.. tut:token:: COUNT_1
   :title: Value one

.. tut:token:: COUNT_2
   :title: Value two

.. tut:token:: COUNT_3
   :title: Value three

.. tut:token:: COUNT_5
   :title: Value five 
   
.. tut:token:: COUNT_7
   :title: Value seven

.. tut:token:: COUNT_MINUS
   :title: Value minus one

.. tut:token:: COUNT_GOLD
   :title: Value `golden ratio`_

.. tut:token:: COUNT_SILVER
   :title: Value `silver ratio`_

.. tut:token:: COUNT_BRONZE
   :title: Value bronze ratio

.. tut:token:: COUNT_PLASTIC
   :title: Value `plastic number`_

Fractions
^^^^^^^^^^^^^

They're used basically in any action.

.. tut:token:: FRACT_1_2
   :title: Value half

.. tut:token:: FRACT_1_3
   :title: Value one third

.. tut:token:: FRACT_2_3
   :title: Value two thirds

.. tut:token:: FRACT_1_4
   :title: Value one quarter

.. tut:token:: FRACT_3_4
   :title: Value third quarters

.. tut:token:: FRACT_1_5
   :title: Value one fifth

.. tut:token:: FRACT_2_5
   :title: Value two fifth

.. tut:token:: FRACT_3_5
   :title: Value three fifth

.. tut:token:: FRACT_4_5
   :title: Value four fifth

Angles
^^^^^^^^^^^^^

Angles are used in rotate actions (:tut:token:`ROTATE_LEFT` and :tut:token:`ROTATE_RIGHT`).

Note that 360° in the fractalang is not :code:`2π` but :code:`1.0` value.

.. tut:token:: ANGLE_270
   :title: 270° Angle

   Alias for three quarters.

.. tut:token:: ANGLE_180
   :title: 180° Angle

   Alias for half value.

.. tut:token:: ANGLE_90
   :title: 90° Angle

   Alias for one quarter.

.. tut:token:: ANGLE_60
   :title: 60° Angle

   Alias for one sixth.

.. tut:token:: ANGLE_45
   :title: 45° Angle

   Alias for one eighth.

.. tut:token:: ANGLE_30
   :title: 30° Angle

   Alias for one twelfth.

.. tut:token:: ANGLE_15
   :title: 15° Angle

   Alias for one sixteenth.

.. tut:token:: ANGLE_10
   :title: 10° Angle

Arguments
^^^^^^^^^

.. tut:token:: ARGUMENT
   :title: Argument

   Returns a value from a currently invoked stave.

.. tut:token:: CALL_DIAMOND
   :title: Diamond argument

   Compute dynamically value from  the*Diamond* stave.

.. tut:token:: CALL_INV_TRIANGLE
   :title: Inverse triangle argument

   Compute dynamically value from the *Inverse triangle* stave.

Colors
^^^^^^

.. tut:token:: COLOR_MIN
   :title: First color

   Set the color of a figure/line to the first color given in the editor.

.. tut:token:: COLOR_MAX
   :title: Second color

   Set the color of a figure/line to the second color given in the editor.

.. tut:token:: COLOR_FILL
   :title: Fill a shape

   Fill a shape with a solid color.

.. tut:token:: COLOR_EMPTY
   :title: Unfill a shape

   Unfill a shape which makes transparent with an outline border.

.. tut:token:: COLOR_SHIFT_1_2
   :title: Color transition (by 50%)

   Change a color of a shape/line from the first to the second color.

.. tut:token:: COLOR_SHIFT_1_4
   :title: Color transition (by 25%)

   Change a color of a shape/line from the first to the second color.

.. tut:token:: COLOR_SHIFT_1_5
   :title: Color transition (by 20%)

   Change a color of a shape/line from the first to the second color.

.. tut:token:: COLOR_SHIFT_1_10
   :title: Color transition (by 10%)

   Change a color of a shape/line from the first to the second color.

Strokes
^^^^^^^

.. tut:token:: STROKE_THICK_ADD
   :title: Increase the thickness

   Change the thickness of a line.

.. tut:token:: STROKE_THICK_SUB
   :title: Decrase the thickness

   Change the thickness of a line.

Operator Modifiers
^^^^^^^^^^^^^^^^^^

TODO


.. _golden ratio: https://en.wikipedia.org/wiki/Golden_ratio
.. _silver ratio: https://en.wikipedia.org/wiki/Silver_ratio
.. _plastic number: https://en.wikipedia.org/wiki/Plastic_number