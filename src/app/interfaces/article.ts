export interface Article {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  published_at: string;
  searchScore?: number;
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Article[];
}
