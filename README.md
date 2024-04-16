![App Image](https://project-images-bucket-1.s3.amazonaws.com/breath-image.png)

# Breathing Techniques Application

This is a **React-Node-Express-Postgres application** that provides various breathing techniques based on purpose, culture, duration, and difficulty.

## Installation

To install the application, make sure you have Node.js, npm and psql installed. Then, run the following command in order:

**Development**
```
npm install
npm run dev
npm run server
```

**Production**
```
npm install
npm run build
npm run start
```

## Reflection

**Design**

Designing this application took a bit of time. Since I did not have much information regarding breathing techniques, I had to do some research to get a deeper understanding of what they are enough so that I can break it down into pieces. Once I have that figured out, I started brainstorming about what the application is going to have and what it's going to look like. Once I have the structure all figured out, I started to think about what the visual design should look like. First, I asked ChatGPT to generate an image related to the application. It produced one that I liked and I based the color palette of the application on that image. Then, I started designing the components and put them together to build the main page and the website for the application.

**Setup and Implementation**

This is a mini application that is a part of a series I've been working on to hone my skills in full stack development. In this project, I'm able to bootstrap my own dev environment a lot faster. I struggled a bit trying to setup the backend and frontend to follow a modern module that uses import/export, etc. However, I was able to figure out, in the end. Cypress Testing was also introduced in this project for integration testing. I find it easier to work around with than Jest because of its visual tooling. It makes end-to-end and component testing easier to implement. Frontend is kind of my forte, so React components and all that was not too difficult to implement. The backend portion is pretty simple. The only slightly difficult part about it is the structure and the database connection setup with Knex. Besides that, it was not too hard to implement.




