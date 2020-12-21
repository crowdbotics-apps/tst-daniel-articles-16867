import { ARTICLE_API_KEY } from "react-native-dotenv"
import axios from "axios"

const articlesAPI = axios.create({
  baseURL: "https://app.botics.co/modules/articles",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    api_key: ARTICLE_API_KEY
  }
});

function article_list(action) {
  return articlesAPI.get(`/article/`)
}

function article_read(action) {
  return articlesAPI.get(`/article/${action.id}/`)
}

export default { article_list, article_read }
