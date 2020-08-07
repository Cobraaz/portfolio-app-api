const { portfolios, blogs, projects } = require("./data");
const Portfolio = require("../db/models/portfolio");
const Projects = require("../db/models/projects");
const Blog = require("../db/models/blog");

class FakeDB {
  async clean() {
    await Portfolio.deleteMany({});
    await Blog.deleteMany({});
    await Projects.deleteMany({});
  }

  async addData() {
    await Portfolio.create(portfolios);
    await Blog.create(blogs);
    await Projects.create(projects);
  }

  async populate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = new FakeDB();
