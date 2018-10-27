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

There are 6 macro areas to setup the entire flow before it will work.

1. Initial design of alexa skill with clear focus on utterances to accomplish this task
2. Enable AWS lambda system in the backend to intercept data from Alexa Voice Engine
3. Create plumbing to a push notification service to communicate with front end display which is usually a TV or computer for student or class room.
4. Local web server that has registered with push notification service to receive back-end data stream for further processing in the confines of cartesian coordinate system.
5. Integrate all 4 subsystems (Alexa Design/Engine, Lambda, Push Notification Service and Frontend display web server using html/css/Javascript)
6. I am using node.js for AWS lambda, html/css/javascript language to make my demo a reality


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


### Next Steps (Amazon Echo -or- Google Home -or- other voice enabled devices)

* I am still a high school student and would like to pursue automating this process using ML/NLP and generate code for display.
* The potential to scale and operate the service requires professional touch along with man power to make it industrial strength product for mass deployment.
* Multi-Language support, internationalizing the product requires sophisticated voice engine along with variants on input model that has strong correlation to spoken languages.
* Multiscreen devices exist and environments are different for interaction which brings in collaboration, conferencing and ability to broadcast solutions to groups 
* I do feel potential exist for this product for mainstream teaching community provided ML/NLP along with voice engines improve their offerings to scan books and convert them to code that can draw pictures from words beyond shapes alone.
* This will open up new markets for voice devices and become ubiquitous in teaching environments for visualizing problems and solutions.
* Imagine scanning books through ML scanner and generating JS scripts. One can store the output in Amazon S3 indexed by ISBN catalog as a repository for lamda engines to interact with httpserver. *Amazon can make this a free offering to schools worldwide.*


