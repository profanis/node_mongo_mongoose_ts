## n-tier architecture with node.js - express - mongo and mongoose

### Prensetation Layer

* Controllers
    
    The code of the routes/endpoints. This layer is dumb and should not have any logic. If needed could orchestrate multiple services. 

    _knowledge of: payloads_

* Payloads

    It has the structure of the json that we should return on our api calls.
    
    _knowledge of: payloads_

### Business Layer
* Services

    All the business logic belongs here

    _knowledge of: payloads, models_

### Data Layer
* Models

    This is the database layer. We should define here the schemas of our mongo documents
    
    _knowledge of: models_
* Repos

    It has the code that is reponsible to communicate with the database

    _knowledge of: models_

### Common

* Mappers

    _knowledge of: payloads, models_


**Note:** The **_"knowledge of:"_** is very important as it has a clear separation of concern (SoC) which makes the code easier to extend, maintain.