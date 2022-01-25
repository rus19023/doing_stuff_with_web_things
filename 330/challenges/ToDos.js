const onTap = (event) => {
    // If delete button is clicked/tapped, remove the todo from the list
  if ((event.target.id === 'remove')) {
    removeItem(event.target.id);
  }
  if ((event.target.id === 'done')) {
    markDone(event.target.id);
  }
  if ((event.target.id === 'add')) {
    createItem(event.target.id);
  }
}
window.addEventListener('touchend', onTap);