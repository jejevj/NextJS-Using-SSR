// agility.lib.js
import agility from "@agility/content-fetch";
const instanceGuid = "044126e4-u";

export const api = agility.getApi({
  guid: instanceGuid,
  apiKey: process.env.AGILITY_API_KEY,
  isPreview: false,
});
