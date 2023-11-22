# Students Application System

Test application for managing fake applications made by students for universities

## intro

Please find notes below, detail on what the project is and how to use it

## Cloning and running the project

If using HTTPS run `git clone https://github.com/Burkes321/student-application-system.git` in your terminal

If using SSH run `https://github.com/Burkes321/student-application-system.git` in your terminal

`cd` into the project

Run `npm install` or `npm -i` at the root folder of the project to install all dependencies

run `npm run dev` at the root folder after installing dependencies. This project was made with vite so it should run on the default vite port of `5173`

## Routes

Login route -> find this at '/'

**you can login here using the fake user credentials at `Login.tsx:10`**

Registration route -> find this at '/registration'

Home route (application management system) -> find this at '/home'

All other routes lead to default vite 404 error

### Home

Shows a list of 50 applications which can be filtered using the filters at the top of the page, or sorted by clicking on the header of the cost and deadline columns. Filters gather their options from what is in the list for that particular field.

They are paginated by sets of 10, and you can switch between pages using the pagination component.
