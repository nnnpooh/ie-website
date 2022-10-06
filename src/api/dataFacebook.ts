import axios from "axios";
import { FBFeedType, FBFeedAPIType, FacebookPageType } from "@src/api";

export async function getFacebookFeeds() {
  const pageIdUndergradTh = process.env.PAGE_ID_UNDERGRAD_TH;
  const pageIdMasterIM = process.env.PAGE_ID_MASTER_IM;
  const pageIdGrad = process.env.PAGE_ID_GRAD;
  const accessTokenIM = process.env.PAGE_ACCESS_TOKEN_IM;
  const accessTokenUGTH = process.env.PAGE_ACCESS_TOKEN_UG_TH;
  const accessTokenGrad = process.env.PAGE_ACCESS_TOKEN_GRAD;

  const urlUndergradTh = `https://graph.facebook.com/v14.0/${pageIdUndergradTh}/feed`;
  const urlMasterIM = `https://graph.facebook.com/v14.0/${pageIdMasterIM}/feed`;
  const urlGrad = `https://graph.facebook.com/v14.0/${pageIdGrad}/feed`;

  const postLimit = 10;

  const resUndergradTh = await axios.get<FBFeedAPIType>(urlUndergradTh, {
    params: {
      access_token: accessTokenUGTH,
      fields: "id,created_time,message,permalink_url,full_picture,attachments",
      limit: postLimit,
    },
  });

  const resMasterIM = await axios.get<FBFeedAPIType>(urlMasterIM, {
    params: {
      access_token: accessTokenIM,
      fields: "id,created_time,message,permalink_url,full_picture,attachments",
      limit: postLimit,
    },
  });

  const resGrad = await axios.get<FBFeedAPIType>(urlGrad, {
    params: {
      access_token: accessTokenGrad,
      fields: "id,created_time,message,permalink_url,full_picture,attachments",
      limit: postLimit,
    },
  });

  const dataUndergradThFormatted = formatFBData(
    resUndergradTh.data,
    "undergradTH"
  );
  const dataMasterIMFormatted = formatFBData(resMasterIM.data, "masterIM");
  const dataGradFormatted = formatFBData(resGrad.data, "grad");

  const dataAll: FBFeedType[] = []
    .concat(dataUndergradThFormatted)
    .concat(dataMasterIMFormatted)
    .concat(dataGradFormatted)
    .filter((el) => (!el.message && !el.full_picture ? false : true)) // Filter private feed
    .sort((a, b) => b.created_time_ms - a.created_time_ms); // Sort time

  return {
    dataFacebookFeed: dataAll,
  };
}

function formatFBData(
  dataIn: FBFeedAPIType,
  page: FacebookPageType
): FBFeedType[] {
  const dataOut: FBFeedType[] = dataIn.data.map((el) => {
    const message = el?.message ? formatText(el.message) : "";
    const message_chars = getOnlyCharacters(message);
    return {
      message,
      message_chars,
      permalink_url: el.permalink_url,
      full_picture: el.full_picture || null,
      created_time_ms: new Date(el.created_time).getTime(),
      created_time: el.created_time,
      id: el.id,
      facebook_page: page,
    };
  });

  return dataOut;
}

function formatText(text: string) {
  const line_break = /[\r\n]+/g;
  const multiple_space = /\s+/g;
  return text.replace(line_break, " ").replace(multiple_space, " ");
}

const getOnlyCharacters = (text: string) => {
  const reNotChar = /[^\u0E01-\u0E2Eู^a-z^A-Z]/g;
  return text.replace(reNotChar, "");
};
