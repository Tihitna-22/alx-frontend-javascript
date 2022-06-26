import { uploadPhoto, createUser } from './utils';

const arg1 = uploadPhoto;
const arg2 = createUser;
export default async function asyncUploadUser() {
  return Promise.all([arg1(), arg2()]).then((value) => ({
    photo: value[0],
    user: value[1],
  }))
    .catch(() => ({
      photo: null,
      user: null,
    }));
}
