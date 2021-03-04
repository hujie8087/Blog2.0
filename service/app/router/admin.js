"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get(
    "/api/getArticleTypeList",
    controller.admin.article.getArticleTypeList
  );
  //   router.post(
  //     "/api/updateArticleType",
  //     controller.admin.article.updateArticleType
  //   );
};
