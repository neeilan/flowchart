flowchart
===
jQuery plugin for managing views in flowchart decision-tree type SPAs. Plays nice with Animate.css

Example page:

http://neeilan.github.io/flowchart/

##How it works

### Setting up the CSS


### The `fc-card` class
Any element with a `class` attribute of `fc-card` is treated as one of the views within your flowchart or decision tree. 
Unless specified, the element and it's children will not be affected. 

### Mapping buttons with `fc-btn`
Like `fc-card`. `fc-home` and  `fc-back`, any clickable HTML element, such as an image or even font icons via an `<i>` tag, will work as a "button" within the page.
Mapping a button to a `fc-card` consists of two steps:


1. Set the `id` attribute of the button as __B<*id of choice*>__
2. Set the `id` attribute of the target card __C<*id of choice*>__

__This is an important step__ as a `fc-btn` with an `id` of __BOption3__ will map to the `fc-card` specified with the __COption3__ id. 

Note that while the *B* preceding the `fc-btn` id is simply present as a safety measure (the first character is simply removed when the click is handled), the *C*  prefix on `fc-card` ids are crucial for mapping.

That is, multiple `fc-btns` can map to a single `fc-card` by specifying the same `id` attribute, but each card should have a unique identifier.  



### Defining Home and Back buttons
Functionality for `onclick` events on two special elements to work as the __Home__ and __Back__ buttons comes built in. These are usually `<a>` or `<button>` elements, but any clickable HTML element will work.
   
1. Home button is defined by setting the `id` attribute on the element to `fc-home`
2. To define the back button, set the `id` attribute to `fc-back`



### Optional: enable Animate.css
Animate.css requires that `animated` be one of the class attributes of any element to be animated. If you want to enable entry/exit animations on a `fc-card` view, ensure that the right classes are included:

`<div class = "fc-card animated" id="Cchoices"> ... </div>`

You can then supply any [Animate.css effects]('https://github.com/daneden/animate.css') for entry and exit as string parameters during initialization:


    //$(element).fc(InEffect, OutEffect, Delay)

    $(document).ready(function(){
        $("body").fc("fadeIn","fadeOut",600);
    });
    
Note that `Delay` refers to the delay between a click and the specified card appearing, not the animation duration, which is instead set through your CSS stylesheet.

