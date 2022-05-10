import axios from 'axios';
import { getHeadersAndParams } from '../utils/common-utils';
export const getData = async (formData, jsonText, paramData, header) => {
  const apiType = formData.type.toLowerCase();
  const apiURL = formData.url;
  const apiHeaders = getHeadersAndParams(header);
  const apiParams = getHeadersAndParams(paramData);
  try {
    return await axios({
      method: apiType,
      url: apiURL,
      body: jsonText,
      headers: apiHeaders,
      params: apiParams,
    });
  } catch (error) {
    console.log('Error While calling getData API', error);
    return 'error';
  }
};
