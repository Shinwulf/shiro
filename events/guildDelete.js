// Copyright (c) 2020 Azura Apple. All rights reserved. MIT license.

// This event runs anytime it leaves a server.

module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(guild) {

    this.client.logger.log(`Left guild: ${guild.name} (${guild.id}) with ${guild.memberCount - 1} members`);

    //this.client.user.setActivity(`over ${this.client.guilds.size} servers`, { type: "WATCHING" });
    
    // We want to make sure that we delete all the information about the server, before we're leaving it!
    if (this.client.settings.has(guild.id)) {
      this.client.settings.delete(guild.id);
    }
  }
};
