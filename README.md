# RAE Tech Test

This repo contains a small technical challenge for RAE candidates. This project uses the following tech stack:

- `nestjs` for server implementation
- `react` for frontend framework
- `styled-components` for styling library
- `react-router` for client-side routing

### Setup

---

1. Clone the repository: `git clone https://github.com/Rose-Arch-Holdings-Ltd/rae-tech-test-2.git`
2. Run `cd server` in the terminal, then `yarn install` and `yarn start` to start the server.
3. In another terminal run `cd client`, then `yarn install` and `yarn start` to start the web client.
4. Access the project at http://localhost:1234/

### Tasks

---

_We will ask you to work through the following tasks whilst talking us through your code. If you get stuck feel free to ask for some help. Don't worry if we don't complete them all in the allotted time._

The end goal of these tasks is to grab some data from a `node` server, process it into the correct format, and render it in a `react` frontend. There are multiple pre-written sections of code to help guide you in completing the tasks. We have also included typings for various things to help you when filling in these pre-written sections.

1. Make the API call from the client in `/client/src/pages/student/index.tsx` \
   **a.** Get the student's ID from the URL and pass it into the `StudentService` call\
   **b.** Fix the API call in the StudentService: `/client/src/services/students.ts`

2. Get the data and return it from the backend. \
   **a.** Complete the `getAllResultsByStudentId` method found at `server/src/result/result.service.ts`. \
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**i.**&nbsp;&nbsp;&nbsp;Filter the results by student ID \
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**ii.**&nbsp;&nbsp;Get test name for each result using the `DataService` and format data into correct type \
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**iii.**&nbsp;Return the real data from the function \
   **b.** Return the real data in the correct format from `getSingleStudentData`

3. Save the response data in state

4. Render the student's details and their results in a similar format to the following: ![tech test designs](https://i.imgur.com/Fa3Ry6v.jpeg)
