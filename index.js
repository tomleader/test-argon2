import * as argon2 from "argon2";
try {
    const hash = await argon2.hash("password");
    console.log(99999);
    console.log(hash);
} catch (err) {
    console.log(err);
}