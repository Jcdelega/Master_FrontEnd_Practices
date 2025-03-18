/*Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional)

    Create a web page with a form where you can write a comment and publish it with a button 
    When the user submit its comment, It should appear below the form.
    You can add a button to delete comment as you wish 
    The comments should appear with the date and time of publication (optional).

*/

document.addEventListener( "submit", (event) => {
    event.preventDefault();
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value.trim();
    if (commentText === "") {
        alert("Please write a comment before publishing.");
        return;
    }

    const commentSection = document.getElementById("comments-section");
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";

    const commentParagraph = document.createElement("p");
    commentParagraph.textContent = commentText;

    const timestamp = new Date().toLocaleString();
    const timestampParagraph = document.createElement("p");
    timestampParagraph.className = "timestamp";
    timestampParagraph.textContent = `Published on: ${timestamp}`;

    //We need to create a delete button dynamically every time a comment is published
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete this comment";

    //This is the event to delete the commentDiv
    deleteButton.onclick = function() {
        commentSection.removeChild(commentDiv);
    };

    commentDiv.appendChild(commentParagraph);
    commentDiv.appendChild(timestampParagraph);
    commentDiv.appendChild(deleteButton);

    commentSection.appendChild(commentDiv);

    commentInput.value = "";
});
