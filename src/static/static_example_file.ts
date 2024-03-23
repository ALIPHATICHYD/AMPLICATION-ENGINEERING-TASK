interface Email {
  email: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateUserData(userData: Email): boolean {
  const { email } = userData;
  if (!email) {
    return false; 
  }
  return validateEmail(email);
}

export default validateUserData;