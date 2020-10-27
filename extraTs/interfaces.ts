interface IUsers {
    traineeEmail: string;
    reviewerEmail: string;
}
type accesses = {
    all: string[];
    read: string[];
    write: string[];
    Delete: string[];
};

interface Ipermission {
    getUsers: accesses;
    getUser1: accesses;
}