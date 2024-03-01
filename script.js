document.addEventListener('DOMContentLoaded', function () {
    const addPostBtn = document.getElementById('addPostBtn');
    const postFormModal = document.getElementById('postFormModal');

    addPostBtn.addEventListener('click', function () {
      postFormModal.style.display = 'block';
    });
});

function closeModal() {
    const postFormModal = document.getElementById('postFormModal');
    postFormModal.style.display = 'none';
}