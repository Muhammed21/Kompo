export default {
  async paths() {
    const res = await fetch(
      'https://l8dxvg8e.api.sanity.io/v2023-01-01/data/query/production?query=*[_type=="docs"]{slug}',
    );
    const { result } = await res.json();

    return result.map((doc) => ({
      params: { slug: doc.slug.current },
    }));
  },
};
