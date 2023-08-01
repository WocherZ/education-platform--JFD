export interface LoginRequest {
  email?: string
  password?: string
}


export interface RegisterRequest extends LoginRequest {
  name: string
  surname: string
  role: string
}
