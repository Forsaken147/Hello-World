// Listen for form submission
document.getElementById('myform').addEventListener('submit', saveBookmark);


// Save Bookamrk
function saveBookmark(e) {
    // Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    
    if(!validateForm(siteName, siteUrl)){
        return false;
    }
    

    var bookmark = {
        name: siteName,
        url: siteUrl
    }
    /*
    // Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    */


    if(localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
       var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
       
       bookmarks.push(bookmark);
       localStorage.setItem('bookmarks', JSON.stringify(bookmarks));


    }
    
   
    //Prevents form from submitting
    e.preventDefault();
}

// Delete bookmark
function deleteBookmark(url){
    //Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

   // Loop throught bookmark
   for(var i = 0; i < bookmarks.length; i++){
       if(bookmarks[i].url == url){
           bookmarks.splice(i, 1);
       }


   
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   }

    
    
    //Clear form
    document.getElementById('myform').reset();



    // Re-fetch bookmarks
    fetchBookmarks();

    // Re-fetch bookmarks
    fetchBookmarks();
}

    // Fetch bookmarks
    function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
    // Get outputs id 
    var bookmarksResults = document.getElementById('BookmarksResults');

    // Build an outputs
    BookmarksResults.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        BookmarksResults.innerHTML += '<div class="well">'+
                                      '<h3>' +name+
                                      ' <a class="btn btn-default" target"_blank" href="'+url+'">Visit</a> ' +
                                      ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                      '</h3>';
                                      '</div>';
    }

}

function validateForm(siteName, siteUrl){
    if(!siteName || !siteUrl){
        alert('Please fill in the form.');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
}

return true;
}