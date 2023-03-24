let rerenderEntrireTree = () => {
  console.log("state was changed");
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", like: 515 },
      { id: 2, message: "It's my first post", like: 25 },
      { id: 3, message: "Hi, You good?", like: 35 },
      { id: 4, message: "So nice to be here", like: 100 },
    ],
    newPostText: "Hello,its me",
    friends: [{ name: "Misha" }, { name: "Dima" }, { name: "Sasha" }],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Misha" },
      { id: 3, name: "Sasha" },
      { id: 4, name: "Masha" },
      { id: 5, name: "Tanya" },
    ],
    messages: [
      { id: 1, message: "Hello" },
      { id: 2, message: "message" },
      { id: 3, message: "How are you" },
      { id: 4, message: "Are you ok?" },
      { id: 5, message: "yes,good!" },
    ],
  },
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    like: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntrireTree(state);
};
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntrireTree(state);
};
export const subscribe = (observer) => {
  rerenderEntrireTree = observer;
};

export default state;
