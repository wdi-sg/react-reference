module.exports = {
  get: (request, response) => {

    const stuff = {
      "banana" : "HkjkjhURI",
      "kiwi":"apple"
    };

    response.send(stuff);
  }
};
