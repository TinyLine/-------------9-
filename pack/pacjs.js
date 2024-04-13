let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    function displayBookmarks() {
        const list = document.getElementById('bookmarkList');
        list.innerHTML = ''; 

        bookmarks.forEach((bookmark, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = bookmark;
            a.textContent = bookmark;
            a.target = "_blank";

            const editButton = document.createElement('button');
            editButton.textContent = 'Редагувати';
            editButton.addEventListener('click', () => editBookmark(index));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Видалити';
            deleteButton.addEventListener('click', () => deleteBookmark(index));

            li.appendChild(a);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            list.appendChild(li);
        });
    }

    document.getElementById('bookmarkForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const url = document.getElementById('bookmarkUrl').value;
        bookmarks.push(url);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        displayBookmarks();
        event.target.reset();
    });

    function editBookmark(index) {
        const newUrl = prompt('Введіть новий URL для закладки:', bookmarks[index]);
        if (newUrl) {
            bookmarks[index] = newUrl;
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            displayBookmarks();
        }
    }

    function deleteBookmark(index) {
        bookmarks.splice(index, 1);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        displayBookmarks();
    }

    displayBookmarks();