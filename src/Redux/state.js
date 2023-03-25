let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let store = {
  _state: {
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
  },
  _callSubscriber() {
    console.log("state was changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;
