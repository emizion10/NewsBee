import {
  articles_url,
  _api_key,
  category,
  country_code,
} from '../config/rest_config';

export async function getArticles(cat) {
  try {
    let article = await fetch(
      `${articles_url}?country=${country_code}&category=${cat}`,
      {
        headers: {
          'X-API-KEY': _api_key,
        },
      },
    );
    let result = await article.json();
    return result.articles;
  } catch (error) {
    throw error;
  }
}
