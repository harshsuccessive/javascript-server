export interface IUsers {
    traineeEmail: string;
    reviewerEmail: string;
}
export type accesses = {
    all: string[];
    read: string[];
    write: string[];
    Delete: string[];
};

export interface Ipermission {
    getUsers: accesses;
    getUser1: accesses;
}