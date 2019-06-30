function completePuzzleTwo() {
    completed.classList.add('done');
    completed.textContent = 'DONE';
    alert ("Well Done!");
};

completed.onclick = completePuzzleTwo();
