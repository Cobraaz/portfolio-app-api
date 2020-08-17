const { portfolios, blogs, projects } = require("./data");
const Portfolio = require("../db/models/portfolio");
const Projects = require("../db/models/projects");

class FakeDB {
  async clean() {
    await Portfolio.deleteMany({});
    await Projects.deleteMany({});
  }

  async addData() {
    await Portfolio.create(portfolios);
    await Projects.create(projects);
  }

  async populate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = new FakeDB();
