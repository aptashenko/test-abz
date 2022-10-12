export function getToken() {
    const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/token'; 
    fetch(url)
        .then(resp => resp.json()).then(data => {
        console.log(data);
      })
}

export const fetchData = async (page) => {
    const resp = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=5`);
    const data = await resp.json();
    return data;
};
