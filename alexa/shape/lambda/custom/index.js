"use strict";

var Alexa = require("alexa-sdk");

var APP_ID = "amzn1.ask.skill.YOUR_ALEXA_SKILL_APPID_COMES_HERE";

var Pusher = require("pusher");

var pusher = new Pusher({
        appId: "519283",
        key: "YOUR_PUSHER_KEY_COMES_HERE",
        secret: "YOUR_PUSHER_SECRET_COMES_HERE",
        host: "api.pusherapp.com",
        encrypted: true
    });

var languageStrings = {
        en: {
            translation: {
                WELCOME: "Lesson Bot bare.  I am a demo and trial for shapes",
                HELP: "Ask me anything",
                ABOUT: "This is a prototype of talking shapes",
                STOP: "Exiting shape skill",
                HELP: "Helping shape skill"
            }
        }
    };

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // context.callbackWaitsForEmptyEventLoop = false;
    // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';
    ///alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes
    alexa.appId = event.context.System.application.applicationId === "applicationId" ? "applicationId" : APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);

    alexa.execute();
};
var handlers = {
        LaunchRequest: function () {
            var say = this.t("WELCOME");

            this.emit(":ask", say, say);
        },
        Unhandled: function () {
            var say = this.t("HELP");

            this.emit(":ask", say, say);
        },
        AboutIntent: function () {
            this.emit(":tell", this.t("ABOUT"));
        },

        // DEFAULT INTENTS
        "AMAZON.YesIntent": function () {
            var say = "Nothing here.";

            this.emit(":ask", say);
        },
        "AMAZON.NoIntent": function () {
            this.emit("AMAZON.StopIntent");
        },
        "AMAZON.HelpIntent": function () {
            this.emit(":ask", this.t("HELP"));
        },
        "AMAZON.CancelIntent": function () {
            this.emit(":tell", this.t("STOP"));
        },
        "AMAZON.StopIntent": function () {
            this.emit(":tell", this.t("STOP"));
        }
    };

handlers.EchoTalkIntent = function (event, context, callback) {
    var say = "I am showing US ISBN from line. This is vatsan from Oath";

    var myJson = {
            number: "0"
        };

    var that = this;

    var slotString;

    myJson.actions = this.event.request.intent.slots.Actions.value;
    myJson.colors = this.event.request.intent.slots.Colors.value;
    myJson.shapes = this.event.request.intent.slots.Shapes.value;
    myJson.type = this.event.request.intent.slots.Type.value;
    myJson.location = this.event.request.intent.slots.Location.value;
    myJson.number = this.event.request.intent.slots.Number.value;
    slotString = JSON.stringify(myJson);
    pusher.trigger("my-channel", "my-event", {
        message: slotString
    }, function (error, req, res) {
        that.emit(":tell", say);

        return;
    });
    console.log("This is EchoTalkIntent logging with call back... ");
    console.log("JSON = ", myJson);

    // this.response.speak(say);
    // this.emit(':responseReady');
};

// this.event.request.intent.slots.FirstPerson.value
// Number, Actions, Colors, Shapes, Type, Location
