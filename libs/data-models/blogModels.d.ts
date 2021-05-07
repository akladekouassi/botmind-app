export interface Blog {
  _id?: string;
  title: string;
  body: string;
  createdBy: string;
  createdAt?: Date;
  modifiedAt?: Date;
  likes?: Number;
  likedBy?: string[];
  dislikes?: Number;
  dislikedBy?: string[];
  comments?: Comments[];
}

export interface Comments {
  id?: string;
  comment: string;
  commentator: string;
}

export type BlogRegistrationPayload = Pick<Blog, 'title' | 'body' | 'createdBy'>;
export type UpdateBlogPayload = Pick<Blog, 'title' | 'body' | '_id'>;
