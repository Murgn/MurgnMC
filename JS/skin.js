/*
    Steps to get this to work:
        1. Use a form like I did with uuid
        2. Get the UUID based on the username
        3. Make a GET request to `https://sessionserver.mojang.com/session/minecraft/profile/<UUID>`
           Ex: https://sessionserver.mojang.com/session/minecraft/profile/79eb0979c9574656b68ef28d50c945d7
        4. The imag url is in the base64, you need to decode it and parse it as a json
        5. Getting url for the skin is just `decodedjson.textures.SKIN.url
        6. That should be it :)
           Keep in mind that most skins will be tiny
*/