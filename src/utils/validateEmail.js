//function to validate email address
export const validateEmail = (email) => {
  const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;
  return isEmail.test(email);
}