const paginate = (followers) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  //^I want that to work on float nums too
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    //new copy - cut to  [array[arrays]]
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
  //[Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10)]
};

export default paginate;
