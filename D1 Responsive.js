
document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('nav button');
  const sections = document.querySelectorAll('.section');
  const form = document.getElementById('chefForm');
  const tableBody = document.querySelector('#chefTable tbody');


  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sections.forEach(sec => sec.classList.remove('active'));
      document.getElementById(btn.dataset.section).classList.add('active');
    });
  });


  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('chefName').value.trim();
    const spec = document.getElementById('specialization').value.trim();
    const exp = document.getElementById('experience').value.trim();

    if(name && spec && exp){
      const row = document.createElement('tr');
      row.innerHTML = `<td>${name}</td><td>${spec}</td><td>${exp}</td>`;
      tableBody.appendChild(row);

      form.reset();
    }
  });
});
