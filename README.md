# jQuery plugin to create modal dialogs.

I needed to create modal dialogs and forms such as alert, confirm, contact us, and login. I didn't want to use Bootstrap's built in dialogs.

## Usage

    <script src="path/to/dialog.js"></script>

## Dependencies

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
      ok: "OK",
      cancel: "Cancel",
      option: ""
    }

* **ok** - String. Text of OK button.
* **cancel** - String. Text of Cancel button.
* **option** - String. Text of optional button. If defined the option button goes to the left of the Cancel button. The text of the button is returned in the onClose method if clicked.

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

    I leave this blank because our site is in multiple languages. This allows me to have a translation of each dialog because the page translations are in sub-folders off the root folder. For folder names we use a combination of a 2 digit language code and 2 digit country code, **esmx** for Mexico, **eses** for Spain, **zhcn** for china, ...

    Leaving this blank will cause the dialog template file to be retrieved from the current path.
* **extension** - String. Extension of template file. This is added after the name of the dialog.
* **replace** - Boolean. If true replace the contents of the dialog each time it is displayed. If false, retain the contents of the dialog.
* **blocker** - String. Template of blocker element that contains the dialog.
* **confirm** - Object.
  * **option_btn_start** - String. Template of option button. Used when you want 3 buttons on a confirm dialog. This will be the third button on the left.
  * **option_btn_end** - String. Template of the end of the option button element.
  * **option_btn_class** - String. Used to search for the option button to add or remove click behavior. Also used to remove the button if replace is set to false.

## Promise Methods

### .onOpen(function(element){})

When the dialog opens, the passed function is called with the blocker element as the argument.

### .onClose(function(element){})

When the dialog closes, the passed function is called with the blocker element as the argument.

### .onClose(function(boolean or text of optional button){})

Confirm only. When the confirm dialog is closed, the passed function is called with a boolean or string argument denoting the button the user clicked.

* True if the user clicked the OK button.
* False if the user clicked the Cancel button.
* The text of the option button if the user clicked the option button.

### .autoClose(msecs)

**msecs**

Number. Milliseconds to wait before closing the dialog.

By default the dialog will stay open until the user clicks the button. This can be used to open a dialog, like an alert that doesn't require interaction from the user. Display the dialog long enough for the user to read it and then the dialog will automatically close. If the user reads faster than the time allotted for reading the dialog, the user can close the dialog before it is automatically closed by clicking the dialog button.

If used with the .confirm method, the onClose promise will pass false as its argument when the dialog automatically closes.
 
## How it Works

It creates a div with the class of "blocker fade" at the end of the body. It gets a file by name that ends in ".html" and adds it to the blocker div. When shown it adds the "in" class to the blocker div. It then calls onOpen function where you can add behavior to the dialog. The onClose method allows you to remove any event handlers and respond to a confirm dialog.

## Browser Support

Tested in the latest versions of Chrome, Firefox, Safari, IE 5.5 - 11, iOS, and Android.

## Notes

* This cannot be run from file:// because of ajax calls to get the dialog template files.
* This is not a full templating system like Angular, Mustache, Backbone, Handlebarsjs, or any one of the many available javascript templating systems. This plugin allows you to define a html file that is displayed as a dialog. There are certain classes that it expects for buttons and the message element for alert and confirm dialogs. It is good for displaying an alert getting a confirmation or for simple forms like a contact us form.
* The dialog-showme.html and dialog-showme.js files give some examples.

  You should not use it for web pages that need to be searched by search engines which is why it is perfect for alerts, confirmations, and simple forms.

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

