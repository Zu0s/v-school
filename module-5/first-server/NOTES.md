# Intro to Express

    # Initialize a new node project
        - npm init -y
 
        -npm install <dependencies>

    # Vocab

        # Route
            *An event listner for http requests

        # Endpoints
            * "/item" "/user"

        # Port
            * localhost:9000

    # Intro to REST API architecture

        # REST - Representtional State Transfer
            endpoint should be what the data being recieved is

        # Resourece - Single item (object) in a database
            /user/sakjh1kjhsfai

        # Collection -  A collection of similar items in a database
            /users

        # Base (root) URL - http://amazon.com/

        # API Endpoint - http://amazon.com/movies/fafsfdw13

        # Parameters - /movies/:movieId

        # Query ( query string ) - /movies?genre=action&year=1999

        # Client - Frontend

        # Server - Intermediary

        # Request Method - CRUD - GET POST PUT DELETE

    # Middleware - a function that fires on the inbetween 

    # Request Body (req.body)

    # UUID - creates unqiue Ids

    #Express Router - Enables to modularize oure routes in express

    # Modular File Organization


    # Parts of a URL
        * Base - hhtp://amazon.com
        * Endpoint - http://amazon.com/images
        # Parameter - http://amazon.com/images/54684sd6g474
        # Query - http://amazon.com/images/

    # Parametetrs (req.params) - GET One

    # Query string - (typically to filter results)
        * Begins with the "?"
        * Built of key=value pairs.
        * Multiple queries seperated by the "&"

    # Middleware

        # What is this
            * app.use()
             1. (optional) - Mount Path ( Endpoint )
             2. Callback function - recieves the request, response objects, also the 'next' function

        # the 'next' function 
            # Moves on to the middlewarew in line on our server

    #Logger
        morgan - npm install morgan

    # Connecting the Front-end to the Back-end

        # Folder Structure
        # Proxy