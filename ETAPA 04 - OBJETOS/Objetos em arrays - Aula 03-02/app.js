const user = {
  name: "gabriel",
  age: 25,
  email: "gabriel@gmail.com",
  city: "cianorte",
  blogPosts: [
    { title: "torta de frango", likes: 60 },
    { title: "coxinha", likes: 50 },
  ],
  login: function () {
    return "usuario logou";
  },
  logout: function () {
    return "usuario deslogou";
  },
  logBlogPost() {
    console.log(`o usuario ${this.name} postou 2 blogs:`);

    this.blogPosts.forEach((post) => {
      const postLikes = post.likes < 35;
      if (postLikes) {
        return;
      }

      console.log(
        `nome da receita: ${post.title} e essa receita tem ${post.likes} likes`
      );
    });
  },
};

user.logBlogPost();
