# &lt;virtual-joystick&gt;
> Virtual Joystick Custom Element | Web Component | HTML Element | Vanilla Javascript

## Gist
Virtual Joystick is a simple, reusable custom web element for touch-enabled user interfaces. Its functionality is strongly encapsulated, separate from the rest of the code.

<img src="/docs/phone.png" width="520px" src="Virtual joystick on a mobile phone" >

But wait, there's more! This component is library-agnostic, which means it can be added to any JavaScript project regardless of the framework or library being used.

The rotation angle is measured in both radians and degrees counterclockwise from horizontal, and measures the rotation of the primary axis from horizontal.

<img src="/docs/unit-circle-chart-degrees.svg" width="460px" src="Joystick unit circle chart" >

## Import

Import it the way you want into your project :

```javascript
// CommonJS
var manager = require('virtual-joystick');
```

```javascript
// Module
import * from 'virtual-joystick';
```

```html
<!-- Classic script -->
<script src="./virtual-joystick.js"></script>
```

```html
<!-- Module script -->
<script type="module" src="./virtual-joystick.js">
```

## Usage
### Static
```html
 <virtual-joystick></virtual-joystick>
```

<img src="/docs/Static.gif" width="400px" src="Static" >

Check out the [demo here](https://dondido.github.io/virtual-joystick/#static).

### Fixed
```html
 <virtual-joystick data-mode="fixed"></virtual-joystick>
```

<img src="/docs/Fixed.gif" width="400px" src="Fixed" >

Check out the [demo here](https://dondido.github.io/virtual-joystick/#fixed).

### Semi
```html
 <virtual-joystick data-mode="semi"></virtual-joystick>
```

<img src="/docs/Semi.gif" width="400px" src="Semi" >

Check out the [demo here](https://dondido.github.io/virtual-joystick/#semi).

### Dynamic
```html
 <virtual-joystick data-mode="dynamic"></virtual-joystick>
```

<img src="/docs/Dynamic.gif" width="400px" src="Dynamic" >

Check out the [demo here](https://dondido.github.io/virtual-joystick/#dynamic).

### Locked X or Y Axis
```html
 <virtual-joystick data-lock="y"></virtual-joystick>
```

<img src="/docs/Lock.gif" width="400px" src="Locked" >

Check out the [demo here](https://dondido.github.io/virtual-joystick/#lock).

### Custom Shape
```html
 <virtual-joystick data-shape="box"></virtual-joystick>
```
```css
virtual-joystick::part(joystick),
virtual-joystick::part(joystick):before, 
virtual-joystick::part(joystick):after {
    border-radius: 0;
}
```

<img src="/docs/Square.gif" width="400px" src="Custom Shape" >

Check out the [demo here](https://dondido.github.io/virtual-joystick/#shape).

### Custom Transition
```html
 <virtual-joystick></virtual-joystick>
```
```css
virtual-joystick::part(joystick),
virtual-joystick::part(joystick):before,
virtual-joystick::part(joystick):after {
    border-radius: 14px;
}
virtual-joystick::part(joystick):after {
    transition-timing-function: cubic-bezier(.17, .67, .52, 1.48);
}
```

<img src="/docs/Transition.gif" width="400px" src="Custom Transition" >

Check out the [demo here](https://dondido.github.io/virtual-joystick/#transition).

### Custom Style
```html
 <virtual-joystick></virtual-joystick>
```
```css
virtual-joystick::part(joystick) {
    background-color: rgba(31, 223, 108, 0.4);
}
virtual-joystick::part(joystick):after {
    background-color: rgba(31, 223, 108, 0.6);
}
virtual-joystick::part(joystick),
virtual-joystick::part(joystick):before,
virtual-joystick::part(joystick):after {
    border: 0;
}
```

<img src="/docs/Style.gif" width="400px" src="Custom Style" >

Check out the [demo here](https://dondido.github.io/virtual-joystick/#style).

### Slotted Elements
```html
 <virtual-joystick>
  <div>...</div>
 </virtual-joystick>
```

<img src="/docs/Slotted.gif" width="400px" src="Slotted Elements" >

Check out the [demo here](https://dondido.github.io/virtual-joystick/#slotted).

### Custom Size
```html
 <virtual-joystick></virtual-joystick>
```
```css
virtual-joystick {
    --radius: 60px;
}
virtual-joystick::part(joystick),
virtual-joystick::part(joystick):before,
virtual-joystick::part(joystick):after {
    background-color: transparent;
    border: 7px solid #673ab7;
}
```

<img src="/docs/Size.gif" width="400px" src="Custom Size" >

Check out the [demo here](https://dondido.github.io/virtual-joystick/#size).

## Options
The data-* attribute is used to apply custom data options to the component, allowing us to configure the joystick component in different ways:

### `data-threshold` defaults to 0.0
This determines the strength needed to trigger a directional event. It measures the distance between the center of the component and the focal point. The 'threshold' value ranges from 0.0 to 1.0.

### `data-mode` defaults to 'static'.
Four modes are possible :

#### `'static'`
- the joystick element is positioned in the normal flow of the document.
- each new touch triggers a new direction.
- **cannot** be multitouch.

#### `'fixed'`
- the joystick element is positioned in the normal flow of the document.
- allows the joystick to be activated by touch outside of the joystick area.
- **can** be multitouch.

#### `'semi'`
- the joystick is repositioned on every touch event.
- **cannot** be multitouch.

#### `'dynamic'`
- the joystick is repositioned on every touch event.
- the component is faded out when released but not destroyed.
- **can** be multitouch.

### `data-lock` defaults to none
This option locks the joystick's movement to either the X (horizontal) or Y (vertical) axis.

### `data-shape` defaults to 'circle'
This determines the shape of the region within which the joystick can move. `'circle'` creates a circular region for joystick movement, while 'box' creates a square region.

## Events
Events are fired to notify the code of "interesting changes" that may affect code execution. These events arise from user interactions with the joystick component. Event handlers can be used to handle and verify user input and actions:

```javascript
const $joystick = document.querySelector('virtual-joystick');
const handleKeyEvents = () => {
     $joystick.dataset.release.split('').forEach(()=>{});
     $joystick.dataset.capture.split('').forEach(()=>{});
 };
 $joystick.addEventListener('joystickdown', handleKeyEvents);
 $joystick.addEventListener('joystickmove', handleKeyEvents);
 $joystick.addEventListener('joystickup', handleKeyEvents);
```
### `'joystickdown'`
The 'joystickdown' event is fired when the virtual joystick is pressed while the pointer is located within the specified area.

### `'joystickmove'`
The 'joystickmove' event is fired when the pointer's coordinates change, and the pointer has not been canceled by a browser touch-action.

### `'joystickup'`
The 'joystickup' event is fired when the virtual joystick is released while the pointer is located within the specified area. This event is the counterpart to the 'joystickdown' event.

## Outputs
Various 'data-*' output attributes are used to represent the results of calculations performed by the component. Continuous output monitoring can be achieved through different methods:

```javascript
const $joystick = document.querySelector('virtual-joystick');
const log = () => $joystick.dataset.direction;
requestAnimationFrame(log);
setInterval(log, 1000);
```

### `data-degree`
This represents the counter-clockwise angle measured in degrees from the positive X-axis.

### `data-radians`
This represents the counter-clockwise angle measured in radians from the positive X-axis.

### `data-direction`
This matches one of the eight principal winds, which include the four cardinal directions (N, E, S, W) and the four "intercardinal" or "ordinal directions" (NE, SE, SW, NW), at 45° intervals. The four cardinal directions (N, S, E, W) are the main compass directions. Relative to the north, the east, south, and west directions are at 90° intervals in the clockwise direction. The ordinal directions (also called intercardinal directions) are northeast (NE), southeast (SE), southwest (SW), and northwest (NW).

### `data-release`
This attribute value represents one of the eight points of the compass rose with ordinal and cardinal directions: N, NE, E, SE, S, SW, W, and NW. It indicates which point transitions from an active to an inactive state.

### `data-capture`
This attribute value represents one of the eight points of the compass rose with ordinal and cardinal directions: N, NE, E, SE, S, SW, W, and NW. It indicates which point transitions from an inactive to an active state.

### `data-force`
This is a float that represents the distance between the center and a vertex. The value is between 0.0 and 1.0 when inside and above 1.0 when outside.

### `data-distance`
This is an integer that represents the distance between the center of the component and the focal point. The distance is measured only within the component in pixels.

### `data-distance`
This is an integer that represents the distance between the center of the component and the focal point. The distance is measured only within the specified area in pixels. It matches the 'data-distance' value when the pointer is inside the joystick area.

### `data-x`
This is a float that represents the horizontal coordinate within the application's viewport at which the virtual joystick event occurred.

### `data-y`
This is a float that represents the vertical coordinate within the application's viewport at which the virtual joystick event occurred.
