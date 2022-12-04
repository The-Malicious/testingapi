export function getEmploye() {
    return new Promise((resolve, reject) => {
        fetch('http://sangita.iosx.in:9000/api/user-search', { method: 'POST' }).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => resolve(data))
            } else {
                reject({ messege: 'Data not found' })
            }
        })
    })
}

export function addEmployeData(employe){
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch('http://sangita.iosx.in:9000/api/user/add', { method: 'POST', body: JSON.stringify(employe), headers: myHeaders }).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => resolve({messege: 'successfully removed',data}))
            }else {
                alert('server problem')
            }
        })
    })
}

export function updateEmployeData(employe, id){
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch('http://sangita.iosx.in:9000/api/user/edit', { method: 'POST', body: JSON.stringify({"id":id,"name":employe.name,"email":employe.email}), headers: myHeaders }).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => resolve({messege: 'successfully removed',data}))
            }else {
                alert('server problem')
            }
        })
    })
}

export function deleteEmployeData(employe) {
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch('http://sangita.iosx.in:9000/api/user/delete', { method: 'POST', body: JSON.stringify({ "id": employe }), headers: myHeaders }).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => resolve(data))
            }else {
                alert('cant delete')
            }
        })
    })
}
