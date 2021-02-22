/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import '@polymer/paper-card/paper-card.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-route/app-location.js';
class DashBoard extends PolymerElement {
  static get template() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet"></link>

      <style include="shared-styles">

        :host {
          display: block;

          padding: 10px;
        }
        #dash-board{
            width:100%;
            height:auto;
        }
        .paper-card-1,.paper-card-2{
            width:100%;
          }
          .dashboard-display-card{
            width:100%;
            padding:10px;
            margin-right:10px;
            float:left;
          }
          .dashboard-display-card div{
            margin-right:15px;
            display:inline-block;
          }

          /* ----------------RESPONSIVE MEDIA QUERY  FOR TABLE AND THE PAPER CARD ----------------*/
          @media only screen and (max-width: 600px) {
            .mdc-data-table__table_edited{
              min-width:100%;
              white-space:none;
             }
            #display-flex div {
              display:flex;
            }
            paper-card{
              width:100%;
            }
            .mdc-data-table__table_edited {
              min-width: 100%;
              border: 0;
              white-space: none;
              border-collapse: collapse;
              table-layout: fixed;
              color:red;
          }

      </style>

      <app-location route="{{route}}"></app-location>

          <h2>Welcome to dash board</h2>
          <div id="display-flex">

      <paper-card class="dashboard-display-card" heading="Details" image="" alt="image">
        <div class="paper-card-display">
          <paper-card heading=""  alt="Sailboat Harbor" class="white">
              <div class="card-content">Number of people vaccinated 20 </div>
          </paper-card>
        </div>

        <div class="paper-card-display">
          <paper-card>
          <div class="card-content">Number of people Registered 5</div>
          </paper-card>
        </div>

        <div class="paper-card-display" >
          <paper-card>
          <div class="card-content">Number of Slots avaialbel 5</div>
          </paper-card>
        </div>

        <div class="paper-card-display" >
          <paper-card>
          <div class="card-content">Number of people not vaccinated 17</div>
          </paper-card>
        </div>

      </paper-card>
      </div>


        <!-------------------------- REGISTERED USER TABLE STARTS------------------>

      <paper-card heading="dashboard" id="dash-board">
      <paper-card class="paper-card-1" heading="Registered users 5"> 
      <table class="mdc-data-table__table_edited mdc-data-table__table">

        <thead>
          <tr class="mdc-data-table__header-row">
            <th class="mdc-data-table__header-cell ">No:</th>
            <th class="mdc-data-table__header-cell ">Name</th>
            <th class="mdc-data-table__header-cell ">Aadhar</th>
            <th class="mdc-data-table__header-cell ">Contact</th>
            </tr>
        </thead>

        <tbody class="mdc-data-table__content">
          
          <tr class="mdc-data-table__row">
            <td class="mdc-data-table__cell ">1</td>
            <td class="mdc-data-table__cell ">{{userData.userName}}</td>
            <td class="mdc-data-table__cell ">{{userData.aadhar}}</td>
            <td class="mdc-data-table__cell ">{{userData.phone}}</td>
          </tr>

          <tr class="mdc-data-table__row">
            <td class="mdc-data-table__cell ">2</td>
            <td class="mdc-data-table__cell ">Thamizh</td>
            <td class="mdc-data-table__cell ">5418 0794 4831</td>
            <td class="mdc-data-table__cell ">9447584369</td>
          </tr>

          <tr class="mdc-data-table__row">
            <td class="mdc-data-table__cell ">3</td>
            <td class="mdc-data-table__cell ">Naveen</td>
            <td class="mdc-data-table__cell ">3214 9854 8541</td>
            <td class="mdc-data-table__cell ">9547812248</td>
          </tr>

          <tr class="mdc-data-table__row">
            <td class="mdc-data-table__cell ">4</td>
            <td class="mdc-data-table__cell ">Uttej</td>
            <td class="mdc-data-table__cell ">4517 9467 5418</td>
            <td class="mdc-data-table__cell ">2314587469</td>
          </tr>

          <tr class="mdc-data-table__row">
            <td class="mdc-data-table__cell ">5</td>
            <td class="mdc-data-table__cell ">Ramesh</td>
            <td class="mdc-data-table__cell ">5418 7854 5478</td>
            <td class="mdc-data-table__cell c">9874563210</td>
          </tr>
        
        </tbody>
      </table>
   </paper-card> 
   </div>
   <!--------------------------END OF REGISTERED USERS---------------------->
    <div class="display2 display parent-paper-card">
        <paper-card  class="paper-card-2"heading="Avalilable slots 5">
        <table class="mdc-data-table__table_edited mdc-data-table__table">

          <thead>
            <tr class="mdc-data-table__header-row">
              <th class="mdc-data-table__header-cell ">No:</th>

              <th class="mdc-data-table__header-cell ">Location</th>
              <th class="mdc-data-table__header-cell ">Date</th>
              <th class="mdc-data-table__header-cell ">Time Slots</th>
            </tr>
          </thead>

          <tbody class="mdc-data-table__content">
            
            <tr class="mdc-data-table__row">
              <td class="mdc-data-table__cell ">1</td>
              <td class="mdc-data-table__cell ">Pondicherry</td>
              <td class="mdc-data-table__cell ">25-02-2021</td>
              <td class="mdc-data-table__cell ">09:30 - 10:30 AM</td>
            </tr>

            <tr class="mdc-data-table__row">
              <td class="mdc-data-table__cell ">2</td>
              <td class="mdc-data-table__cell ">Mahé</td>
              <td class="mdc-data-table__cell ">26-02-2021</td>
              <td class="mdc-data-table__cell ">09:30 - 10:30 AM</td>
            </tr>

            <tr class="mdc-data-table__row">
              <td class="mdc-data-table__cell ">3</td>
              <td class="mdc-data-table__cell ">Yanam</td>
              <td class="mdc-data-table__cell ">28-02-2021</td>
              <td class="mdc-data-table__cell ">09:30 - 10:30 AM</td>
            </tr>

            <tr class="mdc-data-table__row">
              <td class="mdc-data-table__cell ">4</td>
              <td class="mdc-data-table__cell ">Karaikal</td>
              <td class="mdc-data-table__cell ">02-03-2021</td>
              <td class="mdc-data-table__cell ">09:30 - 10:30 AM</td>
            </tr>

            <tr class="mdc-data-table__row">
              <td class="mdc-data-table__cell ">5</td>
              <td class="mdc-data-table__cell ">Pondicherry</td>
              <td class="mdc-data-table__cell ">03-03-2021</td>
              <td class="mdc-data-table__cell ">01:45 - 02:45 PM</td>
            </tr>
          
          </tbody>
        </table> 

      </paper-card>

      <paper-card>
    `;
  }
 

}

window.customElements.define('dash-board', DashBoard);
