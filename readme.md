# Interchain Foundation Emblem Renderer

Interchain Foundation's Emblem is generated using d3 geo projection. 
- Static rendering of the emblem can be made from [here](https://math-practice.github.io/interchain-emblem-renderer/) and can be downloaded as SVG.
- Animated emblem can be embedded to a webpage using JavaScript. See below.

## Download static emblem
[This page](https://math-practice.github.io/interchain-emblem-renderer/) creates the emblem in given `yaw` and `roll`, which can be downloaded as SVG. A few notes:
- The default state of the emblem is `yaw: 0` and `roll:0`. Use this setting unless there's a compelling reason not to.
- When manipulating the generated shape in apps such as Illustrator, please make sure to *Outline Stroke* to preserve the stroke width upon scaling.

## Embed animated emblem
For placement of animated emblem on a webpage, put one of the below code in a place where the emblem needs to be displayed. [This demo page](https://math-practice.github.io/interchain-emblem-renderer/demo.html) shows embedded emblem. Various display options can be set as `data-*` attributes.

#### Basic example
Below code will emben the animated emblem right below itself with `300px` width and height. If `data-animated` attribute is present, the emblem will be animated.
```html
<script src="https://math-practice.github.io/interchain-emblem-renderer/render.js" data-animated data-size="300"></script>
```

#### With more options
Below code will emben the animated emblem right below itself with all possible display options set.

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

