import axios from "axios";

const instance = axios.create({
   baseURL: "https://jsonplaceholder.typicode.com/",
});

export const postsAPI = {
   getPosts: async (sumPosts) => {
      let response;
      if (sumPosts === "all") {
         response = await instance.get(`posts/`);
      } else {
         response = await instance.get(`posts/?_limit=${sumPosts}`);
      }
      return response.data;
   },
   getUsers: async () => {
      const response = await instance.get(`users/`);

      return response.data;
   },
};
