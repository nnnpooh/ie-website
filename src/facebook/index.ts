require("dotenv").config();
import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
import { FBLongLive, FBAccessToken } from "./types/main";
import * as fs from "fs";
import { parse, stringify } from "envfile";

async function getLongLivedAccessToken(
  appId: string,
  appSecret: string,
  shortLiveUserAccessToken: string
) {
  // const url = `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${shortLiveUserAccessToken}`;

  try {
    const output = await axios.request<FBLongLive>({
      url: "https://graph.facebook.com/oauth/access_token",
      params: {
        grant_type: "fb_exchange_token",
        client_id: appId,
        client_secret: appSecret,
        fb_exchange_token: shortLiveUserAccessToken,
      },
    });
    fs.writeFileSync(
      "./output_longlivedAT.json",
      JSON.stringify(output.data, null, 2),
      "utf-8"
    );
    return output.data.access_token;
  } catch (err) {
    console.log(err.response);
    return "";
  }
}

async function getAccessToken(accountId: string, longLivedAccessToken: string) {
  // const url = `https://graph.facebook.com/${accountId}/accounts?access_token=${longLivedAccessToken}`;

  try {
    const output = await axios.request<FBAccessToken>({
      url: `https://graph.facebook.com/${accountId}/accounts`,
      params: {
        access_token: longLivedAccessToken,
      },
    });
    fs.writeFileSync(
      "./output_pageAT_raw.json",
      JSON.stringify(output.data, null, 2),
      "utf-8"
    );

    const outputFormatted = output.data.data.map((el) => ({
      access_token: el.access_token,
      name: el.name,
      id: el.id,
    }));

    fs.writeFileSync(
      "./output_pageAT.json",
      JSON.stringify(outputFormatted, null, 2),
      "utf-8"
    );
    return outputFormatted;
  } catch (err) {
    console.log(err.response);
  }
}

async function run() {
  const appId = process.env.FB_APP_ID;
  const appSecret = process.env.FB_APP_SECRET;
  const shortLiveUserAccessToken = process.env.FB_SHORT_LIVED_USER_ACCESS_TOKEN;
  const userAccountId = process.env.FB_USER_ACCOUNT_ID;

  const pageIdUndergradTh = process.env.PAGE_ID_UNDERGRAD_TH;
  const pageIdMasterIM = process.env.PAGE_ID_MASTER_IM;
  const pageIdGrad = process.env.PAGE_ID_GRAD;
  const pageIdIE = process.env.PAGE_ID_IECMU;

  const longLiveAccessToken = await getLongLivedAccessToken(
    appId,
    appSecret,
    shortLiveUserAccessToken
  );

  if (longLiveAccessToken) {
    // write to .env file
    const envString = stringify({
      FB_APP_ID: appId,
      FB_APP_SECRET: appSecret,
      FB_SHORT_LIVED_USER_ACCESS_TOKEN: longLiveAccessToken,
      FB_USER_ACCOUNT_ID: userAccountId,
    });

    const ats = await getAccessToken(userAccountId, longLiveAccessToken);

    const envLocalString = stringify({
      PAGE_ID_UNDERGRAD_TH: pageIdUndergradTh,
      PAGE_ACCESS_TOKEN_UG_TH: ats.find((el) => el.id === pageIdUndergradTh)
        .access_token,
      PAGE_ID_MASTER_IM: pageIdMasterIM,
      PAGE_ACCESS_TOKEN_MASTER_IM: ats.find((el) => el.id === pageIdMasterIM)
        .access_token,
      PAGE_ID_GRAD: pageIdGrad,
      PAGE_ACCESS_TOKEN_GRAD: ats.find((el) => el.id === pageIdGrad)
        .access_token,
      PAGE_ID_IECMU: pageIdIE,
      PAGE_ACCESS_TOKEN_IECMU: ats.find((el) => el.id === pageIdIE)
        .access_token,
    });

    console.log(envString);
    console.log(envLocalString);
  }
}

run();
