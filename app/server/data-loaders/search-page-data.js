import { Story } from "@quintype/framework/server/api-client";
import { storyFields } from "../../isomorphic/constants";

export function loadSearchPageData(client, query) {
  return Story.getSearch(client, { q: query, limit: "20", fields: storyFields }).then(result => ({
    stories: result.stories.map(story => story.asJson()),
    total: result.total,
    query
  }));
}
