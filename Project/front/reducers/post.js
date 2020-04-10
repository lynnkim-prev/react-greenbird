// store
export const initialState = {
    mainPosts: []
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

// action
export const addPostAction = {
    type: ADD_POST
};

export const addDummyAction = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        userId: 1,
        user: {
            nickname: 'Green'
        },
    },
};

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
            };
        }
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts]
            };
        }
        default: {
        }
    }
};

export default reducer