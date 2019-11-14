const DEFAULT = {
  isOpen: false,
  modalProps: {}
}

const modalReducer = (state = DEFAULT, action) => {
  switch (action.type) {
    case 'MODAL_OPEN':
      return Object.assign({}, state, {
        isOpen: true,
        modalProps: action.modalProps
      });
    case 'MODAL_CLOSE':
      return Object.assign({}, state, {
        isOpen: false,
        modalProps: {}
      });
    default:
      return state
  }
}

export default modalReducer;
