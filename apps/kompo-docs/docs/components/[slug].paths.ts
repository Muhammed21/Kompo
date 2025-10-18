import { GetAllSlug } from "@kompo/types";

export default {
  async paths() {
    const res = await fetch("http://localhost:8080/docs/slugs/all");
    const result = await res.json();

    return result.map((doc: GetAllSlug) => ({
      params: { slug: doc.slug.current },
    }));
  },
};
