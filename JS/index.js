const fillStat = (name) => {
  console.log(name)
  const stats = document.getElementsByName(name);
  console.log(stats)
  // First loop, find which option is actually selected. 
  const selected = [...stats].filter(stat => stat.checked);

  // Then we need to select every input before it. 
  stats.forEach(stat => {
    if (parseInt(stat.value) <= parseInt(selected[0].value)) {
      stat.checked = true;
      console.log(stat.checked)
    }
  })

}

window.onload = function () {
  let form = document.getElementById('sheet');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const cname = form.elements['cname'].value
    const concept = form.elements['concept'].value
    const bre = form.elements['breed'].value
    const aus = form.elements['auspice'].value
    const tri = form.elements['tribe'].value

    const str = form.elements['strength'].value
    const cha = form.elements['charisma'].value
    const per = form.elements['perception'].value
    const dex = form.elements['dexterity'].value
    const man = form.elements['manipulation'].value
    const intel = form.elements['intelligence'].value
    const sta = form.elements['stamina'].value
    const appe = form.elements['appearance'].value
    const wit = form.elements['wit'].value

    fetch('http://localhost:3000/characters/ ', {
      method: 'POST',
      body: JSON.stringify({
        // user_id: user_id,
        cname: cname,
        concept: concept,
        breed: bre,
        auspice: aus,
        tribe: tri,
        strength: str,
        dexterity: dex,
        charisma: cha,
        stamina: sta,
        wits: wit,
        appearance: appe,
        perception: per,
        manipulation: man,
        intelligence: intel
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log("This Works!");
      });
  })
};






