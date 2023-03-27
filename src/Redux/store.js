import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
      newMessageBody: "",
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.friends = sidebarReducer(this._state.friends, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
