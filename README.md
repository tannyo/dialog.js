# jQuery plugin to create modal dialogs.

I needed to create modal dialogs and forms such as alert, confirm, contact us, and login. I didn't want to use Bootstrap's built in dialogs.

## Usage

    <script src="path/to/dialog.js"></script>

## dependencies

jQuery

## Method Syntax

### $.dialog.open(name)

**name**

String. Name of template file to open.

### $.dialog.close(name)

**name**

String. Name of template file to close.

### $.dialog.alert(msg)

**msg**

String. Message to display.

### $.dialog.confirm(msg[,options])

**msg**

String. Message to display.

**options**

Object.

    {
      ok: "Text of OK button"
      cancel: "Text of Cancel button"
      option: "Text of optional button" - goes to the left of the Cancel button. The text of the button is returned in the onClose method if clicked.
    }

### $.set(settings)

**settings**

Object.

    {
      path: "",
      extension: ".html",
      replace: true,
      blocker: '<div class="blocker fade"></div>',
      confirm: {
        option_btn_start: '<button class="btn btn-default option" type="button">',
        option_btn_end: '</button>',
        option_btn_class: 'option'
      }
    }

* **path** - String. Path to dialog template files. This is prepended before the name of the dialog.
* **extension** - String. Extension of template file. This is added after the name of the dialog.
* **replace** - Boolean. If true replace the contents of the dialog each time it is displayed. If false, retain the contents of the dialog.
* **blocker** - String. Template of blocker element that contains the dialog.
* **confirm** - Object.
  * **option_btn_start** - String. Template of option button. Use when you want 3 buttons on a confirm. This is the third button on the left.
  * **option_btn_end** - String. Template of the end of the option button element.
  * **option_btn_class** - String. Used to search for the option button to add or remove click behavior. Also used to remove the button if replace is set to false.

## Promise Methods

### .onOpen(function(element){})

Calls passed function with the blocker element as the argument.

### .onClose(function(element){})

Calls passed function with the blocker element as the argument.

### .onClose(function(boolean or text of optional button){})

Confirm only. Calls passed function with a boolean or string argument denoting the button the user clicked.

* True if the user clicked the OK button.
* False if the user clicked the Cancel button.
* The text of the option button if the user clicked the option button.

### .autoClose(msecs)

**msecs**

Number. Milliseconds to wait before closing the dialog. By default the dialog will stay open until the user clicks the button.
 
## How it Works

It creates a div with the class of "blocker fade" at the end of the body. It gets a file by name that ends in ".html" and adds it to the blocker div. When shown it adds the "in" class to the blocker div. It then calls onOpen function where you can add behavior to the dialog. The onClose method allows you to remove any event handlers and respond to a confirm dialog.

## Browser Support

Tested in the latest versions of Chrome, Firefox, Safari, IE 5.5 - 11, iOS, and Android.

## Issues

Have a bug? Please create an [issue](https://github.com/tannyo/dialog.js/issues) here on GitHub!

## Contributing

Want to contribute? Great! Just fork the project, make your changes and open a [pull request](https://github.com/tannyo/dialog.js/pulls).

## Changelog
* v0.10 12 Sep 2014 TKO Created by Tanny O'Haley

## License

The MIT License (MIT)

Copyright (c) 2014 [Tanny O'Haley](http://tanny.ica.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

