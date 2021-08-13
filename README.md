# Getting Started with React Admin for ApiLogicServer

This is the source code for a React Admin app, generated by [APILogicServer](https://github.com/valhuber/ApiLogicServer). 

[View live demo!](https://apilogicserver.askteam.how/) 
(username is admin and password is p)

You can run it locally as described below in [Installation](#Installation).

# Background

API Logic Server introspects your database and creates customizable project from a single command:

```
ApiLogicServer run  # defaults to pre-installed sample database
```

ApiLogicServer creates the complete project below from your data model, including:
* **Models:** SQLAlchemy requires model classes; these are created automatically from the database
  * You can customize the model, e.g., [denormalizations](https://github.com/valhuber/LogicBank/wiki/Denormalization), [hybrid (virtual] attributes](https://github.com/valhuber/LogicBank/wiki/Denormalization), and [supply missing relationships](https://github.com/valhuber/LogicBank/wiki/Managing-Rules#relationships-db-or-virtual).
  
* [**API:**](https://github.com/valhuber/ApiLogicServer#api-safrs-jsonapi-and-swagger) a JSON:API, used by the react-admin app
* [**Logic:**](https://github.com/valhuber/ApiLogicServer#logic) spreadsheet-like transactional logic
  * 40x more concise than code, extensible with standard python
* [**UI:**](#multi-page-multi-table-application) multi-page, multi-table react-admin apps as shown below

Sample pages are shown below.  The [generated project is here](#generated-project).

# Multi-page, Multi-Table Application

Observe the following screens created from the [sample database](https://github.com/valhuber/ApiLogicServer/wiki/Sample-Database):

## Customer List

<figure><img src="https://github.com/valhuber/apilogicserver-react-admin-genned/raw/main/screen-shots/CustomerList.png"></figure>

## Customer Show

<figure><img src="https://github.com/valhuber/apilogicserver-react-admin-genned/raw/main/screen-shots/CustomerShow.png"></figure>

## Order Show

<figure><img src="https://github.com/valhuber/apilogicserver-react-admin-genned/raw/main/screen-shots/OrderShow.png"></figure>

# Generated Project

The UI components includes a react-admin folder:

<figure><img src="https://github.com/valhuber/apilogicserver-react-admin-genned/raw/main/screen-shots/created-project.png"></figure>



# Installation

Before you install this react dashboard for APILogicServer, you need to have npm, node and yarn installed on your local machine. 

Use this website to install npm, node and yarn - [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

### `yarn install`
This will install all the dependencies listed within package.json.

### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\

## How to Get Support

Contact the developer meera.datey@gmail.com

