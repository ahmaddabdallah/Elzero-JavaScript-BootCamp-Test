function valid(e) {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let result1 = document.getElementById('result-1');
  // let result2 = document.getElementById('result-2');
  if (name === '' || email === '') {
    result1.textContent = 'Error email';
    result1.style.color = 'red';
    e.preventDefault();
    return false;
  }
  return true;
}
