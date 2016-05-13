flowchart
===
jQuery plugin for managing views in flowchart decision-tree type SPAs. Plays nice with Animate.css

Example page:

http://neeilan.github.io/flowchart/

##Set up in 3 steps



#### Some CSS homework

We want to hide all of our views or cards (which are defined by the `fc-card` class) by default, except for the initial view which has the `id` attribute of `fc-main`. We also want to hide the home (`fc-home`) and back (`fc-back`) buttons by default:

    .fc-card {
       display: none;
    }
    #fc-main{
       display: block;
    }
    #fc-home, #fc-back {
        display: none;
    }
 ### 1. Define your views with the `fc-card` class and `fc-main` id

Create your main HTML views -- usually by creating `<div>` elements -- for each *individual* view within your app. You don't need to create more than one version of a single view if several paths through the decision tree lead to it. (see __Common endpoints__ below). 

Any element with a `class` attribute of `fc-card` is treated as one of the views within your flowchart or decision tree. 

We can specify our main (initial) view by assigning it an `id` of __`fc-main`__. This is the first page in your flowchart-y application that the user will see. Based on what they select from inside this div, the next appropriate view will be rendered.


    <div class = "fc-card" id="fc-main">
        Welcome to flowchart, pick an option:
        ...
    </div> 


Unless specified, the element and it's children will not be affected. Here is an example of a view:

    <div class= "fc-card" id="CY">
        You answered "Yes" to question 1. Now answer Yes, No or Maybe to this question.
        <button class = "fc-btn" id="BYY">Yes</button>
        <button class = "fc-btn" id="BYN">No</button>
        <button class = "fc-btn" id="BYM">Maybe</button>
    </div>

### 2. Map buttons to views with `fc-btn` class and ids
Like `fc-card`. `fc-home` and  `fc-back`, any clickable HTML element, such as an image or even font icons via an `<i>` tag, will work as a "button" within the page.
Mapping a button to a `fc-card` consists of two steps:

1. Set the `id` attribute of the button as __B<*id of choice*>__
2. Set the `id` attribute of the target card __C<*id of choice*>__

__This is an important step__ as, for example, a `fc-btn` with an `id` of __BOption3__ will map to the `fc-card` specified with the __COption3__ id. 

Note that while the *B* preceding the `fc-btn` id is simply present as a safety measure (the first character is simply removed when the click is handled), the *C*  prefix on `fc-card` ids are crucial for mapping.

That is, multiple `fc-btns` can map to a single `fc-card` by specifying the same `id` attribute, but each card should have a unique identifier.  


### Assigning `id` attributes effectively
Other than the `#fc-main` view which is mandatory, all mapping within your flow chart is done by assigning `id` attributes as you wish. You have almost complete freedom when it comes to naming them to best suit your needs, but in larger trees, it can be easy to reuse or lose track of identifiers. A general format for naming buttons and cards (views) is:

    ___B or C___  +  (response to first card) + (response to second card) + ... + (response to Nth card)

For example, if a user has to click the second `fc-btn` on `#fc-main`, the third `fc-btn` on the resulting view, and the first `fc-btn` on the subsequent view in order to arrive at a certain card, it would be logical to name it `#C231`.
Similarly, the `.fc-btn` that had to be clicked in order to arrive at this view would logically be named `#B231`.

### 3. Define Home and Back buttons
Functionality for `onclick` events on two special elements to work as the __Home__ and __Back__ buttons comes built in. These are usually `<a>` or `<button>` elements, but any clickable HTML element will work.
   
1. Home button is defined by setting the `id` attribute on the element to `fc-home`
2. To define the back button, set the `id` attribute to `fc-back`


### Common endpoints in a flowchart
Sometimes, several pathways through a flowchart may lead to a commonly used resource. In this case, rather than creating multiple views holding the same content, we can give it a descriptive name such as `#COurProductPage` and have any `.fc-btn` mapping to it have an `id` attribute of `#BOurProductPage`.  


### Optional: enable Animate.css
Animate.css requires that `animated` be one of the class attributes of any element to be animated. If you want to enable entry/exit animations on a `fc-card` view, ensure that the right classes are included:

`<div class = "fc-card animated" id="Cchoices"> ... </div>`

You can then supply any [Animate.css effects]('https://github.com/daneden/animate.css') for entry and exit as string parameters during initialization:


    //$(element).fc(InEffect, OutEffect, Delay)

    $(document).ready(function(){
        $("body").fc("fadeIn","fadeOut",600);
    });
    
Note that `Delay` refers to the delay between a click and the specified card appearing, not the animation duration, which is instead set through your CSS stylesheet.

