async function getData() {
    // Simulate getting Data from a server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

// settle means resolve or reject 
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
    // Simulate getting Data from a server
    //   let x = fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    console.log(x)
    return 455
}

async function main() {

    console.log("loading modules");

    console.log("Do something else");

    console.log("Load Data")

    let data = await getData()

    console.log(data)

    console.log("process data")

    console.log("task 2");

}
main()

// data.then((data) => {
// console.log(data)

// console.log("process data")

// console.log("task 2");

// })

