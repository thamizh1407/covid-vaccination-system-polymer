/**
 * @license

 */
import '@polymer/paper-button/paper-button.js';
import 'dile-date-without-calendar/dile-date-without-calendar';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-label/iron-label.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-radio-button/paper-radio-button.js';


import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js'

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
// import '@polymer/app-layout/app-drawer/app-drawer.js';
// import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
// import '@polymer/app-layout/app-header/app-header.js';
// import '@polymer/app-layout/app-header-layout/app-header-layout.js';
// import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
// import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';
import './slot-allotment.js';
// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyAdmin extends PolymerElement {
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




      </style>
      <style>
  body {
    background: #ccc;
    font-family: 'Roboto', sans-serif;
}
.mytabs input[type="radio"] {
    display: none;
}

.mytabs .tab {
    width: 100%;
    padding: 20px;
    background: #fff;
    order: 1;
    display: none;
}
.mytabs .tab h2 {
    font-size: 3em;
}

.mytabs input[type='radio']:checked + iron-label + .tab {
    display: block;
}

.mytabs input[type="radio"]:checked + iron-label {
    background: #fff;
}


/*----------------------------------dashboard css----------------------------*/
.dashboard-display-card{
  display:flex;
}
.paper-card-display{
  padding:10px;
}
.card-content{
  padding:10px;
}
/* --------------------------------------table css-----------------------*/
.mdc-data-table {
  background-color: #fff;
  background-color: var(--mdc-theme-surface, #fff);
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0,0,0,.12);
  -webkit-overflow-scrolling: touch;
  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow-x: auto;
}

.paper-card-1,.paper-card-2{
  width:100%;
}
.parent-paper-card{
  overflow-x: auto;
}
.dashboard-display-card{
  margin-bottom:15px;
}
.buttons paper-button{
  padding:10px;
  background-color:#eeeeee;
  margin-top:10px;

}
.buttons{
  margin-left:15px;
}


@media only screen and (max-width: 600px) {
  .buttons paper-button {
    display:flex;
    width: 52%;
    padding: 12px;
    margin: 19px;
    text-align:center;
  }
  #background-image{
    max-width:100%;
    height:auto;
  }
}
#background-image{
  background-image: url('https://wallpaperaccess.com/full/16668.jpg');
  height:1000px;
}




</style>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
      <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet"></link>

      <app-location route="{{route}}"></app-location>

      <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <!-- App route ends  -->
      <div id="background-image">
      <div class="buttons">
        <paper-button toggles raised on-click="navigateToSlotAllotment" class="green">Slot Allotment</paper-button>
        <paper-button toggles raised on-click="navigateToVaccinationFlag" class="green">Vaccination Flag</paper-button>
        <paper-button toggles raised on-click="navigateToHealthcare" class="green">Health Care Slot Allotment</paper-button>
        <paper-button toggles raised on-click="navigateToDashboard" class="green">Dashboard</paper-button>
        <paper-button toggles raised class="blue" on-click="navigateToHome" >Logout</paper-button>
      </div>
      </div>





    `;
  }
  

  static get properties() {
    return {
      userData:{
        type:Object,
        value:{},
        notify:true
      }
    };
  }

  navigateToSlotAllotment(){
    this.set('route.path','slot-allotment');
  }
  navigateToVaccinationFlag(){
    this.set('route.path','vaccination-flag');
  }
  navigateToHealthcare(){
    this.set('route.path','health-care');
  }
  navigateToDashboard(){
    this.set('route.path','dash-board');
  }

  



slotAllot(){
  console.log("slot allot");
  this.set('route.path','/view3')
}
navigateToHome(){
  this.set('route.path','my-login');
}


}

window.customElements.define('my-admin', MyAdmin);
