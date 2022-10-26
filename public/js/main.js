import store from "./store.js";

const socket = io('/');

socket.on('connect', () => {
  console.log('client connected to socket.io server', socket.id);
})
