"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await this.app.mysql.get("article", {});
    ctx.body = result;
  }
  async getArticleList() {
    const sql =
      "SELECT article.id as id ," +
      "article.title as title ," +
      "article.introduce as introduce ," +
      "FROM_UNIXTIME(article.add_time,'%Y-%m-%d %H:%i:%s') as addTime ," +
      "article.view_count as view_count ," +
      "article_type.name as typeName " +
      "FROM article LEFT JOIN article_type ON article.type_id = article_type.id";
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }

  async getArticleById() {
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

module.exports = HomeController;
