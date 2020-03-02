# Full Stack Application Using Spring Boot, React, Redux and Material-Ui 

Full Stack Application using Spring boot, React, Redux and Material-Ui

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes. See running for notes on how to run the project on a system.

### Prerequisites

1. Clone the project to your local environment:
    ```
    git clone https://github.com/ankitrajput0096/FullStack_SpringBoot_ReactRedux_MaterialUI_App
    ```
2. You need maven installed on your environment:

    #### Mac (homebrew):
    
    ```
    brew install maven
    ```
    #### Ubuntu:
    ```
    sudo apt-get install maven
    ```

3. You need npm to be installed:

    #### Get npm from here:
    ```
    https://www.npmjs.com/get-npm
    ```

### Installing

Once you have maven and npm installed on your environment, install the project dependencies via:

1. Using terminal, go into `react_app` folder and perform these actions:

    #### Installing dependencies:

    ```
    npm install
    ```

    #### To Bundle App for Prod Environment:

    ```
    npm run start
    ```

2. Using terminal, go into `springboot_app` folder and perform these actions:

    #### Installing dependencies:

    ```
    mvn install
    ```

## Running

#### 1) Using terminal, go into `react_app` folder and perform these actions to run front-end application:

1. Start App in Dev Environment:

   ```
   npm run dev
   ```

   Your application should be now running on http://localhost:9000


2. Start App in Prod Environment:

   ```
   npm run prod
   ```

   Your application should be now running on http://localhost:8082

#### 2) Using terminal, go into `springboot_app` folder and perform these actions to run backend application:

   Run the application from the `Application.java` main method directly,
   or from a command line:

   ```
   mvn spring-boot:run
   ```

   Your server should be now running on http://localhost:8080


## Built With

* [React](https://reactjs.org/) - React
* [WebPack](https://webpack.js.org/) - WebPack
* [Babel](https://babeljs.io/) - Babel
* [Express](https://expressjs.com/) - ExpressJS
* [Redux](https://redux.js.org/) - Redux
* [Material-Ui](https://material-ui.com/) - Material-Ui
* [Spring Boot](https://spring.io/projects/spring-boot) - Spring Boot 2
* [Maven](https://maven.apache.org/) - Dependency Management

## Contributing

If you have any improvement suggestions please create a pull request and I'll review it.


## Authors

* **Ankit Rajput** - *Initial work* - [Github](https://github.com/ankitrajput0096)

## License

This project is licensed under the MIT License

## Acknowledgments

* Big thanks to facebook for React and Pivotal for Spring Boot framework.
