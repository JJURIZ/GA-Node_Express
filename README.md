# GA-Node_Express
GA Intro to Express

## Creating a Node App
This guide assumes Node is already installed. To check for installation open the terminal (or command prompt) and type `node -v`. If a version of Node is not displayed, please follow the appropriate guide to install Node on your machine. 
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