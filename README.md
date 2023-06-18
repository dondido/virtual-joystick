# &lt;virtual-joystick&gt;
> Virtual Joystick Custom Element | Web Component | HTML Element | Vanilla Javascript

## Gist
Virtual Joystick is simple reusable, custom web element for touch-enabled user interfaces where the functionality is strongly encapsulated from the rest of the code.

<img src="/docs/phone.png" width="520px" src="Virtual joystick on a mobile phone" >

That's not even the best part, this component is library-agnostic which means it can be added to any JavaScript project irrespective of the framework/library.

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
The data-* attribute is used to apply custom data options to the component. This allows us to configure the joystick component in different ways:

### `data-threshold` defaults to 0.0
This is the strength needed to trigger a directional event. It measures the distance between the center of the component and the focal point. The 'threshold' value range is between 0.0 and 1.0.

### `data-mode` defaults to 'static'.
Three modes are possible :

#### `'static'`
- the joystick element is positioned at the normal flow of document
- each new touch triggers a new direction.
- **cannot** be multitouch.

#### `'fixed'`
- the joystick element is positioned at the normal flow of document
- allows the joystick to be activated on touch outside of the joystick area.
- **can** be multitouch.

#### `'semi'`
- the joystick is reposition on every touch event.
- **cannot** be multitouch.

#### `'dynamic'`
- the joystick is reposition on every touch event.
- the component is faded-out when released but not destroyed.
- **can** be multitouch.

### `data-lock` defaults to none
Locks joystick's movement either to X (horizontal) or Y (vertical) axis.

### `data-shape` defaults to 'circle'
The shape of region within which joystick can move. `'circle'` creates circle region for joystick movement and `'box'` creates square region for joystick movement.

## Events
Events are fired to notify code of "interesting changes" that may affect code execution. These arise from user interactions with the joystick component. Event handlers can be used to handle and verify user input and actions:

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
### 'joystickdown'
The 'joystickdown' event is fired at an element when the virtual joystick is pressed while the pointer is located within specified area.

### 'joystickmove'
The 'joystickmove' event is fired when a pointer changes coordinates, and the pointer has not been canceled by a browser touch-action.

### 'joystickup'
The 'joystickup' event is fired at an element when the virtual joystick is released while the pointer is located within specified area. This event is the counterpoint to 'joystickdown' event.

## Outputs
Various 'data-*' output attributes are used to represent the result of calculations performed by the component.

### `data-degree`
Counter clockwise angle measured in degrees from the positive X-axis

### `data-radians`
Counter clockwise angle measured in radians from the positive X-axis

### `data-direction`
Matches the one of the eight principal winds — that is, the four cardinal directions (N, E, S, W) plus the four "intercardinal" or "ordinal directions" (NE, SE, SW, NW), at angles of difference of 45°. The four cardinal directions, or cardinal points, are the four main compass directions: north, south, east, and west, commonly denoted by their initials N, S, E, and W respectively. Relative to north, the directions east, south, and west are at 90 degree intervals in the clockwise direction. The ordinal directions (also called the intercardinal directions) are northeast (NE), southeast (SE), southwest (SW), and northwest (NW).

### `data-release`
The attribute value is one of the eight points of compass rose with ordinal and cardinal directions: N, NE, E, SE, S, SW, W, and NW. Shows which point transitions from active to inactive state.

### `data-release`
The attribute value is one of the eight points of compass rose with ordinal and cardinal directions: N, NE, E, SE, S, SW, W, and NW. Shows which point transitions from inactive to active state.

### `data-force`
A float that represents the distance between the center and a vertex. This is a value between 0.0 and 1.0 when inside and above 1.0 when outside.


