/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home': '&#xe900;',
            'house': '&#xe900;',
            'location': '&#xe947;',
            'map-marker': '&#xe947;',
            'location2': '&#xe948;',
            'map-marker2': '&#xe948;',
            'calendar': '&#xe953;',
            'date': '&#xe953;',
            'user': '&#xe971;',
            'profile2': '&#xe971;',
            'users': '&#xe972;',
            'group': '&#xe972;',
            'user-plus': '&#xe973;',
            'user2': '&#xe973;',
            'user-minus': '&#xe974;',
            'user3': '&#xe974;',
            'user-check': '&#xe975;',
            'user4': '&#xe975;',
            'user-tie': '&#xe976;',
            'user5': '&#xe976;',
            'airplane': '&#xe9af;',
            'travel': '&#xe9af;',
            'plus': '&#xea0a;',
            'add': '&#xea0a;',
            'minus': '&#xea0b;',
            'subtract': '&#xea0b;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
