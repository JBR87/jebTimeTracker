document.addEventListener("DOMContentLoaded", ()=>{
  let form=document.querySelector("form")

  form.buttonQuery.addEventListener("click", ()=>{
    form.out.innerHTML="Query started... Please wait up to 12 seconds"

    fetch("http://localhost:8080/records?email="+form.email1.value)
      .then(response => response.json())
      .then(jsonobj => buildTable(jsonobj))
    
    function buildTable(jsonobj) {
      if(!jsonobj.length)
        return
      let tbl=document.createElement("table")
      tbl.createCaption().innerText="Timesheet for "+form.email1.value
      let hdr=tbl.insertRow()
      for(let prop in jsonobj[0]) {
        hdr.appendChild(document.createElement("th")).innerText=prop
      }
      jsonobj.reduce((t, x) => {
        let row=t.insertRow()
        for(let prop in x) {
          row.insertCell().innerText=x[prop]
        }
        return t
      }, tbl)
      form.out.innerHTML=""
      form.out.appendChild(document.createElement("p"))
      form.out.appendChild(tbl)
    }
  }, false)

  form.buttonSend.addEventListener("click", ()=>{
    form.out.innerHTML="Entry is being submitted..."

    let timeEntry = {
      "email": form.email2.value,
      "start": form.starttime.value,
      "end": form.endtime.value
    }

    let formBody = []
    for (let prop in timeEntry) {
        let encodedKey = encodeURIComponent(prop)
        let encodedValue = encodeURIComponent(timeEntry[prop])
        formBody.push(encodedKey + "=" + encodedValue)
    }
    formBody = formBody.join("&")

    fetch("http://localhost:8080/records", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: formBody})
        .then((response) => response.json())
        .then((jsonobj) => statusMessage(jsonobj))

    function statusMessage(jsonobj) {
      if(jsonobj.error=="Bad Request") {
        form.out.innerHTML="<b style=\"color:red;\">Wrong format!</b>"
        return
      }
      form.out.innerHTML="Entry has been submitted:<br>" + JSON.stringify(jsonobj)
    }
  }, false)

  form.clear.addEventListener("click", ()=>form.out.innerHTML="")
})