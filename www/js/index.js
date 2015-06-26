/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

        // Registro o evento
        document.addEventListener("online", this.online, false);
        document.addEventListener("offline", this.offline, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    checkConnection: function() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Sem conexão';
        states[Connection.ETHERNET] = 'Conexão Ethernet';
        states[Connection.WIFI]     = 'Conectado na WiFi';
        states[Connection.CELL_2G]  = 'Conectado ao 2G';
        states[Connection.CELL_3G]  = 'Conectado ao 3G';
        states[Connection.CELL_4G]  = 'Conectado ao 4G';
        states[Connection.CELL]     = 'Conexão generica';
        states[Connection.NONE]     = 'Nenhuma rede conectada';

        var div = document.getElementById("status");
        div.innerHTML = states[networkState];
    },

    online: function(){
        app.checkConnection();
    },

    offline: function(){
        var div = document.getElementById("status");
        div.innerHTML = "Estamos offline";
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        app.checkConnection();
        console.log('Received Event: ' + id);
    }
};
