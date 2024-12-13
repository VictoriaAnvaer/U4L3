async function getUsers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users/')
    let j = await response.json()
    return j
}

async function getPosts() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let j = await response.json()
    return j
}

async function getImages() {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos')
    let j = await response.json()
    return j

}

getImages()
.then((json)=>{
    let info3 = document.getElementById('data3')
    for (let i = 0; i<4; i++) {
        const photo = document.createElement('img');
        photo.src = json[i].thumbnailUrl
        info3.appendChild(photo);
    }
})


getUsers()
.then((json)=>{
    let info1 = document.getElementById('data1')
    for (let i =0; i<3; i++) {
        const user = document.createElement('div');
        const heading = document.createElement('h2')
        heading.innerHTML = "USER " + (i + 1)
        user.appendChild(heading);
        for (const property in json[i]) {
            if (!(property == 'address' || property == 'phone' || property=='company')) {
                const current = document.createElement('p')
                current.innerHTML = `${property}: ${json[i][property]}`
                user.appendChild(current);

            }
        }
        info1.appendChild(user);
    }
})
getPosts()
.then((json) => {
    let info2 = document.getElementById('data2')
    for (let i = 0; i < 10; i++) {
        const postContainer = document.createElement('div');
        postContainer.className = 'post';


        const heading = document.createElement('h2');
        heading.innerHTML = `Post ${i + 1}`;
        postContainer.appendChild(heading);

        for (const property in json[i]) {
            const current = document.createElement('p');
            current.innerHTML = `${property}: ${json[i][property]}`;
            postContainer.appendChild(current);
        }
        info2.appendChild(postContainer);
    }
});
