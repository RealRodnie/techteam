const paragraph = document.querySelector('#paragraph');

const params = new URLSearchParams(window.location.search);

params.forEach((value)=>{
    paragraph.append(`${value}`);
    paragraph.append(document.createElement('br'));
});