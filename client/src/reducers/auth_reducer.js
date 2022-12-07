const initial_state = {};

export default function (state = initial_state, action) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
