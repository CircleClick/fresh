import defaultLinks from '../data/defaultLinks'

export async function getLinks() {
  try {
    const response = await fetch(`https://www.circleclick.com/wp-json/wp/v2/links?t=${Date.now()}`, {
      "headers": {
        "accept": "application/json",
        "cache-control": "no-cache",
        "pragma": "no-cache",
      },
    });
    const data = await response.json();
    const links = data.map(link => (
      {
        name: link.title && link.title.rendered,
        url: link.url
      }
    ));
    return links;

  } catch(error) {
    console.error('error', error);
    return defaultLinks;
  }

}