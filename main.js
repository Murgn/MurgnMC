fetch('https://status.mojang.com/check')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.getElementById('status1').innerHTML = statuscheck("minecraft.net", data[0]["minecraft.net"])
    document.getElementById('status2').innerHTML = statuscheck("session.minecraft.net", data[1]["session.minecraft.net"])
    document.getElementById('status3').innerHTML = statuscheck("account.mojang.com", data[2]["account.mojang.com"])
    document.getElementById('status4').innerHTML = statuscheck("authserver.mojang.com", data[3]["authserver.mojang.com"])
    document.getElementById('status5').innerHTML = statuscheck("sessionserver.mojang.com", data[4]["sessionserver.mojang.com"])
    document.getElementById('status6').innerHTML = statuscheck("api.mojang.com", data[5]["api.mojang.com"])
    document.getElementById('status7').innerHTML = statuscheck("textures.minecraft.net", data[6]["textures.minecraft.net"])
    document.getElementById('status8').innerHTML = statuscheck("mojang.com", data[7]["mojang.com"])
  })
  .catch((err) => {
    // Do something for an error here
  })

  function statuscheck(server, status)
  {
      switch(status){
        case "green":
              return server + " is online!";
        case "yellow":
            return server + " is experiencing issues!";
        case "red":
            return server + " is offline!";
            
      }
  }
