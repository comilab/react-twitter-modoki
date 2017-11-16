const initialState = {
  messages: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDMESSAGE': {
      return {
        messages: state.messages.concat(action.value)
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer
