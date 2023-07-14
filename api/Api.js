

export async function getTime() {
    try {
        const response = await fetch('https://thsis456-2db1b1542ba9.herokuapp.com/api/getUserList');
        const json = await response.json();
        return json;

    } catch(error) {
        console.log('Error: ',error)
    }
}

