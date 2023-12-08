import React, { useState } from 'react';
import axios from 'axios';


export default function AddBookForm() {
    const [title, setTitle] = useState(``);
    const [author, setAuthor] = useState(``);
    const [description, setDescription] = useState(``);
    const [pages, setPages] = useState(``);

  const onSubmit = (e) => {
    e.preventDefault();
    const bookvar = { 
        title: title,
        author: author,
        description: description,
        pages: parseInt(pages)
     };

    axios
      .post('https://fullstack-finalexam-backend.onrender.com/', bookvar)
      .then((res) => {
        window.location = '/';
      });
  };

    return(
        <div class="CreateBook">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
            </div>
            <div class="col-md-8 m-auto">
              <h1 class="display-4 text-center">Add Book</h1>
              <p class="lead text-center">Create new book</p>
              <form novalidate="" onSubmit={onSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Title of the Book"
                    name="title"
                    class="form-control"
                    spellcheck="false"
                    data-ms-editor="true"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    class="form-control"
                    spellcheck="false"
                    data-ms-editor="true"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Describe this book"
                    name="description"
                    class="form-control"
                    spellcheck="false"
                    data-ms-editor="true"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Number of Pages"
                    name="pages"
                    class="form-control"
                    spellcheck="false"
                    data-ms-editor="true"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                  />
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}