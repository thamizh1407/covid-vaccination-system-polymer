/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import 'dile-date-without-calendar/dile-date-without-calendar';

import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-route/app-location.js';
class MyRegister extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        #paper-card{
          padding:20px; 
          width:100%;     
        }
        #paper-card > div{
            padding:10px;
        }
      </style>
      <app-location route="{{route}}"></app-location>

      <!---------------------------covid vaccination register form  start-------------------------->
     
        <paper-card id="paper-card" heading="Vacination Appoinment">
                            <div class="username">   
                                <paper-input value="{{userName}}"  required auto-validate error-message="fill Name!" always-float-label placeholder="Enter the username" label="Username"></paper-input>                    
                            </div>

                            <div class="gender">
                                  <div class="label-layout" id="">
                                      <label for="gender" class="Gender">Gender</label>
                                  </div>
                                <radio-group attr-for-selected="value" required auto-validate error-message="please Enter the gender">
                                    <paper-radio-button  value="male"  >Male</paper-radio-button>
                                    <paper-radio-button  value="female"  >Fe-Male</paper-radio-button>
                                </radio-group>
                            </div>
              
                            <div class="address ">
                              <div class="label-layout" id="">
                              </div>
                              <paper-input   required auto-validate error-message="fill City!" always-float-label placeholder="Enter the  Nearest Locality/Village" always-float-label placeholder="Enter the City" label="City"></paper-input>                    
                              <small>(Maximum 50 characters)</small>
                            </div>
                      
                          <div class="col-sm form-group">
                              <paper-input  required auto-validate error-message="fill Existing disease!" always-float-label placeholder="Enter the Existing disease" label="Existing Disease"></paper-input>                    
                          </div>		
      
                          <div class="col-sm ">
                              <label>Date of birth</label>
                              <dile-date-without-calendar value="" required auto-validate error-message="fill Date of birth!"></dile-date-without-calendar>
                              
                          </div>
                          
                          <div class="pincode ">
                              <div class="label-layout" id="">
                              </div>
                              <paper-input always-float-label value="{{phone}}" required auto-validate error-message="fill Mobile number!"  placeholder="Enter your mobile number"label="Mobile Number"></paper-input>                                               <small>(Mobile number must be 10 digit numbers)</small>
                          </div>	
      
      
                          <div class="pincode ">
                              <div class="label-layout" >
                              </div>
                              <paper-input always-float-label value="{{aadhar}}" required auto-validate error-message="fill Date of Aadhar number!" placeholder="Enter your Aadhar number"label="Aadhar Number"></paper-input>                                               
                              <small>(Aadhar number must be 12 digit)</small>
                          </div>	
      
      
      
       
                        <div class=" form-group ">
                          <div class="">
                              <paper-checkbox  required><small>Accept the terms and conditions<small></paper-checkbox>
                              <span  style="visibility: hidden;color:red" id="check-hobbie">Accept the terms and Conditions</span>
                          </div>
                          <label >
                            I certify that I am 18 years of age, I here by consent to the licenced health care provide, to share my health condition which will be used to determie my eligibility for receiving the COVID-19 vaccination.
                          </label>
                         
                        </div> 

                        <div id="paper-submit-button">
                            <paper-button toggles raised class="green" on-click="submitForm">Submit</paper-button>
                        </div>
      
        </paper-card>


    `;
  }


  static get properties(){
    // <script type="text/javascript" src="../javascript/index-validation.js"></script>
    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

        return {
          page: {
            type: String,
            reflectToAttribute: true,
          },
          userName: {                 // THE DATA IS STORED IN THE OBJECT USERNAME AND STORED GLOBALLY 
            type: String,
            },
          aadhar: {
            type: Number,
          
          },
          phone: {
            type: Number,
           
          },
          userData:{
            type:Object,
            value:{},
            notify:true     // BLOOEAN PROPERTY FOR TWO WAY BINDING 
          }
        };
}
submitForm(){
this.userData={
"userName": this.userName,
"aadhar": this.aadhar,
"phone": this.phone
}
alert("Details submited");
console.log(this.userData);
}


}

window.customElements.define('my-register', MyRegister);
