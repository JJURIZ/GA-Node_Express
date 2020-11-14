# GA-Node_Express
GA Intro to Express

## Creating a Node App
This guide assumes Node is already installed. To check for installation open the terminal (or command prompt) and type `node -v`. If a version of Node is not displayed, please follow the appropriate guide to [install Node](#installing-node) on your machine. 
- [ ] Create a git repo
- [ ] Clone repo to local machine
- [ ] Using terminal (or command prompt), navigate into the cloned repository
- [ ] Enter `npm init` or `npm init -y` if you do not want to add details to package.json during creation.
- [ ] If `npm init` selected follow the prompts and enter the relevant information. 
- [ ] Create a new file. In terminal, type `touch index.js`.
- [ ] Once complete, open your editor and navigate to the directory. 


## Testing
Now that you have successfully installed your Node application, let's test it out. 
- [ ] Open `index.js`.
- [ ] Type `console.log("this is my new node app")`
- [ ] From your terminal or command prompt session, type `node index.js`. 
- [ ] The text `this is my new node app` should appear in your terminal. 

## Importing and Exporting 
In order to use primitives, functions, or objects from one js file in another, they must be exported. 
Let's look at an example. 
In our file `operations.js` we hold functions to handle addition and subtraction.
```js
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
```
To use these functions inside of other files, we must export them. There are several ways to do this. One is including the word `export` before the variable or function name.

Another is to create an object of items intended for export. 
```js
module.exports = {
    add,
    subtract
}
```
Next, we must import into the other file. 
Using object destructing we can enter the following at the top of the file
```js
const { add, subtract } = require('./operations.js');
```
The above code allows us to use the functions `add` and `subtract` inside of `index.js`.

## Adding .gitignore
The easiest way to add a `.gitignore` file is to include it when creating a repository. 
When initializing the repository check the box by `Add .gitignore`. Under choose template select the appropriate files to ignore. For the current project search `node` and select it from the list. 

![gitignore](./assets/gitignore.png)

If the repository was initialized without a `.gitignore` file, simply create a file in the project directory with the name `.gitignore`. Open the file in your IDE and copy the conents from [this GitHub repository](https://github.com/github/gitignore/blob/master/Node.gitignore). 

As requested, here is a [link](https://github.com/JJURIZ/node_modules_practice) to my assignment from November 12th, 2020

# Express

## Express App Setup
For a more detailed steps, see the official documentation [here](https://expressjs.com/en/starter/installing.html).

### Prerequisite
Make sure Node is installed first.

## Installing Express
- [ ] Navigate to the app's working directory in terminal or command prompt
- [ ] `Create a Node app (see above)`
- [ ] From the command prompt type `npm install express`
- [ ] To ensure the install is successful, open the entry point (typically `index.js`)
- [ ] Enter the following code:
```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(8000, () => {
  console.log(`Server started!`)
})
```
- [ ] From the terminal type `node index.js`
- [ ] The browser should open displaying the text "Hello World!"
- [ ] NOTE: Installing and using [Nodemon](https://www.npmjs.com/package/nodemon) will continuously monitor the server and update when any changes are mode. To install nodemon from the terminal type `npm install -g nodemon`. The remainder of this tutorial will assume `nodemon` is running. 

## Creating Express Routes
Official routing documentation [here](https://expressjs.com/en/starter/basic-routing.html).

- [ ] Using the example above we have our initial route to the home page `app.get('/')`. 
- [ ] To create a route to an `About` page, enter the following after the home route:
```js
app.get('/about', function(req, res) {
    res.render('about')
})
```
- [ ] Add `/about` to the current browser address (localhost:3000). This generates a page with the text `about`
- [ ] Repeate the process above, changing the route path(text displayed after the `/`).

## Sending Text From Server to Client
As in our `Hello World` example above, text can be sent from the server to the client. This is the most basic instance of displaying text to the user, requiring no HTML. In order to send text, enter the following on any or all pages to display text:
```js
app.get(`/${yourPageHere}`, (req, res) => {
  res.send(`Your text goes here`)
})
```
The next method of sending text involves creating `JavaScript` files with stanard HTML tags. 
NOTE: It is not necessary to generate a full page template with a `<head>` tag and metadata. 
In this exmple the `about` data will be moved from the render method. 
- [ ] Create the file `about.js` in the root directory of the project. 
- [ ] Open the `about.js` file.
- [ ] Create an `h1` tag. Between the opening and closing tag enter text content. 
```html
<h1>You've reached the about page!</h1>
```
- [ ] Express renders the HTML in the JavaScript file. Navigating to `localhost:3000/about` displays the text `You've reached the about page!`


## View Templates
A superior way of rendering pages with Express is using template engines. There are many options for template engines, including `Pug`, `Handlebars.js`, and `EJS` (which will be used for the remainder of this file).
In order to use a template engine, it must be installed. The directions below are for `EJS`(Embedded JavaScript).
- [ ] Open a terminal or command prompt from within your project. 
- [ ] Enter `npm install ejs`
- [ ] Once complete it is recommended a `views` folder be created within the project.
- [ ] Within the `views` folder, a second directory, `partials`, should be created. 
- [ ] Exanding on our previous example with the `about` page, move `about.js` into the `Views` folder.
- [ ] Change the file extension from `.js` to `.ejs`
- [ ] In `index.js`, add the following line after the variable declaration at the top of the file:
```js
app.set('view engine', 'ejs')
```
- [ ] If `nodemon` was stopped, restart it at this time.
- [ ] In the browser go to `localhost:8000/about`
At this point the page looks the same.
Next we will create a 'partial' and extend it to several pages. 
- [ ] In the `partials` directory, create a file called `header.ejs`
- [ ] Enter the following HTML content:
```html
<header>
    <nav>
        <ul>
            <li>home</li>
            <li>about</li>
            <li>blog</li>
            <li>goes</li>
            <li>here</li>
        </ul>
    </nav>
</header>
```
- [ ] In the `about.ejs` file enter the following at the top of the page:
```js
<%- include('./partials/header.ejs')  %> 
```
- [ ] Reload the `about` page. I basic header menu will now appear. 
To read more about EJS, click [here](https://ejs.co/#docs).

The primary tags needed for EJS (called Scriptlet tags) are as follows:
```js
<% 'Scriptlet' tag, for control-flow, no output
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
```
All EJS tags must be closed with `%>`

## Using Variables in Template Engines
Another powerful aspect of template engines is the usage of variables to pass in information.
In the following example a variable will be declared and used within the `about` page.

- [ ] Using the scriptlet tag for control flow `<%` create a variable:
```js
<% const someText = "This is just some text!" %> 
```
- [ ] NOTE: JavaScript syntax rules must still be followed. In order to use the variable content we must place it after the variable declaration
- [ ] Below the `someText` variable, type the following:

```js
<%= someText %>
```
- [ ] This will print the contents of the `someText` content to the page. 
- [ ] NOTE: In order for the expression to be evaluated and displayed, the `<%=` scriptlet is used. 