window.addEventListener('load',()=>
{
  const input = document.querySelector('.add-task')
  const list = document.querySelector('.list')
  const form = document.querySelector('.form')

  function savedata()
  {
    localStorage.setItem("data", list.innerHTML)
  }

  function showdata()
  {
    list.innerHTML = localStorage.getItem("data")
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault()

    if(input.value === '')
    {
      alert("write you task")
      return;
    }

    else
    {
      const li =document.createElement('li');
      li.classList.add("p-3");
      li.innerHTML=input.value;
      list.appendChild(li)

      const span = document.createElement('span')
      span.innerHTML ="\u00d7";
      li.appendChild(span)
      savedata()
    }

    input.value="";
    savedata();
    showdata();
  })

  list.addEventListener('click', (e)=>
  {
    if(e.target.tagName === "LI")
    {
      e.target.classList.toggle('checked');
      savedata()
    }
    else if(e.target.tagName=== 'SPAN')
    {
      e.target.parentElement.remove();
      savedata()
    }
    showdata();
  },false);

  showdata();
})