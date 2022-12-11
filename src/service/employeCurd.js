export function addEmploye(data) {
    return new Promise((resolve, reject) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": data.name,
            "email": data.email
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch('http://sangita.iosx.in:9000/api/user/add', requestOptions).then((res) => {
            if (res.status === 200) {
                res.json().then(() => resolve(data))
            } else {
                reject(console.log('not post'))
            }
        })
    })
}

export function showEmploye() {
    return new Promise((resolve, reject) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "keyword": ""
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch('http://sangita.iosx.in:9000/api/user-search', requestOptions).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => resolve(data.data))
            } else {
                reject(console.log('not get'))
            }
        })
    })
}

export function updateEmployeData(data, id) {
    return new Promise((resolve, reject) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": id,
            "name": data.name,
            "email": data.email
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch('http://sangita.iosx.in:9000/api/user/edit', requestOptions).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => resolve(data.data))
            } else {
                reject(console.log('not get'))
            }
        })
    })
}

export function deleteEmploye(id) {
    return new Promise((resolve, reject) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch('http://sangita.iosx.in:9000/api/user/delete', requestOptions).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => resolve(data.data))
            } else {
                reject(console.log('not get'))
            }
        })
    })
}

export function detailsEmploye(id) {
    return new Promise((resolve, reject) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch('http://sangita.iosx.in:9000/api/user/details', requestOptions).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => resolve(data.data))
            } else {
                reject(console.log('not get'))
            }
        })
    })
}