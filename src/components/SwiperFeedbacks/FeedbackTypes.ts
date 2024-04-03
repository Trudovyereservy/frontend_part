export interface TPost {
  post: string;
  name: string;
  description: string;
};

export interface TFeedback extends TPost {
  id: number;
}
