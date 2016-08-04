// example stream source. rework for firebase.
// const stream = new window.EventSource('/sse')

export default {
  namespace: 'game',
  state: {
    name: ''
  },
  subscriptions: [
    // asynchronous read-only operations that don't modify state directly.
    // Can call actions. Signature of (send, done).
    // (send, done) => {
    //   // do stuff
    // }
  ],
  reducers: {
    // synchronous operations that modify state. Triggered by actions. Signature of (data, state).
    // update: (action, state) => ({ title: action.value })
  },
  effects: {
    create: (data, state, send, done) => {
      console.log(data, state)
      done()
    }
    // asynchronous operations that don't modify state directly.
    // Triggered by actions, can call actions. Signature of (data, state, send, done)
    // new: (data, state, send, done) => {
    //   // find empty room (firebase)
    //   // create new room (firebase)
    //   // navigate user to new room
    //   done()
    // }
  }
}
