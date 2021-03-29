var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  

fetch("https://pocket.data.kasperzutterman.com/pocket.json?sql=select%20given_url%2C%20given_title%2C%20time_added%2C%20resolved_title%2C%20resolved_url%2C%20excerpt%2Cword_count%2C%20time_to_read%2C%20top_image_url%20from%20items%20where%20%22status%22%20!%3D%20%3Ap0%20order%20by%20time_added%20desc&p0=1&_shape=array", requestOptions)
    .then(response => response.json())
    .then(result => {
        var list = document.getElementById('list');
        for (let i = 0; i < Object.keys(result).length; i++) {
            console.log(result[i])

            redirect = document.createElement('a');
            redirect.setAttribute('href', result[i].given_url);

            card = document.createElement('div');
            card.className = "card";

            redirect.appendChild(card);

            appendChildElement = list.appendChild(redirect)
            //appendChildElement.innerHTML = result[i].resolved_title

            title = document.createElement('h2');
            title.className = "title"
            title.innerHTML = result[i].resolved_title
            card.appendChild(title)

            excerpt = document.createElement('p');
            excerpt.className = "excerpt"
            excerpt.innerHTML = result[i].excerpt
            card.appendChild(excerpt)

            if (result[i].time_to_read != null) {
                time_to_read = document.createElement('p');
                time_to_read.className = "time_to_read"
                time_to_read.innerHTML = result[i].time_to_read + " min"
                card.appendChild(time_to_read)
            }

            //appendChildElement.innerHTML = result[i].given_title
        }
    })
    .catch(error => console.log('error', error));


/*
<div class="card">
    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:10%">
    <div class="container">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>
*/