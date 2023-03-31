const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152
  }
]

let position = 0;
const memberAvatar = document.getElementById("avatar");
const memberFullName = document.getElementById("name");
const memberLocation = document.getElementById("location");
const memberImage = document.getElementById("picture");
const memberLikes = document.getElementById("likes");
const memberComment = document.getElementById("comment");
const memberUsername = document.getElementById("user-name");

function renderMember(memberPosition) {
  const member = posts[memberPosition];
  console.log(member);
  memberAvatar.src = member.avatar;
  memberFullName.innerText = member.name;
  memberLocation.innerText = member.location;
  memberImage.src = member.post;
  memberComment.innerText = member.comment;
  memberLikes.innerText = member.likes;
  memberUsername.innerText = member.username;
}

renderMember(position);

function next() {
  position += 1;
  console.log("1a", position);
  if (position > posts.length - 1) {
    console.log("1b", position);
    position = 0;
  }

  renderMember(position);
}

function previous() {
  position -= 1;
  console.log("2a", +position);
  if (position < 0) {
    console.log("2b", position);
    position = posts.length - 1;
  }

  renderMember(position);
}

let toggled = false;
function toggleBackground(button) {
  toggled = !toggled;

  if (toggled) {
    document.getElementById(button).style.backgroundColor = "red";
    memberLikes.innerText = +memberLikes.innerText + 1;
  } else {
    document.getElementById(button).style.backgroundColor = "white";
    memberLikes.innerText = +memberLikes.innerText - 1;
  }
}

function comment() {
  alert("Comments are disabled");
}

function mail() {
  alert("Mail is disabled");
}