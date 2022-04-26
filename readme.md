# Interchain Foundation Emblem Renderer

Generates Interchain Foundation's emblem using d3.

## Static emblem
<img style="background:white" src="assets/img/Interchain-Foundation-Emblem.svg">

The static emblem can be generated in SVG and downloaded [from here](https://math-practice.github.io/interchain-emblem-renderer/).
- The default state of the emblem is `yaw: 0` and `roll:0`. Use this setting unless there's a compelling reason not to.
- Please make sure to *Outline Stroke* in apps such as Illustrator to preserve the stroke weight upon scaling.

## Animated emblem
For placement of animated emblem on a webpage, put below code where it needs to be shown. [This demo page](https://math-practice.github.io/interchain-emblem-renderer/demo/) shows embedded emblem. Various display options can be set as `data-*` attributes.

#### Basic example:
Below code will embed the animated emblem below itself with `300px` width and height. If `data-animated` attribute is present, the emblem will be animated.
```html
<script src="https://math-practice.github.io/interchain-emblem-renderer/render.js" data-animated data-size="300"></script>
```

#### With more options:

```html
<script src="https://math-practice.github.io/interchain-emblem-renderer/render.js" data-animated data-size="300" data-yaw="30" data-roll="60" data-fps="60" data-accelerate="2" data-color="red"></script>
```

#### Display options

| Attribute         | Type    | Default  | Description                                                                                                                 |
| ----------------- | ------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `data-animate`    | _Boolean_ | `false`       | Animates the emblem when attribute exists.                                                                                  |
| `data-size`       | _Int_     | `640`         | Sets width and height (same value) in px.                                                                                   |
| `data-yaw`        | _Float_   | `0`           | Sets the initial `yaw` of the projection in degrees.                                                                                     |
| `data-roll`       | _Float_   | `0`           | Sets the initial `roll` of the projection in degrees.                                                                                   |
| `data-fps`        | _Float_   | `24`          | Sets number of frames to display per second.                                                                                |
| `data-accelerate` | _Float_   | `1`           | Accelerates animation. Setting this to `2` will result in 2x speed of animation (2x `yaw` and `roll` offset in each frame). |
| `data-color`      | _String_  | `black`       | Takes CSS color values.                                                                                                     |

