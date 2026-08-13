// // const GithubPage = document.querySelector("#Github-info")

// const githubApi = "https://api.github.com/users/ArbinBhasimaOfficial"
// fetch(githubApi, {
//     headers: {
//         Authorization: "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"
//     }
// })
//     .then((res) => {
//         return res.json()
//         // res.json().then(data => {
//         //     console.log(data)
//         // })
//     }).then((data) => {
//         const avatarurl = data.avatar_url
//         console.log(avatarurl)
//         const apiurl = data.url 
//         console.log(apiurl)
//         const githubUrl = data.html_url
//         console.log(githubUrl)
//         const followersCount = data.followers
//         console.log(followersCount)
//         const followingCount = data.following
//         console.log(followingCount)
//         const locationSelf = data.location
//         console.log(locationSelf)
//         const nameSelf = data.name
//         console.log(nameSelf)
//     })
//     .catch((err) => {
//         console.log(err)
//     })



// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //     .then(response => response.json())
// //     .then(json => console.log(json))
// //     .catch((err) => {
// //         console.log(err)
// //     })


// // json schema key starts with column 
// // json can be string array bool, number 
// body = document.querySelector("Body")

const getGitHubApi = "https://api.github.com/users/ArbinBhasimaOfficial"
fetch(getGitHubApi, {
    Authorization: "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"
}).then((res) => {
    return res.json
}).then((data) => {
    renderUI(data)
}).catch((err)=>{
    console.log(err)
})

function renderUI(data){
    const body = document.querySelector("body")
    avatar.alt = `${data.name}'s avatar`
    avatar.src = DataTransfer.avatar_url
    section.appendChild(avatar)
    section.appendChild(body)
    
}