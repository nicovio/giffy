import { useCallback, useReducer } from 'react'

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating',
}

const ACTIONS_REDUCERS = {
  [ACTIONS.UPDATE_KEYWORD]: (state, { payload }) => ({
    ...state,
    keyword: payload,
  }),
  [ACTIONS.UPDATE_RATING]: (state, { payload }) => ({
    ...state,
    rating: payload,
  }),
}

const REDUCER = (state, { type, payload }) => {
  const actionReducer = ACTIONS_REDUCERS[type]
  return actionReducer ? actionReducer(state, { payload }) : state
}

const useForm = ({ initialKeyword = '', initialRating = 'g' } = {}) => {
  const [state, dispatch] = useReducer(REDUCER, {
    keyword: initialKeyword,
    rating: initialRating,
  })

  const { keyword, rating } = state

  const updateKeyword = useCallback((keyword) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword })
  }, [])

  const updateRating = useCallback((rating) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating })
  }, [])

  return {
    keyword,
    rating,
    updateKeyword,
    updateRating,
  }
}

export default useForm
