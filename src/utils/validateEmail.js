//function to validate email address
export default function validateEmail(email) {
  const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;
  return isEmail.test(email);
}
