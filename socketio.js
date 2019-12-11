document.addEventListener('DOMContentLoaded', () => {
    var socket = io.connect('http://127.0.0.1:5000/status')

    socket.on('connect', () => {
        console.log('Connection established');
    });

    socket.on('message', data => {
        console.log('Message recieved: ${data}');
    });
})