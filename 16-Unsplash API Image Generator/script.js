var xhr3 = new XMLHttpRequest();

xhr3.onreadystatechange = function(){
  if (xhr3.readyState === 4 && xhr3.status === 200) {
    var data = JSON.parse(xhr3.responseText);
    console.log("Sunucudan gelen veri:");
    console.log(data);
  }
}

xhr3.open('GET', 'data.json', true);
xhr3.send();