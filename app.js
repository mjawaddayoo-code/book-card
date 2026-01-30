 const apiurl = 'https://api.codetabs.com/v1/proxy?quest=https://book.freeapi.me/';
    fetch(apiurl).then(res => res.json()).then(resp => {
        document.getElementById("image").src = resp.book.image;
        document.getElementById("book").innerText = resp.book.book;
        document.getElementById("author").innerText = resp.book.author;
        document.getElementById("description").innerText = resp.book.description;
        document.getElementById("date").innerText = resp.book.date;

    })