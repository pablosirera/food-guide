export class UserModel {
  constructor(user) {
    this.id = user.id
    this.created = user.created_at
    this.email = user.email
    this.lastSignIn = user.last_sign_in_at
    this.avatar = user.user_metadata.avatar_url
    this.name = user.user_metadata.name
    this.fullName = user.user_metadata.full_name
    this.providers = user.app_metadata.providers
  }
}
