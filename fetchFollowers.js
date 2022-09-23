//fetch them from github api

const url1 = "https://api.github.com/users/john-smilga/followers?per_page=100";

//random user with a lot of followers
const url = "https://api.github.com/users/fabpot/followers?per_page=100";

const url2 =
  "https://api.github.com/search/users?q=type:user/followers?per_page=100";

const fetchFollowers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchFollowers;
