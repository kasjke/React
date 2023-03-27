const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", like: 515 },
    { id: 2, message: "It's my first post", like: 25 },
    { id: 3, message: "Hi, You good?", like: 35 },
    { id: 4, message: "So nice to be here", like: 100 },
  ],
  newPostText: "Hello,its me",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReducer;
