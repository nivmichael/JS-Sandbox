// Add element to body
function addElement(text) {
    // create a new div element
    const newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode(text);

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    document.body.appendChild(newDiv);

}

// Get a user, check for success, and log the data in json format
fetch('https://reqres.in/api/users/1')
    .then(res => {
        if (res.ok) {
            console.log('Success');
            return res.json()
        } else {
            console.log('Error');
        }

    })
    .then(data => console.log(data))

// Add new user to collection
fetch('https://reqres.in/api/users/1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'User 1'
        })
    })
    .then(res => {
        if (res.ok) {
            console.log('Success');
            return res.json()
        } else {
            console.log('Error');
        }

    })
    .then(data => {
        console.log(data)
        addElement(data.name)
    })