export const MODAL_OPEN = 'MODAL_OPEN'
function modalOpen(modalProps) {
  return {
    type: MODAL_OPEN,
    modalProps
  }
}

export const MODAL_CLOSE = 'MODAL_CLOSE'
function modalClose() {
  return {
    type: MODAL_CLOSE
  }
}

export const open = (modalProps) => {
  return (dispatch) => (dispatch(modalOpen(modalProps)));
}

export const close = () => {
  return (dispatch) => (dispatch(modalClose()));
}
