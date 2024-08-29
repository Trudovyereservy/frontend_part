export interface IDirection {
  id: number;
  title: string;
}

export interface ICardCoachProps {
  name: string;
  surname: string;
  directions: IDirection[];
  achievements: string;
  patronymic: string;
  photo: string;
  id: number;
}
