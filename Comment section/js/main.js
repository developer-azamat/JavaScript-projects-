const submitBtn = document.querySelector(".submit__btn");
const user = document.querySelector("#user");
const comment = document.querySelector("#comment");
const likeIcon = document.querySelector(".heart__icon");
const count = document.querySelector(".count");
const commentsCount = document.querySelector(".comments__container");

likeIcon.addEventListener("click", likeVideo);
submitBtn.addEventListener("click", submitFeedback);

let feedbackArr = [];
let newFeedback;
let positiveFeedback = false;
let likesCount = 0;

function submitFeedback(e) {
  e.preventDefault();

  // get user name
  const userForm = user.value;
  // get feedback
  const commentForm = comment.value;
  // if inputs is empty
  if (userForm && commentForm !== "") {
    // create a new feedback
    newFeedback = {
      id: Math.floor(Math.random() * 1000 + 1),
      userName: userForm,
      userComment: commentForm,
      typeOfFeedback: positiveFeedback,
    };

    // add new feedback to array
    feedbackArr.push(newFeedback);
    // if likes add to count
    if (positiveFeedback) {
      addLikes();
    }

    // clear inputs
    resetForm();
    // add feedback to list
    addFeedback(newFeedback);
  }
}

function likeVideo() {
  likeIcon.classList.toggle("liked");

  if (likeIcon.classList.contains("liked")) {
    likeIcon.innerHTML = `<i class="fas fa-heart"></i>`;
    positiveFeedback = true;
  } else {
    likeIcon.innerHTML = `<i class="far fa-heart"></i>`;
    positiveFeedback = false;
  }
}

function addLikes() {
  likesCount++;
  count.innerHTML = likesCount;
}

function resetForm() {
  user.value = "";
  comment.value = "";
  likeIcon.innerHTML = `<i className="far fa-heart"></i>`;
  positiveFeedback = false;
}

function addFeedback(item) {
  // select first letter if the user name
  const letter = item.userName.charAt(0).toUpperCase();
  // create a new div
  const div = document.createElement("div");
  // add class
  div.classList = "comment__card";
  div.id = item.id;
  // add html
  div.innerHTML = `
      <div class="pic center__display">
        ${letter}
      </div>
      <div class="comment__info">
        <small class="nickname">
          ${item.userName}
        </small>
        <p class="comment">
          ${item.userComment}
        </p>
        <div class="comment__bottom">
          <div class="heart__icon-comment">
            ${
              item.typeOfFeedback
                ? `<i className="fas fa-heart"></i>`
                : `<i className="far fa-heart"></i>`
            }
          </div>
          <button>Reply</button>
        </div>
      </div>
    `;
  // insert feedback into the list
  commentsCount.append(div);
}
