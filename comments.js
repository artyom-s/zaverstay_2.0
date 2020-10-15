//добавление новых комментариев
let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field-text');
let commentFieldName = document.querySelector('.comment-field-name');

//лимит на количество символов
let charCounter = document.querySelector('.char-counter');
let submitButton = document.querySelector('.submit-button');

//добавление новых комментариев
commentForm.onsubmit = function (evt) {
  evt.preventDefault();

	let newComment = document.createElement('div');
	newComment.classList.add('user-comment');
	
	let newCommentName = document.createElement('h4');
	newCommentName.classList.add('commentator-name');
	newCommentName.textContent = commentFieldName.value;
	
	let newCommentText = document.createElement('p');
	newCommentText.classList.add('comment-text');
	newCommentText.textContent = commentField.value;
	
	let newCommentAvatar = document.createElement('img');
	newCommentAvatar.classList.add('commentator-avatar');
	newCommentAvatar.src = "img/avatar-def.jpg";

	commentField.value = '';
	
	commentList.append(newComment);
	newComment.appendChild(newCommentAvatar);
	newComment.appendChild(newCommentName);
	newComment.appendChild(newCommentText);

};

//лимит на количество символов
commentField.oninput = function () {
	
	console.log(commentField.value.length);

	if (commentField.value.length < 10) {
	commentForm.classList.add('warning');
    submitButton.disabled = true;
		
	charCounter.textContent = 'Введите более 10 символов. Использовано символов: ' + commentField.value.length;
		
	} else if (commentField.value.length > 200) {
    commentForm.classList.add('warning');
    submitButton.disabled = true;
		
	charCounter.textContent = 'Введите менее 200 символов. Использовано символов: ' + commentField.value.length;
		
  } else {
    commentForm.classList.remove('warning');
    submitButton.disabled = false;
	  
	 charCounter.textContent = 'Использовано символов: ' + commentField.value.length;
  }
};