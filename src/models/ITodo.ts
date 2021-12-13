
export interface ITodo {
  userId?: number;
  id: number;
  title?: string;
  body?: string;
  completed?: boolean;
  update?: () => void;
  remove?: () => void;

}