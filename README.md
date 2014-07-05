#meteor-block-ui

Does just one simple job. Blocks the UI and show a spinner. There's that jquery-block-ui plugin available, but I didn't like it. So here is my first and simplest meteor plugin.

## Installation
You should be using meteorite. 
```sh
mrt add block-ui
```

## Usage

###BlockUI.block()

Blocks the UI and shows a spinner

###BlockUI.unblock()

Unblocks the UI

## Configuration
Only two options to configure. Call this anywhere in Client code:

```javascript
BlockUI.configure({
  spinnerStyle: "background-color:#f26",  //this will change the default color of spinner. You can add more styles of course
  spinnerTemplate: "block_ui_spinner_twin_circles"  //this will change default spinner template
});
```

## How do I change the style?
It's all CSS baby. So change the css, and have the glory. Inspect with dev-tools to see which properties should change.

## Custom Spinners
This package provides two spinners by default from the [spin-kit](http://tobiasahlin.com/spinkit/),

* `block_ui_spinner_flipping_rectangle` (default)
* `block_ui_spinner_twin_circles`

Why only two? I didn't want to add more lines of code just to add fancy stuff to my simple package. You know meteor contacts all the code and css, so it's better to have only what you need.  

Adding new templates is very easy. Just create a template with whatever name, and provide it in `spinnerTemplate` configuration option. To make `spinnerStyle` config option work with your template, you'll need to create a `spinnerStyle` helper for your custom spinner template, and add this line to the HTML node to which you want to add the style: `style={{spinnerStyle}}`. Read template.js and template.html for reference, it's really simple code.
