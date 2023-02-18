# fullstackopen-part0-exercises

## Exercise 0.4
The user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the submit button.

The sequence of events that occurs is depicted below.

```mermaid
sequenceDiagram
    participant client
    participant server
    client->>server: 1. user input in form field 
    client->>server: 2. submit button clicked 
    client->>server: 3. form performs action be using POST method to /new_note directory (address)
    server-->>client: 4. the note is added to the page
    Note over server, client: and redirects the user back to the /notes address with the updated entry included
```
