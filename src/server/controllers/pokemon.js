module.exports = {
  get: (request, response) => {

    const stuff = {
      "banana" : "oranges",
      "kiwi":"apple"
    };

    response.send(stuff);
  }
};
