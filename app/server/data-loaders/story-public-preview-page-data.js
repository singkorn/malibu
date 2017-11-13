const {Story} = require("quintype-toddy-libs/server/api-client");

exports.loadStoryPublicPreviewPageData = function loadStoryPublicPreviewPageData(client, params){
  return Story.getPublicPreviewStory(client, params.encryptedKey)
    .then(story => ({story: story.asJson()}));
}