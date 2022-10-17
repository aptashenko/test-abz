export const getToken = async () => {
    try {
        const resp = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token');
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchData = async (page) => {
    try {
        const resp = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`);
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getPositions = async () => {
    try {
        const resp = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`);
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const registrationUser = (token, data) => {
    const options = {
        method: 'POST',
        headers: {
            'Token': token,
        },
        body: data,
    }
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', options).then(resp => {
        return resp.json();
    }).then(data => {
        if (data.success) {
            console.log('we made it')
        } else {
            console.log('bad request');
        }
    }).catch(error => {
        console.log(error)
    })
}
