# fullstackopen-part0-exercises

## Exercise 0.4
The user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the submit button.

The sequence of events that occurs is depicted below.

```mermaid
sequenceDiagram
    participant client
    participant server
    
    
    client->>server: POST 302 https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>client: input value is saved to the data
    deactivate server
    
    
    client->>server: GET 304 https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>client: new note appears at the bottom of the list
    deactivate server
    
    
    client->>server: GET 304 https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>client: JavaScript is loaded
    deactivate server
    
    client->>server: GET 200 https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>client: json array of objects is retrieved and populates the page
    deactivate server
```
