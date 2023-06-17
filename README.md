# &lt;virtual-joystick&gt;
> Virtual Joystick Custom Element | Web Component | HTML Element | Vanilla Javascript

## Gist
Virtual Joystick is simple reusable, custom web element for touch-enabled user interfaces where the functionality is strongly encapsulated from the rest of the code.

<img src="/docs/phone.png" width="520px" src="Virtual joystick on a mobile phone" >

That's not even the best part, this component is library-agnostic which means it can be added to any JavaScript project irrespective of the framework/library.

The rotation angle is measured in both radians and degrees counterclockwise from horizontal, and measures the rotation of the primary axis from horizontal.

<img src="/docs/unit-circle-chart-degrees.svg" width="460px" src="Joystick unit circle chart" >

## Demo
Check out the [demo here](https://dondido.github.io/virtual-joystick/).
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

### Fixed
```html
 <virtual-joystick data-mode="fixed"></virtual-joystick>
```

<img src="/docs/Fixed.gif" width="400px" src="Fixed" >

### Semi
```html
 <virtual-joystick data-mode="semi"></virtual-joystick>
```

<img src="/docs/Semi.gif" width="400px" src="Semi" >

### Dynamic
```html
 <virtual-joystick data-mode="dynamic"></virtual-joystick>
```

<img src="/docs/Dynamic.gif" width="400px" src="Dynamic" >

### Locked X or Y Axis
```html
 <virtual-joystick data-lock="y"></virtual-joystick>
```

<img src="/docs/Lock.gif" width="400px" src="Locked" >

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

### Slotted Elements
```html
 <virtual-joystick>
  <div>...</div>
 </virtual-joystick>
```

<img src="/docs/Slotted.gif" width="400px" src="Slotted Elements" >

### Custom Size
```html
 <virtual-joystick></virtual-joystick>
```
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

