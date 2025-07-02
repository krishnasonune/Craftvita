
export interface ICertification {
    title: string;
    issuer?: string; // Optional field for platforms like Coursera, HackerRank, etc.
}

export interface IAchievement {
    title: string;
    description?: string;
}

export interface IInterest {
    name: string;
}
