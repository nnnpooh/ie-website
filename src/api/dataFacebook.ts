import axios from "axios";
import { FBFeedType } from "@src/api";

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

  const postLimit = 5;

  const resUndergradTh = await axios.get<FBFeedType>(urlUndergradTh, {
    params: {
      access_token: accessTokenUGTH,
      fields: "id,created_time,message,permalink_url,full_picture,attachments",
      limit: postLimit,
    },
  });

  const resMasterIM = await axios.get<FBFeedType>(urlMasterIM, {
    params: {
      access_token: accessTokenIM,
      fields: "id,created_time,message,permalink_url,full_picture,attachments",
      limit: postLimit,
    },
  });

  const resGrad = await axios.get<FBFeedType>(urlGrad, {
    params: {
      access_token: accessTokenGrad,
      fields: "id,created_time,message,permalink_url,full_picture,attachments",
      limit: postLimit,
    },
  });

  console.log({ resUndergradTh });
  return {
    dataUndergradTh: resUndergradTh.data,
    dataMasterIM: resMasterIM.data,
    dataGrad: resGrad.data,
  };
}
