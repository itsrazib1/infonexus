export const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4hmio3i.mongodb.net/Infonexus?retryWrites=true&w=majority`;

//use only test
export const apiTest = `mongodb+srv://${process.env.DB_USER2}:${process.env.DB_PASS2}@cluster0.qthn2pl.mongodb.net/bistroDB?retryWrites=true&w=majority`;
console.log(apiTest);
