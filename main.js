var afterdata;

fetch('https://status.mojang.com/check')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.getElementById('status1img').src  = imagestatuscheck(data[0]["minecraft.net"]);
    document.getElementById('status2img').src  = imagestatuscheck(data[1]["session.minecraft.net"]);
    document.getElementById('status3img').src  = imagestatuscheck(data[2]["account.mojang.com"]);
    document.getElementById('status4img').src  = imagestatuscheck(data[3]["authserver.mojang.com"]);
    document.getElementById('status5img').src  = imagestatuscheck(data[4]["sessionserver.mojang.com"]);
    document.getElementById('status6img').src  = imagestatuscheck(data[5]["api.mojang.com"]);
    document.getElementById('status7img').src  = imagestatuscheck(data[6]["textures.minecraft.net"]);
    document.getElementById('status8img').src  = imagestatuscheck(data[7]["mojang.com"]);
    document.getElementById('status1').innerHTML = textstatuscheck("minecraft.net", data[0]["minecraft.net"]);
    document.getElementById('status2').innerHTML = textstatuscheck("session.minecraft.net", data[1]["session.minecraft.net"]);
    document.getElementById('status3').innerHTML = textstatuscheck("account.mojang.com", data[2]["account.mojang.com"]);
    document.getElementById('status4').innerHTML = textstatuscheck("authserver.mojang.com", data[3]["authserver.mojang.com"]);
    document.getElementById('status5').innerHTML = textstatuscheck("sessionserver.mojang.com", data[4]["sessionserver.mojang.com"]);
    document.getElementById('status6').innerHTML = textstatuscheck("api.mojang.com", data[5]["api.mojang.com"]);
    document.getElementById('status7').innerHTML = textstatuscheck("textures.minecraft.net", data[6]["textures.minecraft.net"]);
    document.getElementById('status8').innerHTML = textstatuscheck("mojang.com", data[7]["mojang.com"]);
  })
  .catch((err) => {
    console.error(err)
  })


  function textstatuscheck(server, status)
  {
      switch(status){
        default:
          break;
        case "green":
              return server + " is online!";
        case "yellow":
            return server + " is experiencing issues!";
        case "red":
            return server + " is offline!";
      }
  }

  function imagestatuscheck(status){
    switch(status){
      default:
          break;
      case "green":
            return "Assets/green.png";
      case "yellow":
          return "Assets/yellow.png";
      case "red":
          return "Assets/red.png";
    }
  }
