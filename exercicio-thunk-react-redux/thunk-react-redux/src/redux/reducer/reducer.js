import { failedRequest, FAILED_REQUEST, getImage, GET_IMAGE, requestDog, REQUEST_IMAGE } from "../actions/actions";
import { URL_ACTION } from "../actions/actions";

const INITIAL_STATE = {
    imagePath: "https://images.dog.ceo/breeds/terrier-irish/n02093991_403.jpg",
    isFetch: false, 
    error:'',
}

// reducer - tratando os dispachs
const dogReducer = ( state = INITIAL_STATE, action ) => {
    const { type, payload } = action
    switch(type) {
        case GET_IMAGE:
            return {
                ...state,
                imagePath: payload,
                isFetch: false, 
            }
        case REQUEST_IMAGE:
            return {
              ...state,
              isFetch: true, 
            }
        case FAILED_REQUEST:
            return {
              ...state,
              error: payload,
              isFetch: false, 
            }
        default: 
        return state;
    }
};

// requisição da api - despachando as actions
export const fetchDog = () => async (dispatch) => {
    dispatch(requestDog());
  try {
    const response = await fetch(URL_ACTION);
    const json = await response.json();
    return dispatch(getImage(json))
  } catch (error) {
    return dispatch(failedRequest());
  }
}


export default dogReducer;
