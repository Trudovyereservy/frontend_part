export interface ITagProps {
    name: string;
    changeTags: (tag: string, state: boolean) => void
}