import axios from 'axios';

axios.defaults.baseURL = 'http://13.124.233.9:8080';
const instance = axios.create();

instance.defaults.headers['Content-Type'] = 'application/json';


const get = async (url) => {
  try {
    const { data } = await instance.get(url);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};

const del = async (url) => {
  try {
    const { data } = await instance.delete(url);
    return data;
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${error.message}`);
  }
};

/**
 *
 * @param url : url주소 ex) /api/shops
 * @param post : body
 * @param config : default = null, 이미지 보낼때만 "imgPost" 설정 > 'Content-Type': 'multipart/form-data' 설정
 * @returns : res.data 반환
 */
const post = async (url, post: {}) => {
  try {
    const result = await instance.post(url, post);
    return result.data;
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${error.message}`);
  }
};

const patch = async (url, patch: {}) => {
  try {
    const { data } = await instance.patch(url, patch);
    return data;
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${error.message}`);
  }
};

export { get, del as delete, post, patch };
