const  allBooks = []
const  book1 = {
    title: "The gone with the winds", 
    author : "M.Mitchell",
    image  : "https://upload.wikimedia.org/wikipedia/en/6/6b/Gone_with_the_Wind_cover.jpg?20190923144515",
    alreadyRead : false
}

const  book2 = {
    title: "On the road", 
    author : "Jack Kerouac",
    image  : "https://upload.wikimedia.org/wikipedia/en/8/8a/OnTheRoad.jpg",
    alreadyRead : true
}
allBooks.push(book1, book2)

console.log('allBooks', allBooks)

const table = document.createElement("table")
table.innerHTML = `
<thead>
<tr>
<th>Book List</th>
</tr>
</thead>
<tbody>
<tr>
<td>${book1.title} written my ${book1.author}</td>
<td>
<img src="${book1.image}"/>
</td>
<td>If is is read: ${book1.alreadyRead}</td>
</tr>
<tr>
<td class ="red">${book2.title} written my ${book1.author}</td>
<td>
<img src="${book2.image}"/>
</td>
<td>If is is read: ${book2.alreadyRead}</td>
</tr>
</tbody>
`
const Bookdiv = document.querySelector(".listBooks")
Bookdiv.appendChild(table)