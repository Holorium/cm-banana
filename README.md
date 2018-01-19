# cm-banana

Example project for a plugin project of https://github.com/Holorium/cm-core

# Instructions

Checkout https://github.com/Holorium/cm-core and call ```yarn link``` in the root directory of that repo. Afterwards, call ```yarn link collectors-management-core``` in this repo. 

# General plugin instructions

You need to use a webpack config inside the plugin with ```library: 'MyLibrary'``` and ```libraryTarget: 'jsonp'```. Inside the index.html of the plugin you must make sure that you have a script-tag included which looks like: ```<script type="text/core-plugin" data-name="MyLibrary" data-src="path/to/plugin/bundle"></script>```. If the main entry of the plugin exports a function, this function will be called after plugin initialization and will get an object of dependencies as arguments. 
