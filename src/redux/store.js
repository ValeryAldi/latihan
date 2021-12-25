import {createStore} from 'redux';

//const [profile, setProfile] = useState("Valery");

// setProfile("Ardi")

const initialState = {
  loading: false,
  name: 'Valery Ardi',
  address: 'Jakarta',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === 'SET_NAME') {
    return {
      ...state,
      name: 'Azzamy',
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
