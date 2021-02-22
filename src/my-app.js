/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import '@polymer/paper-toolbar/paper-toolbar.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/app-route/app-route.js';
import '@polymer/app-route/app-location.js';


import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">

        <!-- Drawer content -->


        <!-- Main content -->





          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-login user-data="{{userData}}" name="my-login"></my-login>
            <my-admin user-data="{{userData}}" name="my-admin"></my-admin>
            <my-view3 name="my-view3"></my-view3>
            <my-contacts name="my-contacts"></my-contacts>
            <slot-allotment name="slot-allotment" ></slot-allotment>
            <vaccination-flag name="vaccination-flag"></vaccination-flag>
            <health-care name="health-care"></health-care>
            <dash-board user-data="{{userData}}" name="dash-board"></dash-board>
            <my-register user-data="{{userData}}" name="my-register"></my-register>
            <my-view404 name="view404"></my-view404>

          </iron-pages>


      </app-drawer-layout>




    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: false,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object,
      userData:{
        type:Object,
        value:{}
      }
    };
    
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

 





  _routePageChanged(page) {   
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'my-login';
    } else if (['my-login', 'dash-board','health-care','vaccination-flag', 'my-view3','my-admin','my-contacts','my-about','my-register','slot-allotment'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    
    // Close a non-persistent drawer when the page & route are changed.
  
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'my-login':
        import('./my-login.js');
        break;
      case 'my-admin':
        import('./my-admin.js');
        break;
      case 'my-view3':
        import('./my-view3.js');
        break;
      case 'my-contacts':
        import('./my-contacts.js');  
        break;
      case 'my-register':
        import('./my-register.js');  
        break;  
      case 'slot-allotment':
        import('./slot-allotment.js');  
        break;  
      case 'vaccination-flag':
        import('./vaccination-flag.js');  
        break;  
      case 'health-care':
        import('./health-care.js');  
        break; 
      case 'dash-board':
        import('./dash-board.js');  
        break;  
         

        
    
      case 'view404':
        import('./my-view404.js');
        break;

    }
  }
  navigateToView3(){
    this.set('route.path','my-view3');
  }

  navigateToContacts(){
    this.set('route.path','my-contacts')
  }
  navigateToAdmin(){
    this.set('route.path','my-admin')
  }

}

window.customElements.define('my-app', MyApp);
