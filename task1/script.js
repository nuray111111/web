function showMoreInfo(cardNumber) {
    const modal = document.getElementById('info-modal');
    const modalText = document.getElementById('modal-text');

    modalText.textContent = `You clicked on Card ${cardNumber}. More information can be displayed here.`;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('info-modal');
    modal.style.display = 'none';
}
