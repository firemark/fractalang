Cursor manipulations
====================

X

.. tut::animation::
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE
   F@COUNT_2
   F@FORWARD
   F@COUNT_2
   F@DRAW_CIRCLE
   F@COUNT_2
   F@CALL_F
   F@ARGUMENT
   !IT_INC
   !IT_INC

X

.. tut::animation::
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE
   F@COUNT_2
   F@ROTATE_LEFT
   F@ANGLE_90
   F@DRAW_CIRCLE
   F@COUNT_2
   F@CALL_F
   F@ARGUMENT
   !IT_INC
   !IT_INC
   !IT_INC

<script>
makeAnimation({
  lines: ["F"],
  tokens: [
    "F@DRAW_LINE", "F@COUNT_2",
    "F@FORWARD", "F@COUNT_1",
    "F@ROTATE_LEFT", "F@ANGLE_30",
    "F@DRAW_CIRCLE", "F@COUNT_2",
    "F@CALL_F", "F@ARGUMENT",
    "!IT_INC", "!IT_INC", "!IT_INC",
  ],
  iterations: 1,
});
</script>

<script>
makeAnimation({
  lines: ["F", "H"],
  tokens: [
    "H@DRAW_LINE", "H@COUNT_2",
    "H@FORWARD", "H@COUNT_1",
    "H@DRAW_CIRCLE", "H@COUNT_2",
    "F@CALL_H", "F@ARGUMENT",
    "F@REPEAT", "F@_COUNT_3",
    "F@ROTATE_LEFT", "F@ANGLE_30",
    "F@CALL_F", "F@ARGUMENT",
    "!IT_INC", "!IT_INC", "!IT_INC",
  ],
  iterations: 1,
});
</script>
