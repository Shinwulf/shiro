// Copyright (c) 2020 Azura Apple. All rights reserved. MIT license.

class Command {
  constructor(client, {
    name = null,
    description = "No description provided.",
    category = "Miscellaneous",
    usage = "No usage provided.",
    enabled = true,
    guildOnly = false,
    aliases = new Array(),
    permLevel = "User"
  }) {
    this.client = client;
    this.conf = { enabled, guildOnly, aliases, permLevel };
    this.help = { name, description, category, usage };
  }
}
module.exports = Command;
