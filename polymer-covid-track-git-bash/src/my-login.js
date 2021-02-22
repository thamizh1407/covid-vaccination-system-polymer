/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// import '@polymer/fooloomanzoo/datetime-picker.js'
import '@polymer/paper-drawer-panel/paper-drawer-panel.js';
import '@polymer/iron-label/iron-label.js';
import 'dile-date-without-calendar/dile-date-without-calendar';
import '@polymer/gold-cc-expiration-input/gold-cc-expiration-input.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-route.js';

import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/app-route/app-route.js';
import('./my-admin.js');
import '@polymer/app-route/app-location.js';

import '@polymer/iron-image/iron-image.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-button/paper-button.js';
class MyLogin extends PolymerElement {
  static get template() {
    return html`
   
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

      </style>
      <app-location route="{{route}}"></app-location>   
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

<style>
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  }
  #background-attachment{
    background-image: url("../assets/images/covid-vaccination.jpg");
    background-repeat: none;
  }

#linear-gradient{
  background-image:linear-gradient( 
    284deg
     , #5dc9e4, transparent);
}

  /* Change background color of buttons on hover */
  .tab li:hover {
  background-color: #ddd;
  }
  
  


  /* -------------------------css for tab------------------------------- */






body{
  background-image: linear-gradient(
284deg
, #5dc9e4, transparent);
}

#form{
    margin-top:10px;
}

.form-control,.form-check{
    margin-bottom:15px;
}
#login-btn{
  
}
#submit-button{
    background-color:#009dc5;
}
.container{
    border: 0px solid rgb(205 216 235);
    border-radius: 5px;
    padding-right:0px;
    padding-left:0px;
}
#bharath-bio-logo{
    width:75px;

    max-width:100%;
    display:block;
    height:auto;
}
#vaccine-image-login{
        width: 100%;
        height: 358px;
        background-image: url("https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/09/06/Pictures/_b48727a8-f030-11ea-970b-cd9b3c0381e8.jpg");
}
#content-block{
    background-image: linear-gradient(#fdfdfd, #dfdfdf);
}
#offset-between{
    background-image: linear-gradient(#ffffff,#ffffff,#ffff,  #dbdbdb);
}
.errorMsg{
    color:red;
}




#login-form{
    background-image: url("https://vidhilegalpolicy.in/wp-content/uploads/2021/01/Trail-1600x900.jpg");
    background-position: fixed;
    
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 1s;
    height: 560px;

}



* {
  box-sizing: border-box;
}

/* -----------------footer------------- */
/* @media (max-width: 400px) {
  #copyright {
     text-align: center;
  }
  #social > div{
     display: block;
     width: 100%;
     margin: 0 auto;
     text-align: center;
  }
 } */



  :host {
    --app-primary-color: #4285f4;
    --app-secondary-color: black;

    display: block;
  }

iron-image {
    width: 400px;
    height: 400px;
    background-color: lightgray;
  }
  #content-block{
    background: lightblue url("https://vidhilegalpolicy.in/wp-content/uploads/2021/01/Trail-1600x900.jpg") no-repeat fixed center; 
    height:100%;
  }

  <!------------------------------------contact button style--------------------->
  #contact-button{
    font-size: small;
    width: 29%;
  }
  paper-card{
    width:100%;
  }
</style>

<link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">

      
<app-location route="{{route}}" url-space-regex="^[[rootPath]]">
</app-location>

<app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
</app-route>
<app-location route="{{route}}"></app-location>




<app-header fixed condenses effects="waterfall">

<!----------------------------APP HEADER CONSISTS  TITLE ---------------------->

  <app-toolbar>
    <div  main-title="">Covid vaccination tracking system</div>
    <div>
    <paper-button id="contact-button" toggles raised class="red" on-click="navigateToContacts" >Contacts</paper-button>
    </div>
  </app-toolbar>
</app-header>







<section id="login-form" class="col-md-12 pt-5">
<div class="wrapper ">
    <div id="login-cont" class="container">
        
        <paper-card>
                        <div class="col-lg-12 card m-0">
                <h5 class="">Login </h5>
                 <form  id="form"  autocomplete="off">
                    <div class="mb- form-">
                        <div class="label-layout">

                        </div>
                        <div class="div">
                            <paper-input value="{{Username}}"  required auto-validate error-message="fill firstname!"
                            type="text" name="username" id="username"  placeholder="Username" always-float-label label="Name"></paper-input>
                            <small></small>
                        </div>
                    </div>
    
                    <div class="mb-">
                        <div class="">
                        <paper-input value="{{Password}}"  required auto-validate error-message="fill Password!" type="password" id="password"  name="password" placeholder="Password  " always-float-label label="Password"></paper-input>
                        <small></small>
                        </div>
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" >
                        <iron-label for="foo">Remember me</iron-label>
                    </div>
                    <paper-button id="login-btn" type="submit" toggles raised class="red" on-click="navigateview2">Login</paper-button>
                    <paper-button id="login-btn" type="submit" toggles raised class="red" on-click="navigateToRegister">Register</paper-button>

                    </form> 
            </paper-card>

        </div>
    </div>

</section>



<footer>
    <div class="container-fluid  bg-light">
        <div class="row vcenter">
            <div class="pull-left col-lg-12 h-50 ">
                <p class="d-flex justify-content-center p-3">Copyright &copy;2021 by Thamizhmani</p>
            </div>
            <div class="col-lg-4 col-lg-offset-4 col-xs-12">
                <div class="pull-right">
                    <a href="#"><i class="fa fa-behance-square fa-icon"></i></a>
                    <a href="#"><i class="fa fa-linkedin-square fa-icon"></i></a>
                    <a href="#"><i class="fa fa-twitter-square fa-icon"></i></a>
                    <a href="#"><i class="fa fa-skype fa-icon"></i></a>
                    <a href="#"><i class="fa fa-facebook-square fa-icon"></i></a>
                    <a href="#"><i class="fa fa-github-square fa-icon"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>




 
    `;
  }
  
 



static get properties(){
        // <script type="text/javascript" src="../javascript/index-validation.js"></script>
        // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    
            return {
              page: {
                type: String,
                reflectToAttribute: true,
                observer: 'navigateview2'
              },
              userName: {
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
                notify:true
              }
            };
}
userDetails(){
  this.userData={
    "userName": this.userName,
    "aadhar": this.aadhar,
    "phone": this.phone
  }
  alert("Details submit");
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
    navigateToRegister(){
      this.set('route.path','my-register');
    }
    navigateview2(){
      //ckecking with condition
      if (this.Username=='thamizh' && this.Password =="123")
      {
        
  
      this.set('route.path','/my-admin')
      }
      else{
        alert("enter correct details" )
      }
    }
}





window.customElements.define('my-login', MyLogin);
