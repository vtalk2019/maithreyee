## Alexa Shapes - A prototype from Maithreyee Vatsan@Lynbrook High School

### Introduction 
We are always surrounded by objects that has shapes (e.g Circle, Rectangle, Square). There are approximately 20-25 popular geometric shapes. Amazon Alexa and Google Voice are Voice driven devices that align with one of the human sensory organs (ear). The 5 sense organs are eyes, ears, tongue, skin, and nose. What if we can enrich our interaction with shapes using eyes (for display) and ears (for feedback) and mouth for commanding Alexa? Alexa Shapes will show how the Amazon Alexa can be used to draw shapes and align with ISBN numbers for conics, shapes or any visual representation in cartesian coordinate system.

### An Amazon Alexa skill set to interact with Shapes in a classroom setting.

<img src="/images/ShapesLesson.png" alt="ShapeLesson"/>
<img src="/images/ArchitecturalDiagram2.png" alt="Architecture"/>

**Legend for Flow Diagram:**
1. User Input: the user speaks into Alexa device(s)
2. Sampled audio is sent to backend Alexa engine (client environment)
3. Alexa Voice Engine recognizes utterances and translates to Alexa Skill Design Equations 
4. Backend Lambda functions notifies the push communication service to httpserver. 
5. JS Client listening to push notification is woken up to process inbound message prior to html5 rendering

### Alexa Shape Interaction Model
The image below indicates the common utterance equation that has to be followed to interact with Alexa devices like Echo which are located in the classroom. This is the core Man-Machine interface and foundation for user interaction that has to be followed.

<img src="/images/EchoTalkIntentSampleUtterances1.PNG" alt="Shape Interactive Model 1"/>
<img src="/images/EchoTalkIntentSampleUtterances2.PNG" alt="Shape Interactive Model 2"/>


### Setup 

There are 3 macro areas to setup the entire flow before it will work.

1. Local (Client) http server using npm/node.js - This is where the html/js file reside for display. This file also registers with push notification server to receive backend commands/instructions. 
2. Alex skillset design - This is your skillset using Alexa deveoper console.
3. Backend Lambda that has to be uploaded and connected with Alexa skillset (Lambda to Alexa Skillset).

#### Http Server Setup

1. install npm
2. npm install http-server -g
3. http-server 
4. from browser, goto http://localhost:8080/mx3.html

#### Amazon Alexa Developer console

1. https://developer.amazon.com/alexa - Login with your credentials and load the shape.json file from this repo. Follow the instructions on how to setup skillset from a json file.

#### Specifications of the Project 

#### Business Model: How can we use this tool to our advantage?
We all know teaching or learning environments are generally quite and suitable for monologues specifically in classrooms.
Given artificial intelligence and Machine Learning engines are getting smarter, what if they can translate our ISBN books to direct code that draws those pictures and we can visualize them in classrooms. What if we can store all ISBN books in S3 storage and drive the entire flow based on book #, page # and problem # to index shapes and objects using alexa devices as input devices? With voice signatures for teachers and associating with classrooms, one can offer business solutions using subscription model to school districts and operate the service using lambda and alexa devices sprinkled in classrooms.

#### Amazon Lambda setup for Alexa Shape Lesson

1. ask_cli init
2. copy index.js file into custom/ directory
3. zip the entire directory
4. upload the zip file by creating lambda function from here: https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions - These are standard AWS lambda process and nothing fancy to get this working.


