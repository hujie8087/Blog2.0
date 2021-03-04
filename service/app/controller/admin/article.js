"use strict";

const Controller = require("egg").Controller;

class ArticleController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await this.app.mysql.get("article", {});
    ctx.body = result;
  }

  async getArticleTypeList() {
    const sql = "SELECT * FROM article_type ";
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }

  // async updateArticleType() {
  //   const { ctx } = this;
  //   const { id } = ctx.params;
  //   const { name, order, desc, id } = ctx.request.body;
  //   console.log(ctx.request.body);
  //   const results = await this.app.mysql.update("article_type", {
  //     name,
  //     order,
  //     desc,
  //     id,
  //   });
  //   this.ctx.body = {
  //     data: results,
  //   };
  // }

  async getArticleTypeById() {
    let id = this.ctx.params.id;
    const sql =
      "SELECT article.id as id ," +
      "article.title as title ," +
      "article.introduce as introduce ," +
      "article.content as content ," +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime ," +
      "article.view_count as view_count ," +
      "type.typeName as typeName ," +
      "type.id as typeId " +
      "FROM article LEFT JOIN type ON article.type_id = type.id " +
      "WHERE article.id=" +
      id;
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }
}

module.exports = ArticleController;
