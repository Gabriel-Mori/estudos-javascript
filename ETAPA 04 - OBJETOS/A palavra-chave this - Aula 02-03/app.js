const user = {
  name: "gabriel",
  age: 25,
  email: "gabriel@gmail.com",
  city: "cianorte",
  blogPosts: ["torta de frango", "empadão"],
  login: function () {
    return "usuario logou";
  },
  logout: function () {
    return "usuario deslogou";
  },
  logBlogPost() {
    console.log(`o usuario ${this.name} postou 2 blogs:`);

    this.blogPosts.forEach((post) => {
      console.log(post);
    });
  },
};
user.logBlogPost();
