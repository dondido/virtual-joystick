# &lt;virtual-joystick&gt;
> Virtual Joystick Custom Element | Web Component | HTML Element | Vanilla Javascript

## Gist
Virtual Joystick is simple reusable, custom web element for touch-enabled user interfaces where the functionality is strongly encapsulated from the rest of the code.

![Alt text](/docs/phone.png "Virtual joystick on a mobile phone")

The rotation angle is measured in both radians and degrees counterclockwise from horizontal, and measures the rotation of the primary axis from horizontal.

![Alt text](/docs/unit-circle-chart-degrees.svg "Joystick unit circle chart")
## Demo
Check out the [demo here](https://dondido.github.io/virtual-joystick/).
## Usage
### Static
```html
 <virtual-joystick></virtual-joystick>
```
![Alt text](/docs/Static.gif "Static" | width=320)
### Semi
```html
 <virtual-joystick data-mode="fixed"></virtual-joystick>
```
![Alt text](/docs/Fixed.gif "Fixed" | width=320)
### Semi
```html
 <virtual-joystick data-mode="semi"></virtual-joystick>
```
![Alt text](/docs/Semi.gif "Semi" | width=320)
### Dynamic
```html
 <virtual-joystick data-mode="semi"></virtual-joystick>
```
![Alt text](/docs/Dynamic.gif "Dynamic")
