const client = require("../index");
const config = require("../config.json");
const chalk = require("chalk");

client.on("ready", () => {

  console.log(`Connecté au bot\nStatistiques globales :`)
  console.log("Nom du bot: " + client.user.username +" | L'identifiant du bot: " + client.user.id +" | Prefix du bot: " + config.prefix + " | Nombres de Membres: " + client.users.cache.size);


    console.log("");
    console.log((chalk.cyan(`                               #     #                                          ####### ###### `)));
    console.log((chalk.cyan(`                               ##   ##   ##   #####  ####   ####  #####  #####  #       #     #`)));
    console.log((chalk.cyan(`                               # # # #  #  #    #   #    # #    # #    # #    # #       #     #`)));
    console.log((chalk.cyan(`                               #  #  # #    #   #   #      #    # #    # #    # #####   ###### `)));
    console.log((chalk.cyan(`                               #     # ######   #   #  ### #    # #####  #    # #       #   #  `)));
    console.log((chalk.cyan(`                               #     # #    #   #   #    # #    # #   #  #    # #       #    # `)));
    console.log((chalk.cyan(`                               #     # #    #   #    ####   ####  #    # #####  #       #     #`)));
    console.log("");
    console.log("");
    console.log((chalk.yellow(`                                                   Crée par MatgordFR#1805 !`)));  
    console.log((chalk.yellow(`                                                     © 2021 Matgord, Inc.`))); 
    console.log("");
    console.log((chalk.red(`                                        PayPal: https://www.paypal.com/paypalme/matgord`)));   
    console.log((chalk.red(`                                            Twitter: https://twitter.com/MatgordFR`)));   
    console.log((chalk.red(`                                             Github: https://github.com/MatgordFR`)));   
    console.log("");
    console.log("");
    console.log("");


     // Les statut vous pouvez les modifier est mettre se que vous voulez  
     const arrayOfStatus = [
      `${config.satut1}`,
      `${config.satut2}`
    ]
  
  // 20000 = 20 seconde (vous pouvez changer)
    setInterval(() => {
        client.user.setPresence({ activities: [{ name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)], type: 'PLAYING' }]})
    }, 20000)

});


//MatgordFR//