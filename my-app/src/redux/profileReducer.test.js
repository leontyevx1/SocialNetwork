import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profileReducer";

let state = {
    posts: [
        {id: 1, messagePost: 'Hi! How are you?', likesCount: 22},
        {id: 2, messagePost: 'It\'s my first post', likesCount: 2},
        {id: 3, messagePost: 'What are you doing now?', likesCount: 1},
        {id: 4, messagePost: 'WoooW', likesCount: 5},
        {id: 5, messagePost: 'Hi!My friend!', likesCount: 3}]
};

test('length of posts should be increment', () => {

    //1. test data
    let action = addPostActionCreator('it is a test');
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(6);

});

test(`last post message should be "it is a test"`, () => {

    //1. test data
    let action = addPostActionCreator('it is a test');
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts[5].messagePost).toBe('it is a test');
})

test('after deleting length of posts should be decrement', () => {
    //1. test data
    let action = deletePostActionCreator(1);
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(4);
})