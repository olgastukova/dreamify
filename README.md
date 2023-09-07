# Dreamify

## Overview

This is a React application that allows users to store and manage a list of dreams. Users can add new dreams, mark them as completed, delete them, and get guidance on how to fulfill them using Chat GPT.


###Features

#### Home Page

- Users can see new dream ideas for inspiration(future functionality).
- Users can go to a dream List.

#### Dream List

- Users can log their dreams with a description and pictures.
- Users can change and delete dreams from the list or mark it as completed.

#### Dream Window

- Users can open any dream to delete it, mark as completed or call an AI assistant.

#### AI Dream Assistant

- An AI chatbot assists users in understanding and refining their dreams.
- The chatbot provides actionable steps to achieve dream-related goals.

#### Progress Tracking

- Users can track their progress on dream fulfillment plans.
- Milestones and achievements are recorded to motivate users in a list "Done".

### Tech Stack and APIs

- React.js, Sass, Express, JS
- MySQL
- GPT 3.5 turbo 


## Client-Side Implementation

### Site Map

#### Home

- Dream Page
  - Show the list
  - Show Done list
  - Add new items
  - Delete item
- Add dream
  - Search a picture
  -  Add a name of dream
  -  Add dream description
  -  Choose dream category
- Dream item
  - Use AI assistant
  -  Check items as done
  

### Server-Side Implementation

#### End-Point Descriptions

- **HTTP GET  dream-item**
  - Response Format
    ```
    { 
      dream-item : [ 
        { 
          Name : ‘STRING’, 
          done : TRUE/FALSE, 
          ID : NUMBER, 
          Description: ‘STRING’ 
        }, 
        Category: ‘STRING’
      ] 
    }
    ```
- **HTTP POST new dream-item**
  - Response Format
    ```
    { 
      new-dream-item : [ 
        { 
          Name : ‘STRING’, 
          done : TRUE/FALSE, 
          ID : NUMBER, 
          Description: ‘STRING’ 
        }, 
        Category: ‘STRING’
      ] 
    }
    ```
- **HTTP PUT dream-item**
  - Response Format
    ```
    { 
      dream-item : [ 
        { 
          Name : ‘STRING’, 
          done : TRUE/FALSE, 
          ID : NUMBER, 
          Description: ‘STRING’ 
        }, 
        Category: ‘STRING’
      ] 
    }
    ```
- **HTTP DELETE dream-item**
  - Response Format
    ```
    { 
      dream-item : [ 
        { 
          Name : ‘STRING’, 
          done : TRUE/FALSE, 
          ID : NUMBER, 
          Description: ‘STRING’ 
        }, 
        Category: ‘STRING’
      ] 
    }
    ```

#### External APIs

- GPT 3.5 turbo API https://platform.openai.com/docs/api-reference
- Unsplash API for pictures https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query

#### Database Structure
One table with data. Used MySQL.

id | dream_name | isDone | description | category   | image                                                                                                                                                                 
| 45 | Be a great software engineer |      1        | life goals | https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM3ODQ2NDJ8&ixlib=rb-4.0.

## Usage

1. Clone the repository:

```bash
Front-end:
git clone https://github.com/olgastukova/dreamify

For Back-end: https://github.com/olgastukova/dreamify

2. Install dependencies:
cd dreamify
npm install
npm i axios sass react-router-dom

For back-end: 
cd dreamify-api
npm install
npm i knex openai

3. Start the application:
npm start

For back-end: node index.js

##Contributing
If you'd like to contribute to this project, please follow these steps:

Fork the repository
Create a new branch (git checkout -b feature/your-feature)
Make your changes and commit them
Push to the branch (git push origin feature/your-feature)
Open a pull request

##Next steps

- Add categories.
- Add details to a dream description (time, cost, location).
- Add a user profile page.
- Add authentication.
- Make personalized dream suggestions using AI.
- Add “Share’ function.
- Add a functionality to check other users’ dream lists.
