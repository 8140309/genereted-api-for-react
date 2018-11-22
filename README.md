# genereted-api-for-react
 This is a genererated Web API wich runs on a Node.js server and uses MongoDB data.

 WARNING: Before proceeding to [Instalation](#Instalation) check the [config.js](config.js) file located in the root of the project.

 ## Table of Contents
 * [Instalation](#Instalation)
 * [Usage](#Usage)
	 * [Users](#Users)

 ## Instalation
 Install the modules
 ```
 npm install
 ```
 Start the server
 ```
 npm start
 ```

 ## Usage

 #### Users
 |HTTP Method|Path | Path Params | Query Params | Body Params |
 |:-------------:|-------------|:-------------:|:-------------:|:-----:|
 |GET| /api/users|None|None|None|
 |GET| /api/users/{id}|Id|None|None|
 |POST| /api/users|None|None|Collection Schema|
 |PUT| /api/users/{id}|Id|None|Collection Schema|
 |DELETE| /api/users/{id}|Id|None|None|