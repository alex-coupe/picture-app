
export interface Image {
    id: number;
    webformatURL: string;
    tags: string;
    views: number,
    downloads: number,
    favorites: number,
    likes:number,
    comments:number,
    user:string,
}

export interface SearchType {
    updateTerm: (e:string) => void
}
