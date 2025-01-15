// https://tech-docs.corndel.com/express/sending-errors.html


export class AppError extends Error {
  constructor(message, code) {
    super(message)
    this.code = code
  }
}

export class Account {
  constructor(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
  }

  updateUsername(newUsername, password) {
    // If newUsername is not given, throw an AppError with code 400 (Bad Request)

    if (!newUsername) {
      throw new AppError ('newUsername is not given', 400);
    }
    // If password is not given, throw an AppError with code 401 (Unauthorized)
    if (!password) {
      throw new AppError ('Password is not given', 401);
    }
    // If password is given but not correct, throw an AppError with code 403 (Forbidden)
    if (password !== this.password) {
      throw new AppError ('Password is incorrect', 403);
    }
    // If newUsername is given and password is correct, update the username
     this.username =newUsername;
  }
}
