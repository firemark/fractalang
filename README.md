# Fractalang

Generate fractals with the hieroglyphs-like programming language.

[![Fractalang tutorial](https://i.ytimg.com/vi/Qnb2YJsHbuY/maxresdefault.jpg)](https://www.youtube.com/watch?v=Qnb2YJsHbuY "Fractalang tutorial")

[Online version of the editor](https://firemark.github.io/fractalang/)

[Video Fractalang tutorial](https://www.youtube.com/watch?v=Qnb2YJsHbuY)

[Documentation](https://firemark.github.io/fractalang/docs/)

## How to build and run

The project uses nodejs, webpack and typescript.

```bash
npm install
npm run build-node
npm run generate-icon-tokens
npm build-web
# Now open dist/index.html
```

## Develop mode

```bash
npm run serve-web
```

## Structure of the project

TODO

## TODO list

* More tutorials! (video/docs)
* The editor:
    * Better GUI.
    * History of changes.
    * The visible cursor in the debug mode.
    * Show the stack of the program in the debug mode.
    * Allow to change heading on start of drawing.
    * The tiling mode (render image multiple times as tiles)
* Rendering:
    * Allow gradient on the background.
    * More colors instead of two colors.
    * Shadow / Lighting strokes.
    * Paint/Pencil-like strokes.
    * Rendering to canvas instead of SVG.
* New Tokens:
    * *Mirror* (Axial symmetry) token.
    * *Point reflection* token.
    * "Dash/Dot line" tokens.
    * "Drawing arc" tokens based on ellipse.
    * Square roots.
* Core:
    * *Starting* stave.
    * Nested repeat/reverse tokens.
* Bugs:
    * A problem with clicking on a token in a stave.
