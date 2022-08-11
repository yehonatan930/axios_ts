import HttpClient from "./httpClient";
import { Post } from "../types";

export default class PostsApi extends HttpClient {
  private static classInstance?: PostsApi;

  private constructor() {
    super("https://jsonplaceholder.typicode.com");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new PostsApi();
    }

    return this.classInstance;
  }

  public getPosts = () => this.instance.get<Post[]>("/posts");

  public getPost = (id: string) => this.instance.get<Post>(`/posts/${id}`);

  public deletePost = (id: string) =>
    this.instance.delete<Post>(`/posts/${id}`);
}
