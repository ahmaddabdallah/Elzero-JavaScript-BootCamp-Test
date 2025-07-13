function createSelectBox(startYear, endYear) {
  const select = document.createElement('select');
  select.className = 'year-select';

  for (let i = startYear; i <= endYear; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
  }

  document.getElementById('year-selector').appendChild(select);
}

createSelectBox(2000, 2021);
