# Azure Functions serverless Typescript template/boilerplate (for Visual Studio Code)

## Out of the box features

### Compile and run typescript serverless functions with one command

### Compile and run Typescript unit tests with one command

### Setup and run functions in 1 minute

### Super easy backend creation for Web Apps

### Includes "Hello, World!" examples for you to base your own functions from

### Visual Studio Code and Git hide and ignore the compiled Javascript files

This is a blank project setup for creating an Azure Functions serverless app using typescript. I find using Typescript functions a good solution for making an API backend easily and quickly for Angular web apps.

I have published it as it took me a while to get things set up with this environment and I thought it could help others make a quicker start.

It includes Visual Studio code settings that hide Javascript files, and a script that will automatically compile and run the typescript locally. Hitting F5 in Visual Studio code will also compile the Typescript before running the functions locally.

## Setup

Clone the repository and run the install command to download dev dependencies. (Jasmine, Typescript and the Azure Function core tools):

`npm install`

Running the functions will compile they typescript files and start the functions (Note that F5 will also do this in Visual Studio Code):

`npm run start`

These functions include Jasmine for writing unit tests. Any typescript files in the directory tree ending in spec.ts will be compiled and ran using the command:

`npm run test`

## Folder Structure

Each function is stored in its own folder in the base directory. Each function should consist of a function.json and index.ts that define the function. Looking at the simple examples should show you what these are for. The examples also contain an index.spec.ts file in each function folder that contains tests for the functions. When expanding this into a larger project you can create a shared folder in the base directory, or something similar, to keep helper/utility/shared TypeScript code.

Writing your own functions consists of just copying these folders and changing the code in index.ts.

The base directory also contains the config files for the scripts that run using npm.

## Visual Studio Code

This project contains a .vscode folder. The settings in it will hide compiled Javascript files, allow the functions to run on hitting F5, and suggest installing the Azure Functions extension to help in creating new functions and deploying your functions. Feel free to delete this folder should you not want to work using Visual Studio Code.

## Connecting to a database/filesystem/server storage

This is out of scope for this project, however, Microsoft has created a lot of good documentation for connecting your Functions backend to other Azure resources, such as storage and databases. Here is the documentation for connecting your Functions to a table storage resource for example:

https://docs.microsoft.com/en-us/azure/cosmos-db/table-storage-how-to-use-nodejs

In general, you can Google "Azure {resource} with Node" and find Microsoft documentation on how to set it up.
