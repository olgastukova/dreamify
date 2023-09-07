# Dreamify

## Description

Dreamify is a platform where user can store his dreams, receive guidance on its realization and get inspiration. 

### Problem

Most people have dreams and aspirations but shelve them because it feels complicated and time-consuming to fulfill them. Meanwhile, lots of dreams can come true this year or even this week! Dreamify addresses this by combining dream-journaling and AI-powered assistance. It eliminates the frustration of not knowing where to start or how to proceed, making the pursuit of dreams more achievable and fulfilling.

### Requirements: Use Cases and Features

#### Home Page

- Users can see new dream ideas for inspiration.
- Users can go to a dream List.

#### Dream List

- Users can log their dreams with a description and pictures.
- Users can change and delete dreams from the list or mark it as completed.

#### Dream Window

- Users can open any dream to change it, delete, mark as completed or call an AI assistant.

#### AI Dream Assistant

- An AI chatbot assists users in understanding and refining their dreams.
- The chatbot provides actionable steps to achieve dream-related goals.

#### Progress Tracking

- Users can track their progress on dream fulfillment plans.
- Milestones and achievements are recorded to motivate users.

### Tech Stack and APIs

- React.js, Sass, Express, JS
- MySQL, GPT 3.5 turbo

## Client-Side Implementation

### Site Map

#### Home

- Dream List
  - Show the list
  - Add new items
  - Delete item
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

- ChatGPT 3.5 turbo
- Unsplash API

#### Database Structure
One table with data. Used MySQL.

id | dream_name | isDone | description | category   | image                                                                                                                                                                 
| 45 | Be a great software engineer |      1        | life goals | https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM3ODQ2NDJ8&ixlib=rb-4.0.



## Project Roadmap

### Phase 1


Goal

1. Build React App overall structure and high-level components and design models
2. Create database
3. Define all Endpoints in express
4. Implement functionality of endpoints - create JSON response and verify endpoint responses
5. Hook up to database
6. Connect endpoints to Chat GPT
7. Connect smart components to end-point APIs
8. Test/debug end-to-end functionality of app
9. Implement CSS/Styling 
10. Code Clean up, last minute testing/debugging
11. DEMO DAY

### Phase 2

- Add categories.
- Add details to a dream description (time, cost, location).
- Add a user profile page.
- Add authentication.

### Phase 3

- Make personalized dream suggestions using AI.
- Add “Share’ function.
- Add a functionality to check other users’ dream lists.
