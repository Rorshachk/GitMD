# GitMD

GitMD is a Markdown Note-taking app based on Git version control and Github as cloud storage. The front-end is written in React.js and Ant Design, while the backend is written in Rust and Tauri.

## Development Guide

To build the project, you need to have **Rust, Node.js, and npm/yarn** installed.

First, clone this repository:

`git clone https://github.com/Rorshachk/GitMD.git`

Then, go GitMD folder and run:

`npm install`

This will install all the packages you need to run the application. After that, execute:

`npm run tauri dev`

The Tauri will build the application, and the React will open a new tab website in the browser. The website may crash because it doesn't have access to some of the invoked system API. Wait for a few minutes, Tauri will generate a Desktop Application like this:

[![https://imgur.com/u1DJudL.png](https://imgur.com/u1DJudL.png)](https://imgur.com/u1DJudL.png)

This is the basic layout of our application. The first left sidebar is for displaying all folders, and the second sidebar is for displaying all Markdown Files under the current folder. The bar above the Markdown Editor is used to show all the opened Markdown files.

You can find all the components & functions that need to be developed in [issues](https://github.com/Rorshachk/GitMD/issues). To start working on one issue, first, go to that issue and reply or assign that issue to yourself. Then, open a new branch called "dev" (or any name you like) and develop on that branch. Once finished, merge it to the main branch and push it to the repository (or create a pull request).

Some good references:

[Tauri Document](https://tauri.studio/en/docs/getting-started/intro) (pay close attention to JavaScript fs module and event)

[Ant Design](https://ant.design/components/overview/)

[Rust The Book](https://doc.rust-lang.org/book/)


